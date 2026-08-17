/* ============================================================
   serve.js — optional local preview server.

   The site itself is plain static files; this is only so you can
   look at it on your machine the same way Vercel will serve it
   (clean URLs, and /work/<slug> routed to project.html).

   Run it with:   node serve.js
   Then open:     http://localhost:3000

   No dependencies, nothing to install. Vercel ignores this file.
   ============================================================ */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

/* Read the real vercel.json rather than hand-copying its rules here.
   These two drifting apart is exactly how /work/<slug> once worked
   locally while 404-ing in production. */
function loadRewrites() {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8"));
    return (cfg.rewrites || []).map((r) => ({
      // "/work/:slug" -> /^\/work\/([^/]+)$/
      re: new RegExp("^" + r.source.replace(/:[^/]+/g, "([^/]+)") + "/?$"),
      destination: r.destination,
    }));
  } catch (e) {
    console.warn("Could not read vercel.json rewrites:", e.message);
    return [];
  }
}

const REWRITES = loadRewrites();

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain; charset=utf-8" });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);

  // Mirror Vercel's cleanUrls redirect: /about.html -> /about (308).
  // This matters — with cleanUrls on, the .html form does NOT serve the
  // page, it redirects. Reproducing that locally is the only way to catch
  // rewrites that point at a .html destination and silently dead-end.
  if (/\.html$/.test(urlPath)) {
    const clean = urlPath.replace(/\.html$/, "").replace(/\/index$/, "/") || "/";
    res.writeHead(308, { Location: clean + (req.url.split("?")[1] ? "?" + req.url.split("?")[1] : "") });
    return res.end();
  }

  // Apply whatever rewrites vercel.json declares.
  for (const rule of REWRITES) {
    if (rule.re.test(urlPath)) {
      // With cleanUrls on, Vercel has already turned /foo.html into a
      // redirect, so a rewrite pointing at /foo.html resolves to nothing
      // and returns 404 in production. Fail loudly here instead of quietly
      // serving the file and letting the bug reach the deployed site.
      if (/\.html$/.test(rule.destination)) {
        return send(res, 500,
          'vercel.json: rewrite destination "' + rule.destination + '" will 404 in ' +
          'production. With "cleanUrls": true, drop the .html extension — use "' +
          rule.destination.replace(/\.html$/, "") + '".');
      }
      urlPath = rule.destination;
      break;
    }
  }

  if (urlPath === "/") urlPath = "/index.html";

  // Mirror Vercel's cleanUrls: /about is served from about.html
  if (!path.extname(urlPath)) {
    const candidate = path.join(ROOT, urlPath + ".html");
    if (fs.existsSync(candidate)) urlPath = urlPath + ".html";
  }

  // Resolve inside ROOT only — refuse anything that escapes it.
  const filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) return send(res, 403, "Forbidden");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return send(res, 404, "Not found: " + urlPath);
    }
    send(res, 200, data, TYPES[path.extname(filePath).toLowerCase()]);
  });
});

server.listen(PORT, () => {
  console.log("Portfolio running at http://localhost:" + PORT);
});

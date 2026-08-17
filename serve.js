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

  // Mirror the vercel.json rewrite: /work/<slug> -> project.html
  if (/^\/work\/[^/]+\/?$/.test(urlPath)) urlPath = "/project.html";

  if (urlPath === "/") urlPath = "/index.html";

  // Mirror Vercel's cleanUrls: /about -> /about.html
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

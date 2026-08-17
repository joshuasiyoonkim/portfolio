/* ============================================================
   project.js — renders a single project's detail page.

   One template (project.html) serves every project. Which one to
   show comes from the URL:

     /work/example-web-app     (clean URL, via vercel.json rewrite)
     /project.html?p=example-web-app   (fallback, always works)

   Reads from the PROJECTS array in projects.js.
   ============================================================ */

(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Asset paths in projects.js are written relative ("assets/covers/x.svg")
  // so they're easy to type. On /work/<slug> a relative path would resolve
  // to /work/assets/... — so normalize everything to root-absolute here.
  function assetURL(path) {
    if (!path) return "";
    if (/^(https?:)?\/\//.test(path) || path.charAt(0) === "/") return path;
    return "/" + path;
  }

  // Work out which project was requested.
  function currentSlug() {
    var qs = new URLSearchParams(window.location.search).get("p");
    if (qs) return qs;

    // /work/example-web-app  ->  example-web-app
    var parts = window.location.pathname.split("/").filter(Boolean);
    if (parts.length && parts[0] === "work" && parts[1]) {
      return decodeURIComponent(parts[1]);
    }
    return null;
  }

  var slug = currentSlug();
  var index = PROJECTS.findIndex(function (p) { return p.slug === slug; });
  var project = PROJECTS[index];
  var root = document.querySelector("#project-root");
  if (!root) return;

  // --- Unknown or missing slug --------------------------------
  if (!project) {
    document.title = "Project not found — Joshua Kim";
    root.innerHTML =
      '<div class="wrap project-head">' +
        '<p class="eyebrow">404</p>' +
        "<h1>That project isn't here.</h1>" +
        '<p class="project-overview">The link may be out of date. ' +
        '<a href="/">Head back to the work</a> and pick from there.</p>' +
      "</div>";
    return;
  }

  // --- Page metadata ------------------------------------------
  document.title = project.title + " — Joshua Kim";
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", project.summary || "");

  // --- Build the page -----------------------------------------
  var accentVar = "var(--" + esc(project.accent || "clay") + ")";

  var links = (project.links || [])
    .map(function (l, i) {
      var cls = i === 0 ? "btn" : "btn secondary";
      return (
        '<a class="' + cls + '" href="' + esc(l.url) + '"' +
        ' target="_blank" rel="noopener noreferrer">' +
        esc(l.label) + '<span aria-hidden="true">&nearr;</span></a>'
      );
    })
    .join("");

  var stack = (project.stack || [])
    .map(function (s) { return '<li class="tag">' + esc(s) + "</li>"; })
    .join("");

  var tags = (project.tags || [])
    .map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; })
    .join("");

  var sections = (project.sections || [])
    .map(function (s) {
      var figure = s.image
        ? "<figure>" +
            '<img src="' + esc(assetURL(s.image)) + '" alt="' + esc(s.caption || s.heading || "") + '" loading="lazy">' +
            (s.caption ? "<figcaption>" + esc(s.caption) + "</figcaption>" : "") +
          "</figure>"
        : "";

      return (
        '<section class="project-section">' +
          "<h2>" + esc(s.heading) + "</h2>" +
          "<p>" + esc(s.body) + "</p>" +
          figure +
        "</section>"
      );
    })
    .join("");

  var hero = project.cover
    ? '<div class="wrap"><div class="project-hero" style="--project-accent: ' + accentVar + '">' +
        '<img src="' + esc(assetURL(project.cover)) + '" alt="' + esc(project.title) + '">' +
      "</div></div>"
    : "";

  // Previous / next, wrapping around the ends of the list.
  function navLink(p, dir, cls) {
    if (!p) return '<a class="' + cls + ' is-empty" aria-hidden="true"><span class="dir">' + dir + "</span></a>";
    return (
      '<a class="' + cls + '" href="/work/' + esc(p.slug) + '">' +
        '<span class="dir">' + dir + "</span>" +
        '<span class="name">' + esc(p.title) + "</span>" +
      "</a>"
    );
  }

  var prev = PROJECTS[index - 1];
  var next = PROJECTS[index + 1];

  root.innerHTML =
    '<div class="wrap">' +
      '<a class="back-link" href="/"><span aria-hidden="true">&larr;</span> All work</a>' +
    "</div>" +

    '<header class="wrap project-head">' +
      '<p class="eyebrow">' + esc(project.year) + " &middot; " + esc(project.role || "") + "</p>" +
      "<h1>" + esc(project.title) + "</h1>" +
      '<p class="project-overview">' + esc(project.overview || project.summary) + "</p>" +
    "</header>" +

    hero +

    '<div class="wrap project-layout">' +
      "<div>" + sections + "</div>" +
      '<aside class="project-aside">' +
        (project.role
          ? '<div class="aside-block"><h3>Role</h3><p>' + esc(project.role) + "</p></div>"
          : "") +
        '<div class="aside-block"><h3>Year</h3><p>' + esc(project.year) + "</p></div>" +
        (stack
          ? '<div class="aside-block"><h3>Built with</h3><ul class="stack-list">' + stack + "</ul></div>"
          : "") +
        (tags
          ? '<div class="aside-block"><h3>Type</h3><ul class="stack-list">' + tags + "</ul></div>"
          : "") +
        (links
          ? '<div class="aside-block"><h3>Links</h3><div class="btn-row">' + links + "</div></div>"
          : "") +
      "</aside>" +
    "</div>" +

    '<nav class="project-nav" aria-label="Project navigation">' +
      navLink(prev, "Previous", "prev") +
      navLink(next, "Next", "next") +
    "</nav>";
})();

/* ============================================================
   main.js — builds the homepage work grid and its filter row.

   Reads from the PROJECTS array in projects.js. You shouldn't
   need to touch this file to add or change a project.
   ============================================================ */

(function () {
  "use strict";

  var grid = document.querySelector("#work-grid");
  var filterBar = document.querySelector("#filters");
  if (!grid) return;

  // Escape anything that came from projects.js before putting it in HTML.
  // Guards against a stray < or & in your own copy breaking the page.
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Asset paths in projects.js are written relative ("assets/covers/x.svg")
  // so they're easy to type. Normalize to root-absolute so they resolve the
  // same way from any page on the site.
  function assetURL(path) {
    if (!path) return "";
    if (/^(https?:)?\/\//.test(path) || path.charAt(0) === "/") return path;
    return "/" + path;
  }

  // Build the list of unique tags across all projects, so the filter
  // buttons stay in sync automatically as you add work.
  function collectTags(projects) {
    var seen = [];
    projects.forEach(function (p) {
      (p.tags || []).forEach(function (t) {
        if (seen.indexOf(t) === -1) seen.push(t);
      });
    });
    return seen.sort();
  }

  function cardHTML(p) {
    var tags = (p.tags || [])
      .map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; })
      .join("");

    var cover = p.cover
      ? '<img src="' + esc(assetURL(p.cover)) + '" alt="" loading="lazy" width="800" height="600">'
      : "";

    return (
      '<li class="card" style="--card-accent: var(--' + esc(p.accent || "clay") + ')">' +
        '<div class="card-media">' +
          cover +
          '<span class="card-year">' + esc(p.year) + "</span>" +
        "</div>" +
        '<div class="card-body">' +
          '<h3><a class="card-link" href="/work/' + esc(p.slug) + '">' + esc(p.title) + "</a></h3>" +
          '<p class="card-summary">' + esc(p.summary) + "</p>" +
          '<ul class="tag-row">' + tags + "</ul>" +
          '<span class="card-cta">View project <span aria-hidden="true">&rarr;</span></span>' +
        "</div>" +
      "</li>"
    );
  }

  function render(filter) {
    var list = filter === "All"
      ? PROJECTS
      : PROJECTS.filter(function (p) {
          return (p.tags || []).indexOf(filter) !== -1;
        });

    if (!list.length) {
      grid.innerHTML = '<li class="empty">Nothing here yet.</li>';
      return;
    }

    grid.innerHTML = list.map(cardHTML).join("");
  }

  function buildFilters() {
    if (!filterBar) return;

    var tags = ["All"].concat(collectTags(PROJECTS));

    filterBar.innerHTML = tags
      .map(function (t, i) {
        return (
          '<button type="button" class="filter" data-tag="' + esc(t) + '"' +
          ' aria-pressed="' + (i === 0 ? "true" : "false") + '">' +
          esc(t) +
          "</button>"
        );
      })
      .join("");

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;

      filterBar.querySelectorAll(".filter").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });

      render(btn.dataset.tag);
    });
  }

  buildFilters();
  render("All");
})();

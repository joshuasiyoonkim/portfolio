/* ============================================================
   contact.js — adds a "copy" button next to the email address.

   The address is already visible and already a mailto: link in the
   HTML, so this is purely an extra convenience. If JavaScript is off
   or the clipboard API is unavailable, nothing is added and the page
   still works exactly as it did.
   ============================================================ */

(function () {
  "use strict";

  if (!navigator.clipboard) return;

  document.querySelectorAll(".email-row").forEach(function (row) {
    var link = row.querySelector(".email-link");
    if (!link) return;

    var address = link.textContent.trim();

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.setAttribute("aria-label", "Copy email address to clipboard");
    row.appendChild(btn);

    var resetTimer;

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(address).then(
        function () {
          btn.textContent = "Copied";
          btn.classList.add("is-copied");
        },
        function () {
          // Clipboard writes can be blocked by permissions policy. Select
          // the address instead, so the prompt to hit copy is actually
          // actionable rather than just an apology.
          try {
            var range = document.createRange();
            range.selectNodeContents(link);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            btn.textContent = "Selected — press Ctrl/⌘+C";
          } catch (e) {
            btn.textContent = "Select and copy";
          }
        }
      );

      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        btn.textContent = "Copy";
        btn.classList.remove("is-copied");
      }, 2000);
    });
  });
})();

// Filtre des catégories de la FAQ (barre latérale) - WIYAO
// La barre latérale sélectionne une catégorie à la fois ; les questions des
// autres catégories restent dans le DOM (masquées via l'attribut hidden) pour
// que l'indexation de la recherche globale et le SEO continuent de les voir.
(function () {
  "use strict";

  var nav = document.querySelector(".faq-cat-nav");
  if (!nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll(".faq-cat-link"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".faq-panel"));
  if (!links.length || !panels.length) return;

  function activate(target, scrollIntoView) {
    var found = false;
    links.forEach(function (link) {
      var on = link.dataset.target === target;
      link.classList.toggle("active", on);
      if (on) {
        link.setAttribute("aria-current", "true");
        found = true;
      } else {
        link.removeAttribute("aria-current");
      }
    });
    if (!found) return;
    panels.forEach(function (panel) {
      panel.hidden = panel.id !== target;
    });
    if (scrollIntoView) {
      var layout = document.querySelector(".faq-layout");
      if (layout && layout.scrollIntoView) {
        layout.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      activate(link.dataset.target, false);
      var hash = "#" + link.dataset.target;
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", hash);
      }
    });
  });

  function activateFromHash(scrollIntoView) {
    var target = (window.location.hash || "").replace(/^#/, "");
    if (target && panels.some(function (p) { return p.id === target; })) {
      activate(target, scrollIntoView);
    }
  }

  // Deep-links depuis d'autres pages ou l'assistant (faq.html#orientation, etc.).
  activateFromHash(true);

  // Changement de hash sans rechargement (boutons précédent/suivant, édition
  // manuelle de l'URL).
  window.addEventListener("hashchange", function () {
    activateFromHash(false);
  });
})();

// Logique de rendu - Kpataa
(function () {
  "use strict";

  const STORAGE_KEY = "kpataa-progress";

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function toggleItem(roadmapId, itemKey) {
    const progress = loadProgress();
    if (!progress[roadmapId]) progress[roadmapId] = [];
    const idx = progress[roadmapId].indexOf(itemKey);
    if (idx >= 0) {
      progress[roadmapId].splice(idx, 1);
    } else {
      progress[roadmapId].push(itemKey);
    }
    saveProgress(progress);
    return progress;
  }

  function countItems(roadmap) {
    let total = 0;
    roadmap.sections.forEach((s) => (total += s.items.length));
    return total;
  }

  function getDoneCount(roadmapId) {
    const progress = loadProgress();
    return (progress[roadmapId] || []).length;
  }

  function buildCard(id, rm) {
    const total = countItems(rm);
    const done = getDoneCount(id);
    const pct = total ? Math.round((done / total) * 100) : 0;

    const card = document.createElement("a");
    card.href = `roadmap.html?id=${id}`;
    card.className = "card";
    card.innerHTML = `
      <div class="card-icon">${rm.icon}</div>
      <h3>${rm.title}</h3>
      <p>${rm.subtitle}</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <span class="progress-label">${pct}% complété</span>
    `;
    return card;
  }

  // ---- Page d'accueil : deux grilles, par métier et par compétence ----
  function renderGrid() {
    const roleGrid = document.getElementById("role-grid");
    const skillGrid = document.getElementById("skill-grid");
    if (!roleGrid && !skillGrid) return;

    if (roleGrid && typeof ROLES !== "undefined") {
      Object.keys(ROLES).forEach((id) => roleGrid.appendChild(buildCard(id, ROLES[id])));
    }
    if (skillGrid && typeof SKILLS !== "undefined") {
      Object.keys(SKILLS).forEach((id) => skillGrid.appendChild(buildCard(id, SKILLS[id])));
    }
  }

  // ---- Page roadmap détail ----
  function renderRoadmap() {
    const container = document.getElementById("roadmap-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const rm = typeof ALL_ROADMAPS !== "undefined" ? ALL_ROADMAPS[id] : null;

    if (!rm) {
      container.innerHTML = `<p>Roadmap introuvable. <a href="index.html">Retour à l'accueil</a></p>`;
      return;
    }

    document.title = `${rm.title} — Kpataa`;

    const total = countItems(rm);
    let progress = loadProgress();
    if (!progress[id]) progress[id] = [];

    const typeLabel = rm.type === "skill" ? "Roadmap par compétence" : "Roadmap par métier";

    const header = document.createElement("div");
    header.className = "roadmap-header";
    header.innerHTML = `
      <span class="badge type-badge">${typeLabel}</span>
      <h1>${rm.icon} ${rm.title}</h1>
      <p class="subtitle">${rm.subtitle}</p>
      <div class="progress-bar large"><div class="progress-fill" id="global-fill"></div></div>
      <span class="progress-label" id="global-label"></span>
    `;
    container.appendChild(header);

    function updateGlobal() {
      const done = (loadProgress()[id] || []).length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      document.getElementById("global-fill").style.width = pct + "%";
      document.getElementById("global-label").textContent = `${done} / ${total} étapes complétées (${pct}%)`;
    }

    const track = document.createElement("div");
    track.className = "track";

    rm.sections.forEach((section, sIdx) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "section";

      const titleEl = document.createElement("h2");
      titleEl.textContent = section.title;
      sectionEl.appendChild(titleEl);

      const list = document.createElement("div");
      list.className = "item-list";

      section.items.forEach((item, iIdx) => {
        const key = `${sIdx}_${iIdx}`;
        const done = progress[id].includes(key);

        const itemEl = document.createElement("div");
        itemEl.className = "item" + (done ? " done" : "") + (item.level === "option" ? " optional" : "");

        const check = document.createElement("button");
        check.className = "check";
        check.type = "button";
        check.setAttribute("aria-label", "Marquer comme fait");
        check.textContent = done ? "✓" : "";
        check.addEventListener("click", () => {
          progress = toggleItem(id, key);
          itemEl.classList.toggle("done");
          check.textContent = itemEl.classList.contains("done") ? "✓" : "";
          updateGlobal();
        });

        const labelWrap = document.createElement("div");
        labelWrap.className = "item-label-wrap";

        const label = document.createElement("span");
        label.className = "item-label";
        label.textContent = item.label;
        labelWrap.appendChild(label);

        if (item.level === "option") {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.textContent = "optionnel";
          labelWrap.appendChild(badge);
        }

        if (item.note) {
          const note = document.createElement("div");
          note.className = "item-note";
          note.textContent = item.note;
          labelWrap.appendChild(note);
        }

        if (item.resource) {
          const link = document.createElement("a");
          link.className = "item-resource";
          link.href = item.resource.url;
          link.textContent = "📎 " + item.resource.label;
          if (!item.resource.url.startsWith("roadmap.html")) {
            link.target = "_blank";
            link.rel = "noopener";
          }
          labelWrap.appendChild(link);
        }

        itemEl.appendChild(check);
        itemEl.appendChild(labelWrap);
        list.appendChild(itemEl);
      });

      sectionEl.appendChild(list);
      track.appendChild(sectionEl);
    });

    container.appendChild(track);
    updateGlobal();

    const resetBtn = document.getElementById("reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Réinitialiser la progression pour cette roadmap ?")) {
          const p = loadProgress();
          p[id] = [];
          saveProgress(p);
          window.location.reload();
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGrid();
    renderRoadmap();
  });
})();

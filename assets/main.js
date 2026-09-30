(function () {
  var IMAGE_DIR = "/assets/images/";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function youtubeId(url) {
    var m = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/.exec(url || "");
    return m ? m[1] : null;
  }

  // Swap a placeholder for a real image once it loads. If the file isn't
  // there (or every candidate fails) the placeholder simply stays.
  function fillSlot(slot, sources) {
    sources = sources.filter(Boolean);
    if (!sources.length) return;
    var img = new Image();
    img.alt = slot.getAttribute("data-alt") || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.className = "slot-img";
    var i = 0;
    img.onload = function () {
      // YouTube serves a 120px grey stub instead of a 404 for missing sizes.
      if (img.naturalWidth <= 120 && i < sources.length - 1) { img.src = sources[++i]; return; }
      slot.classList.add("filled");
    };
    img.onerror = function () {
      if (++i < sources.length) img.src = sources[i];
      else img.remove();
    };
    // Must be in the DOM before src is set, or lazy loading never fires.
    slot.appendChild(img);
    img.src = sources[0];
  }

  function projectSources(p) {
    var list = [];
    if (p.image) list.push(IMAGE_DIR + p.image);
    var id = youtubeId(p.video);
    if (id) {
      list.push("https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg");
      list.push("https://i.ytimg.com/vi/" + id + "/hqdefault.jpg");
    }
    return list;
  }

  function projectCard(p) {
    var meta = [p.kind, p.context, p.year].filter(Boolean).map(esc).join('<span class="sep">·</span>');
    var actions = "";
    if (p.video) actions += '<a class="project-link primary" href="' + esc(p.video) + '" target="_blank" rel="noopener">Watch →</a>';
    if (p.link) actions += '<a class="project-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.linkLabel || "Visit") + " →</a>";
    return (
      '<article class="project-card">' +
        '<div class="project-media">' +
          '<div class="image-placeholder" data-alt="' + esc(p.title) + '">' + esc(p.title) + "</div>" +
          (p.video ? '<span class="play-badge" aria-hidden="true"></span>' : "") +
        "</div>" +
        '<div class="project-body">' +
          (meta ? '<div class="project-meta">' + meta + "</div>" : "") +
          "<h3>" + esc(p.title) + "</h3>" +
          (p.role ? '<div class="project-role">' + esc(p.role) + "</div>" : "") +
          (p.blurb ? "<p>" + esc(p.blurb) + "</p>" : "") +
          (actions ? '<div class="project-actions">' + actions + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderProjects() {
    var projects = window.RM_PROJECTS || [];
    document.querySelectorAll("[data-projects]").forEach(function (el) {
      var limit = parseInt(el.getAttribute("data-projects"), 10) || projects.length;
      var list = projects.slice(0, limit);
      el.innerHTML = list.map(projectCard).join("") +
        (el.hasAttribute("data-more-card")
          ? '<article class="project-card more-card"><div class="strip-label">Next up</div><h3>More on the way</h3><p>New client work and personal projects land here as they ship.</p></article>'
          : "");
      el.querySelectorAll(".project-media .image-placeholder").forEach(function (slot, i) {
        fillSlot(slot, projectSources(list[i]));
      });
    });
  }

  function renderExperience() {
    var items = window.RM_EXPERIENCE || [];
    document.querySelectorAll("[data-experience]").forEach(function (el) {
      el.innerHTML = items.map(function (x) {
        return (
          '<div class="exp-row">' +
            '<div class="exp-period">' + esc(x.period) + "</div>" +
            '<div class="exp-main">' +
              '<h3>' + esc(x.org) + (x.role ? ' <span class="exp-role">' + esc(x.role) + "</span>" : "") + "</h3>" +
              (x.blurb ? "<p>" + esc(x.blurb) + "</p>" : "") +
            "</div>" +
          "</div>"
        );
      }).join("");
    });
  }

  // Static slots: <div class="image-placeholder" data-img="portrait.jpg">
  function fillStaticSlots() {
    document.querySelectorAll(".image-placeholder[data-img]").forEach(function (slot) {
      fillSlot(slot, [IMAGE_DIR + slot.getAttribute("data-img")]);
    });
  }

  function newsletter() {
    var form = document.getElementById("newsletter-form");
    if (!form) return;
    var input = document.getElementById("newsletter-email");
    var button = document.getElementById("newsletter-submit");
    var success = document.getElementById("newsletter-success");

    function isValid(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
    }
    function update() {
      var ok = isValid(input.value);
      button.classList.toggle("is-valid", ok);
      button.disabled = !ok;
    }
    input.addEventListener("input", update);
    update();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!isValid(input.value)) return;
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
  }

  renderProjects();
  renderExperience();
  fillStaticSlots();
  newsletter();
})();

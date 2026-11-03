// ATS Resume Analyzer landing page

(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.getElementById("menu-toggle");
  var links = document.getElementById("nav-links");

  function setMenu(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setMenu(!links.classList.contains("open"));
  });

  // Close the menu after tapping a link
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });

  // Close the menu with Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Reveal sections as they scroll into view
  var targets = document.querySelectorAll(".section-head, .card, .diff, .solution-panel, .cta");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
})();

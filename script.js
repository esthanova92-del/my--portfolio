// ESTHANOVA CREATIVE — premium motion, navigation and responsive interactions
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const topbar = document.querySelector(".topbar");

  // Accessible mobile navigation
  if (button && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
    };
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      nav.classList.toggle("open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Scroll progress, sticky header finish and active section navigation
  const progress = document.querySelector(".progress");
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  let ticking = false;

  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (scrollTop / max) * 100 : 0}%`;
    if (topbar) topbar.classList.toggle("is-scrolled", scrollTop > 24);

    const process = document.querySelector("#process");
    const rail = document.querySelector(".process-track");
    if (process && rail) {
      const rect = process.getBoundingClientRect();
      const span = rect.height - window.innerHeight * 0.45;
      const amount = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - rect.top) / Math.max(1, span)));
      rail.style.setProperty("--process-progress", `${amount * 100}%`);
    }
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScrollUI);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateScrollUI();

  if ("IntersectionObserver" in window && navLinks.length) {
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-32% 0px -58% 0px", threshold: 0 });
    sections.forEach(section => activeObserver.observe(section));
  }

  // Reveal sections as they enter the viewport
  const revealItems = document.querySelectorAll(
    ".page-section,.service,.platform-row>div,.process-track article,.sample,.case," +
    ".quote-grid article,.video-item,.insight-image,.design-piece,.package-grid article"
  );
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 65}ms`);
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Gentle 3D tilt on desktop only — disabled for touch and reduced-motion users
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover && !reduceMotion) {
    document.querySelectorAll(".service,.case,.sample,.package-grid article,.quote-grid article").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 4;
        const rotateX = (0.5 - y) * 4;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });

    // Subtle pointer parallax for the hero brand artwork
    const hero = document.querySelector(".cover");
    const art = document.querySelector(".cover-art");
    if (hero && art) {
      hero.addEventListener("pointermove", event => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        art.style.transform = `translate3d(${x * 9}px, ${y * 8}px, 0)`;
      });
      hero.addEventListener("pointerleave", () => { art.style.transform = ""; });
    }
  }

  // Contact artwork: subtle pointer-responsive glow on desktop, static on touch.
  const contactArt = document.querySelector(".contact-art");
  if (contactArt && canHover && !reduceMotion) {
    contactArt.addEventListener("pointermove", event => {
      const rect = contactArt.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      contactArt.style.background = `radial-gradient(circle at ${x}% ${y}%, #71365f 0%, #2b1934 38%, #100d16 78%)`;
    });
    contactArt.addEventListener("pointerleave", () => {
      contactArt.style.background = "";
    });
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Avoid broken-image icons if a portfolio image has not been added yet.
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("image-missing");
      img.setAttribute("aria-label", "Add the image file listed in README.md");
    }, { once: true });
  });
});

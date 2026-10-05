const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const sectionLinks = [...document.querySelectorAll(".nav-links a")];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-35% 0px -50% 0px", threshold: [0.2, 0.4, 0.6] });

  sections.forEach((section) => observer.observe(section));
}

const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".project-card")];

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === filter));
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.classList.toggle("is-hidden", selected !== "all" && !tags.includes(selected));
    });
  });
});

const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealCards = [...document.querySelectorAll(".reveal-card")];

if ("IntersectionObserver" in window && revealCards.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  revealCards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
    revealObserver.observe(card);
  });
} else {
  revealCards.forEach((card) => card.classList.add("is-visible"));
}

const glowCards = [...document.querySelectorAll(".project-card, .focus-grid article, .outputs-grid article")];

glowCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    if (!motionAllowed || !card.classList.contains("project-card")) return;

    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
    card.style.transform = "";
  });
});

const canvas = document.querySelector(".circuit-canvas");

if (canvas && motionAllowed) {
  const context = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;
  let frame = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(74, Math.max(38, Math.floor(width / 22)));
    particles.length = 0;
    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1 + Math.random() * 1.8,
      });
    }
  };

  const draw = () => {
    frame += 1;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 132) {
          const alpha = (1 - distance / 132) * 0.22;
          context.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    particles.forEach((particle, index) => {
      const pulse = 0.55 + Math.sin(frame * 0.025 + index) * 0.25;
      context.fillStyle = `rgba(13, 148, 136, ${0.35 + pulse * 0.35})`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.r + pulse, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}

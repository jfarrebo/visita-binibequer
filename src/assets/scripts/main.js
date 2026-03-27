/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
});

document.documentElement.classList.add("js");

const revealElements = document.querySelectorAll("[data-reveal]");

if (revealElements.length > 0) {
  const setVisible = (element) => {
    const delay = element.getAttribute("data-reveal-delay") || "0";
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.classList.add("is-visible");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      setVisible(element);
    });
  }
}

const navLinks = document.querySelectorAll('.site-header a[href^="#"]');
const menuToggle = document.querySelector("#site-menu-toggle");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (menuToggle instanceof HTMLInputElement) {
      menuToggle.checked = false;
    }
  });
});

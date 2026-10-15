
/* 1. AUTOMATIC FOOTER YEAR*/
const yearElement = document.getElementById("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* 2. SCROLL REVEAL ANIMATION*/
const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/*3. CLOSE MOBILE MENU
   AFTER CLICKING A LINK*/
const navbarMenu = document.getElementById("navbarMenu");
const navbarLinks = document.querySelectorAll(
  "#navbarMenu .nav-link, #navbarMenu .btn-contact"
);

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (
      navbarMenu &&
      navbarMenu.classList.contains("show") &&
      window.bootstrap
    ) {
      const collapse = window.bootstrap.Collapse.getOrCreateInstance(
        navbarMenu
      );

      collapse.hide();
    }
  });
});

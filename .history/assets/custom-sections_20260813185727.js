document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  document.querySelectorAll('[data-hero-section]').forEach((hero) => {
    const slides = [...hero.querySelectorAll('[data-hero-slide]')];
    const dots = [...hero.querySelectorAll('[data-hero-dot]')];

    if (!slides.length || !dots.length) return;

    let currentIndex = 0;
    let timer = null;

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentIndex;

        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentIndex;

        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    };

    const stopRotation = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const startRotation = () => {
      if (reducedMotion || timer || slides.length < 2) return;

      timer = window.setInterval(() => {
        showSlide(currentIndex + 1);
      }, 3800);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopRotation();
        showSlide(index);
        startRotation();
      });
    });

    hero.addEventListener('mouseenter', stopRotation);
    hero.addEventListener('mouseleave', startRotation);

    hero.addEventListener('focusin', stopRotation);
    hero.addEventListener('focusout', () => {
      window.setTimeout(() => {
        if (!hero.contains(document.activeElement)) {
          startRotation();
        }
      }, 0);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startRotation();
            } else {
              stopRotation();
            }
          });
        },
        {
          threshold: 0.2
        }
      );

      observer.observe(hero);
    } else {
      startRotation();
    }

    showSlide(0);
  });
});
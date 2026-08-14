document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /*
   * =========================================
   * HERO SLIDER
   * =========================================
   */

  document.querySelectorAll('[data-hero-section]').forEach((section) => {
    const slides = Array.from(
      section.querySelectorAll('[data-hero-slide]')
    );

    const dots = Array.from(
      section.querySelectorAll('[data-hero-dot]')
    );

    if (slides.length === 0) return;

    let currentSlide = 0;
    let intervalId = null;

    const showSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentSlide;

        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === currentSlide;

        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    };

    const stopAutoplay = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const startAutoplay = () => {
      if (prefersReducedMotion || slides.length < 2) return;

      stopAutoplay();

      intervalId = window.setInterval(() => {
        showSlide(currentSlide + 1);
      }, 4000);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        startAutoplay();
      });
    });

    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);

    section.addEventListener('focusin', stopAutoplay);
    section.addEventListener('focusout', () => {
      window.setTimeout(() => {
        if (!section.contains(document.activeElement)) {
          startAutoplay();
        }
      }, 0);
    });

    showSlide(0);
    startAutoplay();
  });


  /*
   * =========================================
   * ADD MULTIPLE PRODUCTS TO CART
   * Used by Combos and Bundles
   * =========================================
   */

  const addProductsToCart = async (button, productData) => {
    const originalText = button.textContent;

    if (!productData) return;

    const productIds = productData
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    if (productIds.length === 0) return;

    button.disabled = true;
    button.textContent = 'Adding...';

    try {
      const items = productIds.map((id) => ({
        id: Number(id),
        quantity: 1
      }));

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          items
        })
      });

      if (!response.ok) {
        throw new Error('Unable to add products to cart');
      }

      button.textContent = 'Added ✓';

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1800);

    } catch (error) {
      console.error(error);

      button.textContent = 'Try again';

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1800);
    }
  };


  /*
   * =========================================
   * COMBOS
   * =========================================
   */

  document.querySelectorAll('[data-combo-products]').forEach((button) => {
    button.addEventListener('click', () => {
      addProductsToCart(
        button,
        button.dataset.comboProducts
      );
    });
  });


  /*
   * =========================================
   * BUNDLES
   * =========================================
   */

  document.querySelectorAll('[data-bundle-products]').forEach((button) => {
    button.addEventListener('click', () => {
      addProductsToCart(
        button,
        button.dataset.bundleProducts
      );
    });
  });


  /*
   * =========================================
   * REVIEWS RAIL
   * =========================================
   */

  document.querySelectorAll('.assignment-reviews').forEach((section) => {
    const rail = section.querySelector('[data-reviews-rail]');
    const previousButton = section.querySelector('[data-reviews-prev]');
    const nextButton = section.querySelector('[data-reviews-next]');

    if (!rail) return;

    const getScrollAmount = () => {
      const firstCard = rail.querySelector('.assignment-review-card');

      if (!firstCard) {
        return 300;
      }

      const cardWidth = firstCard.getBoundingClientRect().width;

      const styles = window.getComputedStyle(rail);

      const gap = parseFloat(
        styles.columnGap || styles.gap || 20
      );

      return cardWidth + gap;
    };

    previousButton?.addEventListener('click', () => {
      rail.scrollBy({
        left: -getScrollAmount(),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });

    nextButton?.addEventListener('click', () => {
      rail.scrollBy({
        left: getScrollAmount(),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });


  /*
   * =========================================
   * KEYBOARD SUPPORT FOR HORIZONTAL RAILS
   * =========================================
   */

  document
    .querySelectorAll(
      '.assignment-combos__rail, .assignment-reviews__rail'
    )
    .forEach((rail) => {
      rail.addEventListener('keydown', (event) => {
        if (
          event.key !== 'ArrowLeft' &&
          event.key !== 'ArrowRight'
        ) {
          return;
        }

        const amount =
          event.key === 'ArrowLeft'
            ? -300
            : 300;

        rail.scrollBy({
          left: amount,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        event.preventDefault();
      });
    });
});
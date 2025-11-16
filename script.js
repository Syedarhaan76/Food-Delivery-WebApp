 // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }

    // Function to add the 'animated' class to elements in viewport
    function handleScrollAnimation() {
      const elements = document.querySelectorAll('.hero-text h1, .hero-text p, .hero-text .order-btn, .hero-image img, .social-icons a, .section-tag, .section-title, .service-box, .menu-filters button, .menu-card, .show-more, .reviews-image, .review-card, .review-navigation .nav-btn, .avatars img, .app-text h4, .app-text h2, .app-text p, .app-btn, .app-image, .newsletter p, .newsletter-box, .footer-column');

      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });
    }

    // Header scroll effect
    function handleHeaderScroll() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Initialize animations on page load for elements already in viewport
    document.addEventListener('DOMContentLoaded', function () {
      handleScrollAnimation();
      handleHeaderScroll();

      // Add animated class to hero elements immediately
      const heroElements = document.querySelectorAll('.hero-text h1, .hero-text p, .hero-text .order-btn, .hero-image img, .social-icons a');
      heroElements.forEach(element => {
        element.classList.add('animated');
      });
    });

    // Add scroll event listener
    window.addEventListener('scroll', function () {
      handleScrollAnimation();
      handleHeaderScroll();
    });

    // Add click event listeners for menu filter buttons
    const filterButtons = document.querySelectorAll('.menu-filters button');
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
      });
    });

    // Add quantity button functionality
    const quantityButtons = document.querySelectorAll('.quantity button');
    quantityButtons.forEach(button => {
      button.addEventListener('click', function () {
        const quantityElement = this.parentElement.querySelector('span');
        let quantity = parseInt(quantityElement.textContent);

        if (this.textContent === '+') {
          quantity++;
        } else if (this.textContent === '-' && quantity > 1) {
          quantity--;
        }

        quantityElement.textContent = quantity;
      });
    });
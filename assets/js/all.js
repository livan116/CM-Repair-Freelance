(function ($) {
  "use strict";

  $(window).on("load", function () {
    preLoader();
    filterInit();
    masonryInit();
  });

  $(window).on("scroll", function () {
    var scrollToTop = $(".scroll-to-top"),
      scroll = $(window).scrollTop();
    if (scroll >= 500) scrollToTop.addClass("show");
    else scrollToTop.removeClass("show");
  });

  $(document).ready(function () {
    bannerCarousel();
    searchToggle();
    skillsBar();
    productsCarousel();
    teamCarousel();
    wcuCarousel();
    brandCarousel();
    serviceCarousel();
  });

  if ($(window).width() < 992) {
    $(".navbar .dropdown-toggle").on("click", function (e) {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  $("select").niceSelect();

  // searchToggle Init
  function searchToggle() {
    $(".search-toggle").on("click", function () {
      $(".search-wrapper").addClass("showSearch");
    });
    $(".search-close-wrap, .search-close-btn").on("click", function () {
      $(".search-wrapper").removeClass("showSearch");
    });
  }

  // scroll to top init
  $(".scroll-to-top").each(function () {
    $(this).click(function () {
      $("html,body").animate({ scrollTop: 0 }, "500");
      return false;
    });
  });

  // PreLoader Init
  function preLoader() {
    $("body").addClass("loaded");
    $(".preloader-wrapper").addClass("loaded");
  }

  // skillsBar Init
  function skillsBar() {
    $(".cm-team").waypoint(
      function (direction) {
        $(".progress-bar").each(function () {
          var barWidth = $(this).attr("data-value");
          $(this).animate({ width: barWidth + "%", opacity: 1 });
        });
        this.destroy();
      },
      { offset: "75%" }
    );
  }

  // teamCarousel Init
  function teamCarousel() {
    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        991: {
          items: 2,
        },
      },
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });
  }

  // masonry init
  function masonryInit() {
    $(".masonry").isotope();
  }

  // filter init
  function filterInit() {
    var $gridt = $(".jsFilter");
    $gridt.isotope();
    $(".product-filter-buttons-2").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $gridt.isotope({
        filter: filterValue,
      });
      $(this).addClass("active").siblings().removeClass("active");
    });
  }
  filterInit();

  // banner carousel
  function bannerCarousel() {
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });
  }

  // products carousel
  function productsCarousel() {
    var productsCarousel = $(".fluid-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        425: {
          items: 1,
        },
        991: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
      navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>',
      ],
    });
    $(".product-filter-buttons").on("click", ".btn", function () {
      var $item = $(this);
      var filter = $item.data("owl-filter");
      $(".product-filter-buttons .btn").removeClass("active");
      $(this).addClass("active");
      productsCarousel.owlcarousel2_filter(filter);
    });
  }

  // why-choose-us carousel
  function wcuCarousel() {
    $(".why-choose-us-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
      },
    });
  }

  // brand carousel
  function brandCarousel() {
    $(".brand-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
        },
        575: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // brand carousel
  function serviceCarousel() {
    $(".service-slider").owlCarousel({
      loop: true,
      delay: 5,
      time: 5000,
      
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout:4000,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    $(".team-slider").owlCarousel({
      loop: true,
      time: 3000,

      // margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  $(".testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    clickable: true,
    nav: true,
    dots: false,
    margin: 10,
    touchDrag: true,   // Enable touch drag (for mobile devices)
    mouseDrag: true,   // Enable mouse drag (for desktop)
  });
  

  $(document).on("mouseover", ".social-links-four", function () {
    $(this).addClass("social-links-four-active");
    $(".social-links-four").removeClass("social-links-four-active");
    $(this).addClass("social-links-four-active");
  });
  $(document).on("mouseover", ".single-features-wrap", function () {
    $(this).addClass("single-features-wrap-active");
    $(".single-features-wrap").removeClass("single-features-wrap-active");
    $(this).addClass("single-features-wrap-active");
  });

  /* -----------------------------------------
        fact counter
    ----------------------------------------- */
  // $(".counter").counterUp({
  //   delay: 15,
  //   time: 2000,
  // });
})(jQuery);

// pop up section

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    if (!localStorage.getItem("subscribed")) {
      const modal = new bootstrap.Modal(
        document.getElementById("subscribePopup")
      );
      modal.show();
    }
  }, 60000);
});

// Handle form submission
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add("was-validated");
      return;
    }

    const email = this.querySelector('input[type="email"]').value;

    // Here you would typically send this to your backend
    console.log("Subscribed email:", email);

    localStorage.setItem("subscribed", "true");

    // Show success message
    alert(
      "Thank you for subscribing! Your special repair offers have been sent to your email."
    );

    // Close modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("subscribePopup")
    );
    modal.hide();
  });

  function hello(){
    console.log("Hello")
    alert("Thankyou for subscribing")
  }
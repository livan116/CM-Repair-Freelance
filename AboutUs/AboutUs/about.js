const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
      // Mobile
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Tablet
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // Desktop
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // Large Desktop
      1280: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    grabCursor: true,
    effect: "slide",
    fadeEffect: {
      crossFade: true,
    },
  });
  
  // Optional: Pause on hover
  const swiperContainer = document.querySelector(".swiper-container");
  swiperContainer.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  swiperContainer.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
  // credits section end



//   ----------------------




  // Scroll to Top functionality
const scrollTopBtn = document.getElementById('scrollTop');
const presaleChat = document.getElementById('presaleChat');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Presale Chat functionality
// let isExpanded = false;
// presaleChat.addEventListener('click', () => {
//     if (!isExpanded) {
//         alert('Chat interface would open here');
//         isExpanded = true;
//     }
// });
  

// latest news section start ----------------------------------------

const eventSwiper = new Swiper('.blog-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // When window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// latest news section end ------------------------------------

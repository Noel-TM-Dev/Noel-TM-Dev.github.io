const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}





// const sectionsWithCarousel = document.querySelector(".section-with-carousel");

// createOffsets();
// window.addEventListener("resize", createOffsets);

// function createOffsets() {
//   const sectionWithLeftOffset = document.querySelector(
//     ".section-with-left-offset"
//   );
//   const sectionWithLeftOffsetCarouselWrapper = sectionWithLeftOffset.querySelector(
//     ".carousel-wrapper"
//   );
// //   const sectionWithRightOffset = document.querySelector(
// //     ".section-with-right-offset"
// //   );
// //   const sectionWithRightOffsetCarouselWrapper = sectionWithRightOffset.querySelector(
// //     ".carousel-wrapper"
// //   );
//   const offset = (window.innerWidth - 1100) / 2;
//   const mqLarge = window.matchMedia("(min-width: 1200px)");

//   if (sectionWithLeftOffset && mqLarge.matches) {
//     sectionWithLeftOffsetCarouselWrapper.style.marginLeft = offset + "px";
//   } else {
//     sectionWithLeftOffsetCarouselWrapper.style.marginLeft = 0;
//   }

// //   if (sectionWithRightOffset && mqLarge.matches) {
// //     sectionWithRightOffsetCarouselWrapper.style.marginRight = offset + "px";
// //   } else {
// //     sectionWithRightOffsetCarouselWrapper.style.marginRight = 0;
// //   }
// }


  let slidesPerView = [1.5, 2.5, 3.5];

  const swiper = document.querySelector(".swiper");
  new Swiper(swiper, {
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
    },
    speed: 1800,
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    lazyLoading: true,
    keyboard: {
      enabled: true
    },
    centeredSlides:true,
    effect:'coverflow',
    navigation: {
      prevEl: document.querySelector(".carousel-control-left"),
      nextEl: document.querySelector(".carousel-control-right")
    },
    pagination: {
      el: document.querySelector(".swiper-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
        </div>`;
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });


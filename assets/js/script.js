// ======= navbar brand menu ======

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    document.querySelectorAll(".brand-dropdown").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        el.classList.add("show");
        el.querySelector(".brand-menu").classList.add("show");
      });
      el.addEventListener("mouseleave", function () {
        el.classList.remove("show");
        el.querySelector(".brand-menu").classList.remove("show");
      });
    });
  }
});




// ======= navbar searchbar ======
document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.querySelectorAll(".search-toggle");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchClose = document.getElementById("searchClose");

  if (searchToggle.length && searchOverlay) {
    // Open search overlay
    searchToggle.forEach((button) => {
      button.addEventListener("click", () => {
        searchOverlay.classList.add("active");
        const input = searchOverlay.querySelector("input");
        if (input) input.focus();
      });
    });
  }

  if (searchClose && searchOverlay) {
    // Close search overlay
    searchClose.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });

    // Close with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchOverlay.classList.remove("active");
      }
    });
  }
});

// ======= product detail page ======

// Thumbnails slider
if (document.querySelector(".product-thumbs")) {
  const thumbsSwiper = new Swiper(".product-thumbs", {
    spaceBetween: 12,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });

  if (document.querySelector(".product__gallery")) {
    new Swiper(".product__gallery", {
      spaceBetween: 16,
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      navigation: {
        nextEl: ".product__gallery .swiper-button-next",
        prevEl: ".product__gallery .swiper-button-prev",
      },
      pagination: {
        el: ".product__gallery .swiper-pagination",
        clickable: true,
      },
      keyboard: { enabled: true },
      thumbs: { swiper: thumbsSwiper },
      zoom: { maxRatio: 2 },
    });
  }
}

// ======= active storage option ======
const storageBtns = document.querySelectorAll(".storage-options .btn");
if (storageBtns.length) {
  storageBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      storageBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// ======= Shop page ======
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".product-card-gallery")) {
    const swiper = new Swiper(".product-card-gallery", {
      loop: false,
    });

    const colorDots = document.querySelectorAll(
      ".product__color_options .color-dot"
    );
    if (colorDots.length) {
      colorDots.forEach((dot) => {
        dot.addEventListener("click", function (e) {
          e.preventDefault();
          const slideIndex = parseInt(this.getAttribute("data-slide"));
          swiper.slideTo(slideIndex);
          colorDots.forEach((d) => d.classList.remove("active"));
          this.classList.add("active");
        });
      });
    }
  }
});

// --- filter slider ----
const byPercent = (el, pct) =>
  el.scrollBy({ left: el.clientWidth * pct, behavior: "smooth" });

const scrollBtns = document.querySelectorAll(".scroll-btn");
if (scrollBtns.length) {
  scrollBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.target);
      const dir = Number(btn.dataset.dir || 1);
      if (target) byPercent(target, 0.2 * dir);
    });
  });
}

/* --- Dual range logic --- */
const minEl = document.getElementById("priceMin");
const maxEl = document.getElementById("priceMax");
const minOut = document.getElementById("minOut");
const maxOut = document.getElementById("maxOut");

if (minEl && maxEl && minOut && maxOut) {
  const clampGap = 0; // adjust if needed

  function pct(val, min, max) {
    return ((val - min) / (max - min)) * 100;
  }

  function update() {
    let a = +minEl.value,
      b = +maxEl.value;
    if (a > b - clampGap) a = b - clampGap;
    if (b < a + clampGap) b = a + clampGap;
    minEl.value = a;
    maxEl.value = b;

    minOut.textContent = a;
    maxOut.textContent = b;

    const minPct = pct(a, +minEl.min, +minEl.max);
    const maxPct = pct(b, +maxEl.min, +maxEl.max);
    minEl.style.setProperty("--minPct", `${minPct}%`);
    minEl.style.setProperty("--maxPct", `${maxPct}%`);
  }

  minEl.addEventListener("input", update);
  maxEl.addEventListener("input", update);
  update();
}






// ============== Home product swiper ===============



document.addEventListener("DOMContentLoaded", () => {
  // Left-to-right sliders
  document.querySelectorAll(".swiper-ltr").forEach((el) => {
    new Swiper(el, {
      slidesPerView: 4.5,
      spaceBetween: 5,
      freeMode: true,
      mousewheel: true,
      // loop: true,
    });
  });

  // Right-to-left slider
  document.querySelectorAll(".swiper-rtl").forEach((el) => {
    new Swiper(el, {
      slidesPerView: 4.5,
      spaceBetween: 5,
      freeMode: true,
      mousewheel: true,
      loop: true,
      dir: "rtl",
      // centeredSlides: true,
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Shared responsive settings
  const swiperOptions = {
    spaceBetween: 5,
    freeMode: true,
    mousewheel: true,
    breakpoints: {
      320: { slidesPerView: 1.4 },
      576: { slidesPerView: 2.3 },
      768: { slidesPerView: 2.9 },
      992: { slidesPerView: 3.6 },
    }
  };

  // Left-to-right sliders
  document.querySelectorAll(".swiper-ltr").forEach((el) => {
    new Swiper(el, swiperOptions);
  });

  // Right-to-left slider
  document.querySelectorAll(".swiper-rtl").forEach((el) => {
    new Swiper(el, {
      ...swiperOptions,
      centeredSlides: true,
    });
  });
});













/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 300,
  // reset: true
});



sr.reveal(`.hero__heading`)
sr.reveal(`.number__card_small-wrapper, .shop__filters_wrapper, .product__gallery_wrapper`, { origin: "right" });
sr.reveal(`.hot__products_title, .product__data_wrapper`, { origin: "left" });
sr.reveal(`.hero__btn, .home__product_data, .explore__products_img, .compare__product_img`, { origin: "bottom" });

sr.reveal(`.shop__card`, { interval: 300, distance: "100px" });

sr.reveal(`.footer__column, .spec`, { origin: "left", interval: 300, distance: "100px" });

sr.reveal(`.home__product`, { origin: "right", interval: 200 });



// Check the screen width and add animation on large screens only
if (window.innerWidth <= 992) {
  
  sr.reveal(`.home__product_data`, { origin: "left"});
    sr.reveal(`.home__product`, { origin: "top", interval: 200 });

}


const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("srcIcon");
const menuList = document.getElementById("menuList");
const items = menuList.querySelectorAll("li:not(.category)");

let isSearchVisible = false;

searchIcon.addEventListener("click", function () {
  isSearchVisible = !isSearchVisible;
  searchInput.style.display = isSearchVisible ? "block" : "none";
  menuList.style.display = isSearchVisible ? "block" : "none";

  if (!isSearchVisible) {
    searchInput.value = "";
    Array.from(items).forEach(function (item) {
      item.style.display = "block";
    });
  }
});

searchInput.addEventListener("keyup", function (event) {
  const searchText = event.target.value.toLowerCase();
  Array.from(items).forEach(function (item) {
    const itemName = item.textContent.toLowerCase();
    item.style.display = itemName.includes(searchText) ? "block" : "none";
  });
});

document.addEventListener("click", function (event) {
  if (
    !menuList.contains(event.target) &&
    !searchIcon.contains(event.target) &&
    !searchInput.contains(event.target)
  ) {
    menuList.style.display = "none";
  }
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}, 3000);

const lightboxImages = document.querySelectorAll(".lightbox-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox-nav.prev");
const nextBtn = document.querySelector(".lightbox-nav.next");

let currentIndex = 0;

function showImage(index) {
  lightboxImg.src = lightboxImages[index].src;
  currentIndex = index;
  lightbox.style.display = "flex";
}

lightboxImages.forEach((img, index) => {
  img.addEventListener("click", () => showImage(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

const footer = document.querySelector("footer");
const heroSection = document.querySelector("#hero-section");

const human = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("hide-footer");
      } else {
        footer.classList.remove("hide-footer");
      }
    });
  },
  { threshold: 0.5 }
);

human.observe(heroSection);

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((el) => observer.observe(el));

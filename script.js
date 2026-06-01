/**
 * Coffee Club — Cinematic Restaurant Experience
 * Menu data, showcase panels, review drawer, interactions + Total Bill System
 */

const MENU_DATA = {
  breakfast: {
    title: "Breakfast",
    atmosphere: "Warm Morning Light",
    subtitle: "Golden hours, ghee-kissed traditions, and the soul of South India awakening.",
    mood: "morning",
    dishes: [
      {
        name: "Ghee Roast",
        desc: "Crispy golden dosa layered with rich ghee flavors, perfect for a traditional South Indian breakfast.",
        image: "images/1.png",
        time: "7:00 – 10:30 AM",
        spice: "Mild",
        recommend: "Chef's signature — pair with coconut chutney",
        price: "₹120",
      },
      {
        name: "Masala Dosa",
        desc: "Paper-thin crisp crepe embracing spiced potato masala — a timeless morning ritual.",
        image: "images/2.jpg",
        time: "7:00 – 11:00 AM",
        spice: "Medium",
        recommend: "Best with sambar and molagapodi",
        price: "₹95",
      },
      {
        name: "Idli",
        desc: "Cloud-soft steamed rice cakes, light as morning mist, served with fresh chutneys.",
        image: "images/3.png",
        time: "7:00 – 11:00 AM",
        spice: "Mild",
        recommend: "Classic comfort — three-piece plate",
        price: "₹60",
      },
      {
        name: "Poori Masala",
        desc: "Fluffy pooris with velvety potato masala — a celebration of texture and warmth.",
        image: "images/4.jpg",
        time: "8:00 – 10:30 AM",
        spice: "Medium",
        recommend: "Weekend family favorite",
        price: "₹85",
      },
      {
        name: "Appam & Curry",
        desc: "Lacy-edged appam cradling fragrant coconut stew — Kerala's morning poetry.",
        image: "images/5.jpg",
        time: "7:30 – 11:00 AM",
        spice: "Mild",
        recommend: "Island breakfast elegance",
        price: "₹130",
      },
    ],
  },
  snacks: {
    title: "Snacks",
    atmosphere: "Rainy Evening Café",
    subtitle: "Cozy corners, crispy comforts, and chai steam against the window.",
    mood: "evening",
    dishes: [
      {
        name: "Vada",
        desc: "Crispy outside, soft inside, best enjoyed with hot tea during rainy evenings.",
        image: "images/snacks.png",
        time: "All Evening",
        spice: "Medium",
        recommend: "Rainy day essential — with sambar dip",
        price: "₹45",
      },
      {
        name: "Pazhampori",
        desc: "Golden banana fritters, sweet nostalgia wrapped in crispy batter.",
        image: "images/p.jpg",
        time: "All Evening",
        spice: "Sweet",
        recommend: "Kerala's beloved tea-time treat",
        price: "₹50",
      },
      {
        name: "Samosa",
        desc: "Flaky pastry pockets of spiced potatoes — crunch that sparks conversation.",
        image: "images/s.jpg",
        time: "All Evening",
        spice: "Medium",
        recommend: "With mint chutney on the side",
        price: "₹35",
      },
      {
        name: "Cutlet",
        desc: "Herbed vegetable cutlets, pan-fried to golden perfection — evening elegance.",
        image: "images/c.jpg",
        time: "All Evening",
        spice: "Mild",
        recommend: "Pair with tomato sauce",
        price: "₹55",
      },
      {
        name: "Bhaji",
        desc: "Crispy savory snack served with a bold special chutney, full of spicy and comforting flavors.",
        image: "images/b.jpg",
        time: "All Evening",
        spice: "Sweet",
        recommend: "A nostalgic coastal classic",
        price: "₹48",
      },
    ],
  },
  lunch: {
    title: "Lunch",
    atmosphere: "Midday Indulgence",
    subtitle: "Hearty thalis and aromatic rice for the soul of afternoon.",
    mood: "morning",
    dishes: [
      {
        name: "Kerala Sadya Thali",
        desc: "A symphony of curries on banana leaf — festive abundance for the hungry heart.",
        image: "images/k.jpg",
        time: "12:00 – 3:00 PM",
        spice: "Varied",
        recommend: "Sunday special experience",
        price: "₹350",
      },
      {
        name: "Biriyani",
        desc: "Fragrant rice layered with rich spices, tender flavors, and slow-cooked comfort in every bite.",
        image: "images/bi.jpg",
        time: "12:00 – 3:00 PM",
        spice: "Hot",
        recommend: "Fresh catch of the day",
        price: "₹220",
      },
    ],
  },
  streetfood: {
    title: "Street Food",
    atmosphere: "Evening Streets",
    subtitle: "Bold spices and homestyle comfort from the heart of the street.",
    mood: "evening",
    dishes: [
      {
        name: "Porotta and Beef",
        desc: "Flaky layered flatbread paired with rich, slow-cooked beef bursting with deep spicy flavor.",
        image: "images/Street Food.jpg",
        time: "7:00 – 10:30 PM",
        spice: "Medium-Hot",
        recommend: "Our most requested street classic",
        price: "₹280",
      },
      {
        name: "Kappa & Beef",
        desc: "Soft tapioca paired with rich spicy beef, slow-cooked comfort with bold homestyle flavor.",
        image: "images/kb.jpg",
        time: "6:30 – 10:30 PM",
        spice: "Hot",
        recommend: "Late night legend",
        price: "₹240",
      },
      {
        name: "Kappa & Egg",
        desc: "Soft tapioca and perfectly cooked eggs, simple comfort with rich homestyle flavor.",
        image: "images/ke.jpg",
        time: "7:00 – 10:00 PM",
        spice: "Medium",
        recommend: "Homestyle favorite",
        price: "₹320",
      },
      {
        name: "Scrambled Egg with Green Beans",
        desc: "Soft scrambled eggs tossed with fresh green beans and light savory spices.",
        image: "images/gb.jpg",
        time: "7:00 – 10:00 PM",
        spice: "Medium",
        recommend: "Light and satisfying",
        price: "₹320",
      },
    ],
  },
  drinks: {
    title: "Drinks",
    atmosphere: "Refreshing Moments",
    subtitle: "Freshly brewed beverages and comforting classics served throughout the day.",
    mood: "morning",
    dishes: [
      {
        name: "Tea",
        desc: "Freshly brewed tea with rich aroma and a comforting taste, perfect for any time of the day.",
        image: "images/tea.jpg",
        time: "All Time",
        spice: "Mild",
        recommend: "Customer Favorite",
        price: "₹15",
      },
      {
        name: "Coffee",
        desc: "Traditional South Indian coffee prepared with freshly roasted beans and creamy milk.",
        image: "images/coffee.jpg",
        time: "All Time",
        spice: "Mild",
        recommend: "Signature Beverage",
        price: "₹20",
      },
      {
        name: "Black Tea",
        desc: "Strong and refreshing black tea with a bold flavor and smooth finish.",
        image: "images/blacktea.jpg",
        time: "All Time",
        spice: "Mild",
        recommend: "Perfect Evening Drink",
        price: "₹15",
      },
      {
        name: "Black Coffee",
        desc: "Rich black coffee brewed to perfection for coffee lovers who enjoy a bold taste.",
        image: "images/blackcoffee.jpg",
        time: "All Time",
        spice: "Mild",
        recommend: "Strong Energy Boost",
        price: "₹25",
      },
    ],
  },
};

/* ---- DOM refs ---- */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const showcasePanel = document.getElementById("showcasePanel");
const showcaseBackdrop = document.getElementById("showcaseBackdrop");
const showcaseClose = document.getElementById("showcaseClose");
const showcaseTitle = document.getElementById("showcaseTitle");
const showcaseSubtitle = document.getElementById("showcaseSubtitle");
const showcaseAtmosphere = document.getElementById("showcaseAtmosphere");
const dishTrack = document.getElementById("dishTrack");
const dishDots = document.getElementById("dishDots");
const dishPrev = document.getElementById("dishPrev");
const dishNext = document.getElementById("dishNext");
const storyModal = document.getElementById("storyModal");
const watchStoryBtn = document.getElementById("watchStoryBtn");
const storyClose = document.getElementById("storyClose");
const storyBackdrop = document.getElementById("storyBackdrop");
const bookingForm = document.getElementById("bookingForm");
const reviewDotsContainer = document.getElementById("reviewDots");

/* Modal Panel Element Selectors */
const bookingPanel = document.getElementById("bookingPanel");
const bookingClose = document.getElementById("bookingClose");
const bookingBackdrop = document.getElementById("bookingBackdrop");

/* Dedicated Review Panel Selectors */
const dedicatedReviewPanel = document.getElementById("dedicatedReviewPanel");
const openFooterReviewBtn = document.getElementById("openFooterReviewBtn");
const dedicatedReviewClose = document.getElementById("dedicatedReviewClose");
const dedicatedReviewBackdrop = document.getElementById("dedicatedReviewBackdrop");
const reviewForm = document.getElementById("reviewForm");

let reviewCards = document.querySelectorAll(".review-card");
let currentCategory = null;
let currentDishIndex = 0;
let touchStartX = 0;
let reviewIndex = 0;
let reviewInterval = null;

/* Global Order Data Tracker */
let currentOrder = [];

/* ---- Navbar scroll ---- */
function handleNavbarScroll() {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
}

/* ---- Mobile menu ---- */
function toggleMobileMenu() {
  if (!navLinks || !navbar || !navToggle) return;
  const open = navLinks.classList.toggle("open");
  navbar.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", open);
}

/* ---- Build dish slide HTML ---- */
function createDishSlide(dish) {
  return `
    <article class="dish-slide">
      <div class="dish-image-wrap">
        <img class="dish-image" src="${dish.image}" alt="${dish.name}" loading="lazy" />
      </div>
      <div class="dish-info">
        <h3 class="dish-name">${dish.name}</h3>
        <p class="dish-desc">${dish.desc}</p>
        <div class="dish-meta">
          <span>${dish.time}</span>
          <span>Spice: ${dish.spice}</span>
        </div>
        <p class="dish-recommend">${dish.recommend}</p>
        <p class="dish-price">${dish.price}</p>
        <button type="button" class="btn btn-glow dish-order">Add to Order</button>
      </div>
    </article>
  `;
}

/* ---- Open showcase panel ---- */
function openShowcase(categoryKey) {
  const data = MENU_DATA[categoryKey];
  if (!data || !showcasePanel || !dishTrack) return;

  currentCategory = categoryKey;
  currentDishIndex = 0;

  showcasePanel.classList.remove("morning", "evening");
  showcasePanel.classList.add(data.mood);
  if (showcaseTitle) showcaseTitle.textContent = data.title;
  if (showcaseSubtitle) showcaseSubtitle.textContent = data.subtitle;
  if (showcaseAtmosphere) showcaseAtmosphere.textContent = data.atmosphere;

  dishTrack.innerHTML = data.dishes.map(createDishSlide).join("");
  buildDishDots(data.dishes.length);
  updateDishCarousel();

  // Draw the live total bill badge seamlessly
  updateBillDisplay();

  showcasePanel.classList.add("open");
  showcasePanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeShowcase() {
  if (!showcasePanel) return;
  showcasePanel.classList.remove("open");
  showcasePanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentCategory = null;
}

/* ---- Booking Panel Overlay Controls ---- */
function openBookingPanel(e) {
  if (e) e.preventDefault();
  if (bookingPanel) {
    bookingPanel.classList.add("open");
    bookingPanel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeBookingPanel() {
  if (bookingPanel) {
    bookingPanel.classList.remove("open");
    bookingPanel.setAttribute("aria-hidden", "true");
    if ((!showcasePanel || !showcasePanel.classList.contains("open")) && 
        (!storyModal || !storyModal.classList.contains("open")) && 
        (!dedicatedReviewPanel || !dedicatedReviewPanel.classList.contains("open"))) {
      document.body.style.overflow = "";
    }
  }
}

/* ---- Dedicated Review Panel Overlay Controls ---- */
function openReviewPanel() {
  if (dedicatedReviewPanel) {
    dedicatedReviewPanel.classList.add("open");
    dedicatedReviewPanel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeReviewPanel() {
  if (dedicatedReviewPanel) {
    dedicatedReviewPanel.classList.remove("open");
    dedicatedReviewPanel.setAttribute("aria-hidden", "true");
    if ((!showcasePanel || !showcasePanel.classList.contains("open")) && 
        (!storyModal || !storyModal.classList.contains("open")) && 
        (!bookingPanel || !bookingPanel.classList.contains("open"))) {
      document.body.style.overflow = "";
    }
  }
}

function buildDishDots(count) {
  if (!dishDots) return;
  dishDots.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Go to dish ${i + 1}`);
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => goToDish(i));
    dishDots.appendChild(btn);
  }
}

function updateDishCarousel() {
  if (!dishTrack || !dishDots) return;
  dishTrack.style.transform = `translateX(-${currentDishIndex * 100}%)`;
  const dots = dishDots.querySelectorAll("button");
  if (dots.length > 0) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentDishIndex);
    });
  }
}

function goToDish(index) {
  const data = MENU_DATA[currentCategory];
  if (!data) return;
  currentDishIndex = Math.max(0, Math.min(index, data.dishes.length - 1));
  updateDishCarousel();
}

function nextDish() {
  const data = MENU_DATA[currentCategory];
  if (!data) return;
  currentDishIndex = (currentDishIndex + 1) % data.dishes.length;
  updateDishCarousel();
}

function prevDish() {
  const data = MENU_DATA[currentCategory];
  if (!data) return;
  currentDishIndex = (currentDishIndex - 1 + data.dishes.length) % data.dishes.length;
  updateDishCarousel();
}

/* ---- Touch swipe for dishes ---- */
function initDishSwipe() {
  const carousel = document.getElementById("dishCarousel");
  if (!carousel) return;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextDish();
        else prevDish();
      }
    },
    { passive: true }
  );
}

/* ---- Story modal ---- */
function openStory() {
  if (!storyModal) return;
  storyModal.classList.add("open");
  storyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeStory() {
  if (!storyModal) return;
  storyModal.classList.remove("open");
  storyModal.setAttribute("aria-hidden", "true");
  const video = storyModal.querySelector(".story-video");
  if (video) video.pause();
  if ((!showcasePanel || !showcasePanel.classList.contains("open")) && 
      (!bookingPanel || !bookingPanel.classList.contains("open")) && 
      (!dedicatedReviewPanel || !dedicatedReviewPanel.classList.contains("open"))) {
    document.body.style.overflow = "";
  }
}

/* ---- Live Running Bill Display ---- */
function updateBillDisplay() {
  let totalAmount = currentOrder.reduce((sum, item) => sum + item.price, 0);
  
  let billContainer = document.getElementById("liveBillCounter");
  if (!billContainer) {
    const headerElement = document.querySelector(".showcase-header");
    if (headerElement) {
      billContainer = document.createElement("div");
      billContainer.id = "liveBillCounter";
      billContainer.style.cssText = "margin-top: 1rem; padding: 0.6rem 1.2rem; background: rgba(212, 175, 55, 0.12); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block; font-size: 1rem;";
      headerElement.appendChild(billContainer);
    }
  }

  if (billContainer) {
    billContainer.innerHTML = `
      <span style="color: #fff; opacity: 0.9;">Items: <strong>${currentOrder.length}</strong></span>
      <span style="color: #d4af37; margin-left: 1.5rem; font-weight: bold;">Total Order Bill: ₹${totalAmount}</span>
    `;
  }
}

/* ---- Reviews slider ---- */
function initReviews() {
  if (!reviewDotsContainer) return;
  reviewDotsContainer.innerHTML = ""; 
  reviewCards = document.querySelectorAll(".review-card"); 
  
  reviewCards.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Review ${i + 1}`);
    if (i === reviewIndex) btn.classList.add("active");
    btn.addEventListener("click", () => setReview(i));
    reviewDotsContainer.appendChild(btn);
  });

  if (reviewInterval) clearInterval(reviewInterval);
  reviewInterval = setInterval(() => {
    if (reviewCards.length > 0) {
      setReview((reviewIndex + 1) % reviewCards.length);
    }
  }, 6000);
}

function setReview(index) {
  reviewIndex = index;
  reviewCards.forEach((card, i) => card.classList.toggle("active", i === index));
  if (reviewDotsContainer) {
    reviewDotsContainer.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
}

/* ---- Scroll reveal ---- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".section-header, .category-card, .utility-card, .booking-panel, .detail-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---- Add to order tracker ---- */
function initOrderButtons() {
  dishTrack?.addEventListener("click", (e) => {
    if (e.target.classList.contains("dish-order")) {
      const slide = e.target.closest(".dish-slide");
      if (!slide) return;

      const name = slide.querySelector(".dish-name")?.textContent || "Item";
      const priceText = slide.querySelector(".dish-price")?.textContent || "₹0";
      
      // Pull only the digits out of the text string (e.g. "₹120" becomes 120)
      const numericPrice = parseInt(priceText.replace(/[^\d]/g, ""), 10) || 0;

      // Add item into our active basket tracker array
      currentOrder.push({ name: name, price: numericPrice });

      e.target.textContent = "Added ✓";
      e.target.style.pointerEvents = "none";
      setTimeout(() => {
        e.target.textContent = "Add to Order";
        e.target.style.pointerEvents = "";
      }, 1500);

      // Instantly update display calculations inside view
      updateBillDisplay();
    }
  });
}

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;
  video.muted = true;
  const play = () => video.play().catch(() => {});
  play();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) play();
  });
}

/* ---- Master Initialization ---- */
function init() {
  initHeroVideo();
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  navToggle?.addEventListener("click", toggleMobileMenu);
  
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#book-table") {
        e.preventDefault();
        openBookingPanel();
      }
      navLinks.classList.remove("open");
      navbar?.classList.remove("menu-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll('a[href="#book-table"]').forEach(btn => {
    btn.addEventListener("click", openBookingPanel);
  });

  document.querySelectorAll(".category-card").forEach((card) => {
    const open = () => openShowcase(card.dataset.category);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  /* Panel triggers */
  showcaseClose?.addEventListener("click", closeShowcase);
  showcaseBackdrop?.addEventListener("click", closeShowcase);
  dishPrev?.addEventListener("click", prevDish);
  dishNext?.addEventListener("click", nextDish);

  bookingClose?.addEventListener("click", closeBookingPanel);
  bookingBackdrop?.addEventListener("click", closeBookingPanel);

  /* Dedicated Review Panel Triggers */
  openFooterReviewBtn?.addEventListener("click", openReviewPanel);
  dedicatedReviewClose?.addEventListener("click", closeReviewPanel);
  dedicatedReviewBackdrop?.addEventListener("click", closeReviewPanel);

  document.addEventListener("keydown", (e) => {
    if (showcasePanel && showcasePanel.classList.contains("open")) {
      if (e.key === "Escape") closeShowcase();
      if (e.key === "ArrowRight") nextDish();
      if (e.key === "ArrowLeft") prevDish();
    }
    if (bookingPanel && bookingPanel.classList.contains("open")) {
      if (e.key === "Escape") closeBookingPanel();
    }
    if (dedicatedReviewPanel && dedicatedReviewPanel.classList.contains("open")) {
      if (e.key === "Escape") closeReviewPanel();
    }
  });

  watchStoryBtn?.addEventListener("click", openStory);
  storyClose?.addEventListener("click", closeStory);
  storyBackdrop?.addEventListener("click", closeStory);

  /* Modal forms submit handlers */
  bookingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector("button[type=submit]");
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = "Booking Confirmed ✓";
    setTimeout(() => {
      btn.textContent = original;
      bookingForm.reset();
      closeBookingPanel();
    }, 2000);
  });

  /* Real-Time User Review Submission Handler */
  reviewForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const reviewsSlider = document.querySelector(".reviews-slider");
    if (!reviewsSlider) return;

    const author = document.getElementById("reviewAuthor").value;
    const location = document.getElementById("reviewLocation").value;
    const stars = document.getElementById("reviewStars").value;
    const text = document.getElementById("reviewText").value;

    const newBlockquote = document.createElement("blockquote");
    newBlockquote.className = "review-card active"; 
    newBlockquote.innerHTML = `
      <p>"${text}" <span style="display:block; font-size:1.1rem; margin-top:0.4rem; color:#d4af37; letter-spacing:2px;">${stars}</span></p>
      <footer>— ${author}, ${location}</footer>
    `;

    document.querySelectorAll(".review-card").forEach(card => card.classList.remove("active"));
    reviewsSlider.insertBefore(newBlockquote, reviewsSlider.firstChild);
    
    alert("Thank you! Your beautiful review has been posted directly to our home page.");
    
    reviewForm.reset();
    closeReviewPanel();
    
    reviewIndex = 0;
    initReviews();
  });

  initDishSwipe();
  initOrderButtons();
  initReviews();
  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
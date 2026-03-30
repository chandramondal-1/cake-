const phoneNumber = "+917797777773";
const whatsappBase = "https://wa.me/917797777773?text=";
const imageLibrary = {
  interior: "assets/hero-interior.jpg",
  signature: "assets/food-4k.jpg",
  curryBiryani: "assets/food-curry-biryani.jpg",
  friedChicken: "assets/food-fried-chicken.jpg",
  clayPot: "assets/food-claypot.jpg",
  clayPotTable: "assets/food-claypot-table.jpg"
};

const menuItems = [
  {
    name: "Nawaab's Signature Dum Biryani",
    category: "biryani",
    price: 399,
    type: "non-veg",
    spice: "Bold spice",
    badge: "Bestseller",
    popular: true,
    rating: 4.9,
    prepTime: 26,
    calories: 780,
    availability: "available",
    description: "Long-grain rice, layered masala, tender chicken, and a slow-finished aroma that defines the house.",
    image: imageLibrary.signature,
    position: "center 20%"
  },
  {
    name: "Paneer-e-Khaas Biryani",
    category: "biryani",
    price: 299,
    type: "veg",
    spice: "Balanced",
    badge: "Popular",
    popular: true,
    rating: 4.7,
    prepTime: 22,
    calories: 640,
    availability: "available",
    description: "Soft paneer, mint, saffron notes, and fragrant rice for a celebratory vegetarian centerpiece.",
    image: imageLibrary.clayPot,
    position: "center 44%"
  },
  {
    name: "Chicken Reshmi Kebab",
    category: "starters",
    price: 329,
    type: "non-veg",
    spice: "Mild char",
    badge: "Chef pick",
    popular: true,
    rating: 4.8,
    prepTime: 18,
    calories: 460,
    availability: "available",
    description: "Silky skewers with smoky edges and buttery marinade, served to open the appetite quickly.",
    image: imageLibrary.friedChicken,
    position: "center 50%"
  },
  {
    name: "Paneer Tikka Zafrani",
    category: "tandoor",
    price: 279,
    type: "veg",
    spice: "Smoky",
    badge: "House special",
    popular: true,
    rating: 4.6,
    prepTime: 20,
    calories: 410,
    availability: "available",
    description: "Charred paneer cubes with saffron yogurt, roasted capsicum, and a rich tandoor finish.",
    image: imageLibrary.curryBiryani,
    position: "center 38%"
  },
  {
    name: "Butter Chicken Handi",
    category: "mains",
    price: 349,
    type: "non-veg",
    spice: "Creamy",
    badge: "Most ordered",
    popular: true,
    rating: 4.8,
    prepTime: 24,
    calories: 590,
    availability: "available",
    description: "Velvety tomato gravy, soft chicken, and a comfort-food finish made for naan and roomali roti.",
    image: imageLibrary.curryBiryani,
    position: "center 52%"
  },
  {
    name: "Mutton Rogan Josh",
    category: "mains",
    price: 449,
    type: "non-veg",
    spice: "Deep flavor",
    badge: "Weekend favorite",
    popular: true,
    rating: 4.9,
    prepTime: 30,
    calories: 640,
    availability: "limited",
    description: "Slow-cooked mutton in a rich spiced gravy that lands with warmth rather than heat.",
    image: imageLibrary.clayPotTable,
    position: "center 46%"
  },
  {
    name: "Dal Nawaabi",
    category: "mains",
    price: 239,
    type: "veg",
    spice: "Comforting",
    badge: "Classic",
    popular: false,
    rating: 4.5,
    prepTime: 16,
    calories: 320,
    availability: "available",
    description: "Slow-simmered lentils with butter and gentle smoke, built to accompany kebabs, biryani, or breads.",
    image: imageLibrary.clayPot,
    position: "center 58%"
  },
  {
    name: "Tandoor Feast Platter",
    category: "tandoor",
    price: 699,
    type: "non-veg",
    spice: "Shared heat",
    badge: "Party platter",
    popular: true,
    rating: 4.8,
    prepTime: 28,
    calories: 920,
    availability: "limited",
    description: "A mixed grill presentation designed for tables that want variety, smoke, and fast group service.",
    image: imageLibrary.friedChicken,
    position: "center 48%"
  },
  {
    name: "Royal Firni",
    category: "desserts",
    price: 149,
    type: "veg",
    spice: "Sweet finish",
    badge: "Dessert pick",
    popular: false,
    rating: 4.4,
    prepTime: 8,
    calories: 260,
    availability: "available",
    description: "Silky milk pudding with cardamom and nuts for a calm, elegant close to a rich meal.",
    image: imageLibrary.clayPotTable,
    position: "center 62%"
  },
  {
    name: "Gulab Jamun Duo",
    category: "desserts",
    price: 119,
    type: "veg",
    spice: "Warm syrup",
    badge: "Comfort sweet",
    popular: true,
    rating: 4.6,
    prepTime: 7,
    calories: 290,
    availability: "available",
    description: "Soft jamuns served warm with syrupy richness that pairs beautifully after biryani or kebabs.",
    image: imageLibrary.signature,
    position: "center 72%"
  },
  {
    name: "Kesari Lassi",
    category: "drinks",
    price: 139,
    type: "veg",
    spice: "Cool and creamy",
    badge: "Refresh",
    popular: false,
    rating: 4.3,
    prepTime: 5,
    calories: 180,
    availability: "available",
    description: "A chilled saffron-lassi style cooler that rounds off the spice and adds a celebratory touch.",
    image: imageLibrary.clayPot,
    position: "center 24%"
  },
  {
    name: "Mint Mojito Cooler",
    category: "drinks",
    price: 129,
    type: "veg",
    spice: "Fresh finish",
    badge: "Crowd pleaser",
    popular: true,
    rating: 4.5,
    prepTime: 5,
    calories: 140,
    availability: "available",
    description: "Bright mint, citrus notes, and a clean finish that keeps the table refreshed between courses.",
    image: imageLibrary.curryBiryani,
    position: "center 28%"
  }
].map((item, index) => ({
  ...item,
  spicy: ["Bold spice", "Smoky", "Deep flavor", "Shared heat"].includes(item.spice),
  id: `dish-${index + 1}`,
  order: index
}));

const testimonials = [
  {
    quote: "The site makes the place feel premium before anyone arrives, which is exactly what a strong restaurant homepage should do.",
    author: "Family dining focus",
    note: "Warm interior, premium tone, late-night comfort."
  },
  {
    quote: "Reservation, catering, and quick WhatsApp actions make the website feel useful instead of only decorative.",
    author: "Business-ready experience",
    note: "Built to support bookings, enquiries, and party planning."
  },
  {
    quote: "The menu filters and gallery interactions add enough motion to feel modern while keeping the restaurant itself at the center.",
    author: "Modern but approachable",
    note: "Premium styling with practical customer actions."
  }
];

const menuGrid = document.getElementById("menuGrid");
const menuCartButton = document.getElementById("menuCartButton");
const galleryGrid = document.getElementById("galleryGrid");
const menuSearch = document.getElementById("menuSearch");
const menuSort = document.getElementById("menuSort");
const vegOnlyToggle = document.getElementById("vegOnlyToggle");
const spicyOnlyToggle = document.getElementById("spicyOnlyToggle");
const popularOnlyToggle = document.getElementById("popularOnlyToggle");
const menuResultCount = document.getElementById("menuResultCount");
const menuFilterSummary = document.getElementById("menuFilterSummary");
const menuTabs = Array.from(document.querySelectorAll(".menu-tab"));
const testimonialTrack = document.getElementById("testimonialTrack");
const testimonialDots = document.getElementById("testimonialDots");
const reservationForm = document.getElementById("reservationForm");
const reservationMessage = document.getElementById("reservationMessage");
const cateringQuoteForm = document.getElementById("cateringQuoteForm");
const cateringQuoteMessage = document.getElementById("cateringQuoteMessage");
const contactForm = document.getElementById("contactForm");
const contactMessageStatus = document.getElementById("contactMessageStatus");
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutMessage = document.getElementById("checkoutMessage");
const clearCartButton = document.getElementById("clearCartButton");
const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const drawerClose = document.getElementById("drawerClose");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartSummary = document.getElementById("cartSummary");
const cartTotal = document.getElementById("cartTotal");
const cartKitchenStatus = document.getElementById("cartKitchenStatus");
const cartItemSummary = document.getElementById("cartItemSummary");
const cartToggleButton = document.getElementById("cartToggle");
const cartCountBadge = document.getElementById("cartCountBadge");
const miniCartBubble = document.getElementById("miniCartBubble");
const miniCartSummary = document.getElementById("miniCartSummary");
const siteHeader = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");
const scrollTopButton = document.getElementById("scrollTop");
const announcementBar = document.getElementById("announcementBar");
const liveStatus = document.getElementById("liveStatus");
const statusPill = document.getElementById("statusPill");
const hoursIndicator = document.getElementById("hoursIndicator");
const offerCountdown = document.getElementById("offerCountdown");
const eventCountdown = document.getElementById("eventCountdown");
const heroParticles = document.getElementById("heroParticles");
const heroSpiceCloud = document.getElementById("heroSpiceCloud");
const lightbox = document.getElementById("lightbox");
const lightboxBody = document.getElementById("lightboxBody");
const lightboxClose = document.getElementById("lightboxClose");
const confirmationModal = document.getElementById("confirmationModal");
const confirmationTitle = document.getElementById("confirmationTitle");
const confirmationBody = document.getElementById("confirmationBody");
const confirmationClose = document.getElementById("confirmationClose");
const confirmationAction = document.getElementById("confirmationAction");
const guestTimeSelect = document.getElementById("guestTime");
const quoteTimeSelect = document.getElementById("quoteTime");
const parallaxNodes = Array.from(document.querySelectorAll("[data-parallax]"));
const insightValues = Array.from(document.querySelectorAll(".insight-value"));
const signatureLab = document.getElementById("signatureLab3d");
const motionButtons = Array.from(document.querySelectorAll(".motion-button"));
const depthToggle = document.getElementById("depthToggle");

let activeCategory = "all";
let activeSort = "recommended";
let testimonialIndex = 0;
let testimonialTimer = null;
let cart = [];
let activeFocusTrap = null;
let scrollFrame = 0;
let ambientResizeTimer = 0;

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(", ");
const formDraftPrefix = "nawaabs-form-draft";
const scrollDepthMilestones = [25, 50, 75, 100];
const seenScrollDepths = new Set();

const leadCaptureEndpoint = "lead-capture.php";

const categoryLabels = {
  all: "all categories",
  starters: "starters",
  biryani: "biryani",
  tandoor: "tandoor",
  mains: "main course",
  desserts: "desserts",
  drinks: "drinks"
};

const sortLabels = {
  recommended: "recommended order",
  "price-low": "low to high price",
  "price-high": "high to low price",
  fastest: "fastest prep time",
  rating: "top rated first"
};

function runWhenIdle(callback, timeout = 240) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => callback(), { timeout });
    return;
  }

  window.setTimeout(callback, Math.min(timeout, 180));
}

function syncBodyOverflow() {
  const shouldLock = mobileDrawer.classList.contains("is-open")
    || cartDrawer.classList.contains("is-open")
    || !confirmationModal.hidden
    || !lightbox.hidden;
  document.body.style.overflow = shouldLock ? "hidden" : "";
}

function trackEvent(name, detail = {}) {
  const payload = { event: name, ...detail, timestamp: new Date().toISOString() };

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push(payload);

  document.dispatchEvent(new CustomEvent("nawaabs:track", { detail: payload }));
}

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(focusableSelector)).filter((element) => {
    const isHidden = element.hasAttribute("hidden") || element.getAttribute("aria-hidden") === "true";
    return !isHidden;
  });
}

function activateFocusTrap(container, initialTarget) {
  if (!container) {
    return;
  }

  if (activeFocusTrap) {
    deactivateFocusTrap();
  }

  const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  const onKeydown = (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = getFocusableElements(container);
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener("keydown", onKeydown);
  activeFocusTrap = { container, onKeydown, previousFocus };

  const target = typeof initialTarget === "string"
    ? container.querySelector(initialTarget)
    : initialTarget;
  const firstFocusable = target || getFocusableElements(container)[0];

  if (firstFocusable instanceof HTMLElement) {
    window.requestAnimationFrame(() => firstFocusable.focus());
  }
}

function deactivateFocusTrap(container) {
  if (!activeFocusTrap) {
    return;
  }

  if (container && activeFocusTrap.container !== container) {
    return;
  }

  document.removeEventListener("keydown", activeFocusTrap.onKeydown);
  const { previousFocus } = activeFocusTrap;
  activeFocusTrap = null;

  if (previousFocus && typeof previousFocus.focus === "function") {
    window.requestAnimationFrame(() => previousFocus.focus());
  }
}

function showConfirmationModal(title, message) {
  confirmationTitle.textContent = title;
  confirmationBody.textContent = message;
  confirmationModal.hidden = false;
  syncBodyOverflow();
  activateFocusTrap(confirmationModal, "#confirmationAction");
}

function closeConfirmationModal() {
  confirmationModal.hidden = true;
  syncBodyOverflow();
  deactivateFocusTrap(confirmationModal);
}

function renderMenuSkeletons(count = 6) {
  menuGrid.classList.add("is-loading");
  menuGrid.setAttribute("aria-busy", "true");
  menuGrid.innerHTML = Array.from({ length: count }, () => `
    <article class="skeleton-card" aria-hidden="true">
      <div class="skeleton-media"></div>
      <div class="skeleton-body">
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-pills">
          <span class="skeleton-pill"></span>
          <span class="skeleton-pill"></span>
          <span class="skeleton-pill"></span>
        </div>
      </div>
    </article>
  `).join("");
}

function getMediaFrame(image) {
  return image.closest(".hero, .feature-media, .photo-card, .special-media, .menu-card-media, .gallery-item, .story-photo, .lab-dish-card, .stage-card, .map-panel");
}

function setupMediaLoadingStates() {
  document.querySelectorAll("img").forEach((image) => {
    const frame = getMediaFrame(image);
    if (!frame) {
      return;
    }

    const markReady = () => {
      frame.dataset.mediaState = "ready";
      image.classList.remove("is-broken");
    };

    const markError = () => {
      frame.dataset.mediaState = "error";
      image.classList.add("is-broken");
    };

    frame.dataset.mediaState = "loading";

    if (image.complete && image.naturalWidth > 0) {
      markReady();
      return;
    }

    if (image.complete && image.naturalWidth === 0) {
      markError();
      return;
    }

    image.addEventListener("load", markReady, { once: true });
    image.addEventListener("error", markError, { once: true });
  });
}

function ensureFieldErrorNode(control) {
  const field = control.closest(".field");
  if (!field || !control.id) {
    return null;
  }

  let errorNode = field.querySelector(".field-error");
  if (!errorNode) {
    errorNode = document.createElement("p");
    errorNode.className = "field-error";
    errorNode.id = `${control.id}-error`;
    field.appendChild(errorNode);
  }

  control.setAttribute("aria-describedby", errorNode.id);
  return errorNode;
}

function saveFormDraft(form) {
  try {
    const data = Object.fromEntries(new FormData(form).entries());
    window.localStorage.setItem(`${formDraftPrefix}:${form.id}`, JSON.stringify(data));
  } catch (error) {
    // Ignore storage failures.
  }
}

function loadFormDraft(form) {
  try {
    const saved = window.localStorage.getItem(`${formDraftPrefix}:${form.id}`);
    if (!saved) {
      return;
    }

    const data = JSON.parse(saved);
    Object.entries(data).forEach(([name, value]) => {
      const control = form.elements.namedItem(name);
      if (!control || typeof value !== "string") {
        return;
      }

      if (control instanceof RadioNodeList) {
        return;
      }

      control.value = value;
    });
  } catch (error) {
    // Ignore storage failures or malformed payloads.
  }
}

function clearFormDraft(form) {
  try {
    window.localStorage.removeItem(`${formDraftPrefix}:${form.id}`);
  } catch (error) {
    // Ignore storage failures.
  }
}

function resetEnhancedForm(form) {
  form.dataset.submitted = "false";
  form.querySelectorAll("input, select, textarea").forEach((control) => {
    delete control.dataset.touched;
    updateFieldState(control);
  });
}

function getInlineValidationMessage(control) {
  const value = control.value.trim();
  const name = control.name;

  switch (name) {
    case "guestName":
    case "contactName":
    case "quoteName":
    case "checkoutName":
      return value.length >= 2 ? "" : "Please enter your name.";
    case "guestPhone":
    case "contactPhone":
    case "quotePhone":
    case "checkoutPhone":
      return /^[0-9+\-\s()]{7,}$/.test(value) ? "" : "Enter a valid phone number.";
    case "guestDate":
    case "quoteDate":
      return value && value >= todayStringForIndia() ? "" : "Choose today or a future date.";
    case "guestTime":
    case "quoteTime":
      return value ? "" : "Choose an available time slot.";
    case "guestCount":
      return value ? "" : "Select the number of guests.";
    case "quoteEventType":
      return value ? "" : "Choose the event type.";
    case "quoteGuests":
      return Number(value) >= 10 ? "" : "Enter at least 10 guests for catering.";
    case "newsletterContact":
      return isPhoneOrEmail(value) ? "" : "Enter a valid phone number or email.";
    case "contactMessage":
      return value.length >= 8 ? "" : "Please add a short message.";
    case "checkoutAddress":
      return checkoutForm?.elements?.namedItem("checkoutType")?.value === "Delivery" && !value
        ? "Delivery address is required for delivery orders."
        : "";
    default:
      return control.required && !value ? "This field is required." : "";
  }
}

function updateFieldState(control) {
  const field = control.closest(".field");
  const errorNode = ensureFieldErrorNode(control);
  if (!field || !errorNode) {
    return "";
  }

  const value = control.value.trim();
  const touched = control.dataset.touched === "true" || control.form?.dataset.submitted === "true";
  if (!touched && !value) {
    errorNode.textContent = "";
    control.setAttribute("aria-invalid", "false");
    field.dataset.valid = "false";
    return "";
  }

  const message = getInlineValidationMessage(control);
  errorNode.textContent = message;
  control.setAttribute("aria-invalid", message ? "true" : "false");
  field.dataset.valid = value && !message ? "true" : "false";
  return message;
}

function validateFormControls(form) {
  form.dataset.submitted = "true";
  const controls = Array.from(form.querySelectorAll("input, select, textarea"));
  let firstInvalid = null;

  controls.forEach((control) => {
    const message = updateFieldState(control);
    if (message && !firstInvalid) {
      firstInvalid = control;
    }
  });

  return firstInvalid;
}

function attachFormEnhancements(form) {
  loadFormDraft(form);

  form.querySelectorAll("input, select, textarea").forEach((control) => {
    ensureFieldErrorNode(control);
    control.addEventListener("input", () => {
      control.dataset.touched = "true";
      updateFieldState(control);
      saveFormDraft(form);
    });
    control.addEventListener("change", () => {
      control.dataset.touched = "true";
      updateFieldState(control);
      saveFormDraft(form);
    });
    control.addEventListener("blur", () => {
      control.dataset.touched = "true";
      updateFieldState(control);
    });
    updateFieldState(control);
  });
}

function decorateRequiredFields() {
  document.querySelectorAll(".field [required]").forEach((control) => {
    const label = control.closest(".field")?.querySelector("label");
    if (!label || label.querySelector(".field-required")) {
      return;
    }

    const marker = document.createElement("span");
    marker.className = "field-required";
    marker.setAttribute("aria-hidden", "true");
    marker.textContent = "*";
    label.appendChild(marker);
  });
}

function populateTimeSlots(select, placeholder = "Select time") {
  const startMinutes = 13 * 60;
  const endMinutes = 23 * 60 + 30;
  const parts = [`<option value="">${placeholder}</option>`];

  for (let minutes = startMinutes; minutes <= endMinutes; minutes += 30) {
    const hour24 = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const meridiem = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 || 12;
    const label = `${hour12}:${String(minute).padStart(2, "0")} ${meridiem}`;
    const value = `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    parts.push(`<option value="${value}">${label}</option>`);
  }

  select.innerHTML = parts.join("");
}

function syncCheckoutAddressField() {
  const checkoutType = checkoutForm.elements.namedItem("checkoutType");
  const checkoutAddress = checkoutForm.elements.namedItem("checkoutAddress");
  const addressField = checkoutAddress?.closest(".field");
  const isDelivery = checkoutType?.value === "Delivery";

  if (!(checkoutAddress instanceof HTMLTextAreaElement) || !addressField) {
    return;
  }

  checkoutAddress.required = isDelivery;
  checkoutAddress.placeholder = isDelivery
    ? "Required for delivery orders"
    : "Not required for takeaway or dine-in preorder";
  addressField.classList.toggle("is-disabled", !isDelivery);

  if (!isDelivery) {
    checkoutAddress.setCustomValidity("");
  }

  updateFieldState(checkoutAddress);
}

function loadCart() {
  try {
    const savedCart = window.localStorage.getItem("nawaabs-cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  try {
    window.localStorage.setItem("nawaabs-cart", JSON.stringify(cart));
  } catch (error) {
    // Ignore storage failures in restricted browser modes.
  }
}

function getCartDetailedItems() {
  return cart.map((entry) => {
    const item = menuItems.find((menuItem) => menuItem.id === entry.id);
    return item ? { ...item, quantity: entry.quantity } : null;
  }).filter(Boolean);
}

function getCartTotal() {
  return getCartDetailedItems().reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartQuantity() {
  return cart.reduce((total, entry) => total + entry.quantity, 0);
}

function getKitchenEstimate() {
  const items = getCartDetailedItems();
  if (!items.length) {
    return 0;
  }

  const highestPrepTime = Math.max(...items.map((item) => item.prepTime));
  const quantityLoad = items.reduce((total, item) => total + item.quantity, 0);
  return highestPrepTime + Math.max(quantityLoad - 1, 0) * 3;
}

function updateCartBadge() {
  const totalItems = getCartQuantity();
  const totalPrice = getCartTotal();
  cartCountBadge.textContent = String(totalItems);
  cartToggleButton.classList.toggle("has-items", totalItems > 0);
  miniCartSummary.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"} · Rs. ${totalPrice}`;
  miniCartBubble.hidden = totalItems === 0;
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartBackdrop.classList.add("is-open");
  syncBodyOverflow();
  activateFocusTrap(cartDrawer, "#cartClose");
  trackEvent("cart_open", { items: getCartQuantity() });
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartBackdrop.classList.remove("is-open");
  syncBodyOverflow();
  deactivateFocusTrap(cartDrawer);
}

function renderCart() {
  const items = getCartDetailedItems();
  const totalItems = getCartQuantity();
  const totalPrice = getCartTotal();
  const estimate = getKitchenEstimate();

  updateCartBadge();

  if (!items.length) {
    cartEmpty.hidden = false;
    cartItems.innerHTML = "";
    cartSummary.hidden = true;
    return;
  }

  cartEmpty.hidden = true;
  cartSummary.hidden = false;
  cartItems.innerHTML = items.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" style="object-position: ${item.position};">
      <div class="cart-item-copy">
        <strong>${item.name}</strong>
        <span>Rs. ${item.price} each</span>
        <div class="cart-item-controls">
          <div class="qty-control" role="group" aria-label="Quantity controls for ${item.name}">
            <button type="button" data-cart-action="decrease" data-cart-id="${item.id}" aria-label="Reduce quantity">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-action="increase" data-cart-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-remove" type="button" data-cart-action="remove" data-cart-id="${item.id}">Remove</button>
        </div>
      </div>
      <strong class="cart-line-total">Rs. ${item.price * item.quantity}</strong>
    </article>
  `).join("");

  cartTotal.textContent = `Rs. ${totalPrice}`;
  cartKitchenStatus.textContent = `Kitchen estimate: ${estimate} min`;
  cartItemSummary.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"}`;

  cartItems.querySelectorAll("[data-cart-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { cartAction, cartId } = button.dataset;
      if (cartAction === "increase") {
        updateCartItem(cartId, 1);
      } else if (cartAction === "decrease") {
        updateCartItem(cartId, -1);
      } else if (cartAction === "remove") {
        removeFromCart(cartId);
      }
    });
  });
}

function addToCart(id) {
  const existing = cart.find((entry) => entry.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function updateCartItem(id, change) {
  const entry = cart.find((item) => item.id === id);
  if (!entry) {
    return;
  }

  entry.quantity += change;
  cart = cart.filter((item) => item.quantity > 0);
  saveCart();
  renderCart();
  trackEvent("cart_update", { itemId: id, quantity: entry ? entry.quantity : 0 });
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
  trackEvent("cart_remove", { itemId: id });
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  trackEvent("cart_clear");
}

function buildCartWhatsAppMessage(formData) {
  const orderType = formData.get("checkoutType");
  const payment = formData.get("checkoutPayment");
  const name = formData.get("checkoutName").trim();
  const phone = formData.get("checkoutPhone").trim();
  const address = formData.get("checkoutAddress").trim();
  const notes = formData.get("checkoutNotes").trim();
  const items = getCartDetailedItems();

  const lines = [
    "Hello, I want to place an order with Nawaab's Restaurant & Caterers.",
    "",
    `Order type: ${orderType}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Payment: ${payment}`
  ];

  if (address) {
    lines.push(`Address: ${address}`);
  }

  lines.push("", "Items:");
  items.forEach((item) => {
    lines.push(`- ${item.name} x${item.quantity} = Rs. ${item.price * item.quantity}`);
  });

  lines.push("", `Estimated kitchen time: ${getKitchenEstimate()} min`);
  lines.push(`Total: Rs. ${getCartTotal()}`);

  if (notes) {
    lines.push(`Notes: ${notes}`);
  }

  return encodeURIComponent(lines.join("\n"));
}

function validateCheckout(formData) {
  const name = formData.get("checkoutName").trim();
  const phone = formData.get("checkoutPhone").trim();
  const orderType = formData.get("checkoutType");
  const address = formData.get("checkoutAddress").trim();

  if (!cart.length) {
    return "Add at least one dish before checking out.";
  }

  if (!name || !phone) {
    return "Please enter your name and phone number for the order.";
  }

  if (!/^[0-9+\-\s()]{7,}$/.test(phone)) {
    return "Please enter a valid phone number for the order.";
  }

  if (orderType === "Delivery" && !address) {
    return "Please enter a delivery address for delivery orders.";
  }

  return "";
}

function buildOrderSubmissionPayload(formData) {
  const items = getCartDetailedItems();
  return {
    ...Object.fromEntries(formData.entries()),
    orderItems: items.map((item) => `${item.name} x${item.quantity}`).join(" | "),
    orderTotal: String(getCartTotal()),
    kitchenEstimate: String(getKitchenEstimate())
  };
}

async function submitLeadForm(formType, payload) {
  if (!window.location.protocol.startsWith("http")) {
    return false;
  }

  try {
    const response = await fetch(leadCaptureEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ formType, ...payload })
    });

    return response.ok;
  } catch (error) {
    return false;
  }
}

function sortMenuItems(items) {
  const sorted = [...items];

  switch (activeSort) {
    case "price-low":
      sorted.sort((left, right) => left.price - right.price);
      break;
    case "price-high":
      sorted.sort((left, right) => right.price - left.price);
      break;
    case "fastest":
      sorted.sort((left, right) => left.prepTime - right.prepTime || left.order - right.order);
      break;
    case "rating":
      sorted.sort((left, right) => right.rating - left.rating || left.order - right.order);
      break;
    default:
      sorted.sort((left, right) => left.order - right.order);
      break;
  }

  return sorted;
}

function updateMenuStatus(count, query, vegOnly, spicyOnly, popularOnly) {
  const dishLabel = count === 1 ? "dish" : "dishes";
  const filters = [`${categoryLabels[activeCategory] || "all categories"}`];

  if (vegOnly) {
    filters.push("veg only");
  }

  if (spicyOnly) {
    filters.push("spicy picks");
  }

  if (popularOnly) {
    filters.push("bestsellers");
  }

  if (query) {
    filters.push(`matching "${query}"`);
  }

  menuResultCount.textContent = `${count} ${dishLabel} available`;
  menuFilterSummary.textContent = `Showing ${filters.join(" . ")} in ${sortLabels[activeSort] || "recommended order"}.`;
}

function renderMenu() {
  const query = menuSearch.value.trim().toLowerCase();
  const vegOnly = vegOnlyToggle.checked;
  const spicyOnly = spicyOnlyToggle.checked;
  const popularOnly = popularOnlyToggle.checked;
  const filtered = sortMenuItems(menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesVeg = !vegOnly || item.type === "veg";
    const matchesSpicy = !spicyOnly || item.spicy;
    const matchesPopular = !popularOnly || item.popular;
    const haystack = [item.name, item.description, item.badge, item.category, item.type].join(" ").toLowerCase();
    return matchesCategory && matchesVeg && matchesSpicy && matchesPopular && haystack.includes(query);
  }));

  updateMenuStatus(filtered.length, query, vegOnly, spicyOnly, popularOnly);
  menuGrid.classList.remove("is-loading");
  menuGrid.setAttribute("aria-busy", "false");

  if (!filtered.length) {
    menuGrid.innerHTML = '<div class="empty-state">No dishes match that search yet. Try another keyword or switch categories.</div>';
    trackEvent("menu_filter", {
      category: activeCategory,
      sort: activeSort,
      query,
      vegOnly,
      spicyOnly,
      popularOnly,
      results: 0
    });
    return;
  }

  menuGrid.innerHTML = filtered.map((item) => {
    const message = encodeURIComponent(`Hello, I want to ask about ordering ${item.name} from Nawaab's Restaurant & Caterers.`);
    return `
      <article class="menu-card">
        <div class="menu-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" style="object-position: ${item.position};">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <div class="menu-card-title">${item.name}</div>
            <div class="menu-card-price">Rs. ${item.price}</div>
          </div>
          <p>${item.description}</p>
          <div class="menu-card-tags">
            <span class="dish-pill">${item.prepTime} min</span>
            <span class="dish-pill">${item.calories} kcal</span>
            <span class="dish-pill">★ ${item.rating.toFixed(1)}</span>
          </div>
          <div class="menu-card-meta">
            <span class="dish-type ${item.type === "veg" ? "veg" : "non-veg"}">${item.type === "veg" ? "Veg" : "Non-veg"}</span>
            <span class="dish-spice">${item.spice}</span>
            <span class="dish-availability ${item.availability}">${item.availability === "limited" ? "Limited today" : "Available today"}</span>
          </div>
          <div class="menu-card-bottom">
            <span class="dish-badge">${item.badge}</span>
            <div class="menu-card-actions">
              <button class="button button-primary" type="button" data-add-to-cart="${item.id}">Add to Cart</button>
              <a class="button button-secondary" href="${whatsappBase}${message}" target="_blank" rel="noopener noreferrer">Ask</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  menuGrid.querySelectorAll("[data-add-to-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.addToCart);
      openCart();
      setFormMessage(checkoutMessage, "Dish added to cart. Review your order and send it on WhatsApp when ready.", "success");
      trackEvent("cart_add", { itemId: button.dataset.addToCart, quantity: getCartQuantity() });
    });
  });

  setupMediaLoadingStates();
  setupTiltCards();
  trackEvent("menu_filter", {
    category: activeCategory,
    sort: activeSort,
    query,
    vegOnly,
    spicyOnly,
    popularOnly,
    results: filtered.length
  });
}

function setActiveCategory(category) {
  activeCategory = category;
  menuTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === category);
    tab.setAttribute("aria-selected", tab.dataset.category === category ? "true" : "false");
  });
  renderMenu();
}

function renderTestimonials() {
  testimonialTrack.innerHTML = testimonials.map((item) => `
    <article class="testimonial">
      <blockquote>${item.quote}</blockquote>
      <p>${item.note}</p>
      <strong>${item.author}</strong>
    </article>
  `).join("");

  testimonialDots.innerHTML = testimonials.map((_, index) => `
    <button type="button" aria-label="Show testimonial ${index + 1}" data-index="${index}"></button>
  `).join("");

  testimonialDots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      testimonialIndex = Number(button.dataset.index);
      updateTestimonials();
      restartTestimonialTimer();
    });
  });

  updateTestimonials();
}

function updateTestimonials() {
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  testimonialDots.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active", index === testimonialIndex);
    button.setAttribute("aria-pressed", index === testimonialIndex ? "true" : "false");
  });
}

function restartTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateTestimonials();
  }, 5000);
}

function getIndiaNowParts() {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(new Date()).reduce((acc, part) => {
    if (part.type !== "literal") {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute)
  };
}

function getIndiaNowDate() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

function formatDuration(totalMinutes) {
  const safeMinutes = Math.max(totalMinutes, 0);
  const hours = Math.floor(safeMinutes / 60);
  const minutes = safeMinutes % 60;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function getServiceSnapshot() {
  const indiaNow = getIndiaNowParts();
  const currentMinutes = indiaNow.hour * 60 + indiaNow.minute;
  const openMinutes = 13 * 60;
  const closeMinutes = 23 * 60 + 59;
  const isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  const minutesUntilChange = isOpen
    ? closeMinutes - currentMinutes
    : currentMinutes < openMinutes
      ? openMinutes - currentMinutes
      : (24 * 60 - currentMinutes) + openMinutes;

  return {
    isOpen,
    minutesUntilChange,
    closesLabel: "11:59 PM",
    opensLabel: "1:00 PM"
  };
}

function updateLiveStatus() {
  const snapshot = getServiceSnapshot();

  liveStatus.textContent = snapshot.isOpen
    ? `Open until ${snapshot.closesLabel} (${formatDuration(snapshot.minutesUntilChange)} left)`
    : `Closed now . Opens at ${snapshot.opensLabel} (${formatDuration(snapshot.minutesUntilChange)} left)`;

  hoursIndicator.textContent = snapshot.isOpen
    ? `Open until ${snapshot.closesLabel}`
    : `Closed until ${snapshot.opensLabel}`;

  statusPill.dataset.open = snapshot.isOpen ? "true" : "false";
}

function updateOfferCountdown() {
  const snapshot = getServiceSnapshot();
  const label = snapshot.isOpen ? "Open until" : "Next service begins in";
  offerCountdown.textContent = snapshot.isOpen
    ? `${label} ${snapshot.closesLabel} (${formatDuration(snapshot.minutesUntilChange)} left)`
    : `${label} ${formatDuration(snapshot.minutesUntilChange)}`;
}

function updateEventCountdown() {
  const indiaNow = getIndiaNowDate();
  const target = new Date(indiaNow);
  const daysUntilSunday = (7 - indiaNow.getDay()) % 7;
  const shouldUseToday = daysUntilSunday === 0 && indiaNow.getHours() < 21;
  target.setDate(indiaNow.getDate() + (shouldUseToday ? 0 : (daysUntilSunday === 0 ? 7 : daysUntilSunday)));
  target.setHours(21, 0, 0, 0);

  const diff = Math.max(target.getTime() - indiaNow.getTime(), 0);
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  eventCountdown.textContent = `Offer refreshes in ${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

function todayStringForIndia() {
  const indiaNow = getIndiaNowParts();
  const month = String(indiaNow.month).padStart(2, "0");
  const day = String(indiaNow.day).padStart(2, "0");
  return `${indiaNow.year}-${month}-${day}`;
}

function validateReservation(formData) {
  const name = formData.get("guestName").trim();
  const phone = formData.get("guestPhone").trim();
  const date = formData.get("guestDate");
  const time = formData.get("guestTime");
  const guests = formData.get("guestCount");

  if (!name || !phone || !date || !time || !guests) {
    return "Please fill in the required reservation details.";
  }

  if (!/^[0-9+\-\s()]{7,}$/.test(phone)) {
    return "Please enter a valid phone number so the team can confirm your request.";
  }

  if (date < todayStringForIndia()) {
    return "Please choose today or a future date for your reservation.";
  }

  return "";
}

function setFormMessage(element, message, kind) {
  element.textContent = message;
  element.classList.remove("success", "error");
  if (kind) {
    element.classList.add(kind);
  }
}

function getMotionMode() {
  return document.body.dataset.motion || "full";
}

function isCompactViewport() {
  return window.innerWidth <= 920;
}

function getAmbientEffectCount(kind) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionMode = getMotionMode();

  if (reducedMotion || motionMode === "still" || isCompactViewport()) {
    return 0;
  }

  if (motionMode === "soft") {
    return kind === "hero" ? 10 : 8;
  }

  return kind === "hero" ? 22 : 18;
}

function refreshAmbientEffects() {
  createHeroParticles();
  createSpiceCloud();
}

function applyMotionMode(mode) {
  const nextMode = ["full", "soft", "still"].includes(mode) ? mode : "full";
  document.body.dataset.motion = nextMode;

  motionButtons.forEach((button) => {
    const isActive = button.dataset.motionMode === nextMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (nextMode === "still") {
    document.querySelectorAll("[data-tilt-ready='true']").forEach((node) => {
      node.style.transform = "";
    });
  }

  try {
    window.localStorage.setItem("nawaabs-motion-mode", nextMode);
  } catch (error) {
    // Ignore storage failures in restrictive browser modes.
  }

  refreshAmbientEffects();
  scheduleScrollUI();
}

function applyDepthMode(isEnabled) {
  document.body.dataset.depth = isEnabled ? "on" : "off";
  depthToggle.checked = isEnabled;

  if (!isEnabled) {
    document.querySelectorAll("[data-tilt-ready='true']").forEach((node) => {
      node.style.transform = "";
    });
  }

  try {
    window.localStorage.setItem("nawaabs-depth-mode", isEnabled ? "on" : "off");
  } catch (error) {
    // Ignore storage failures in restrictive browser modes.
  }

  scheduleScrollUI();
}

function loadExperiencePreferences() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let savedMotion = "full";
  let savedDepth = "on";

  try {
    savedMotion = window.localStorage.getItem("nawaabs-motion-mode") || (reducedMotion ? "still" : "full");
    savedDepth = window.localStorage.getItem("nawaabs-depth-mode") || "on";
  } catch (error) {
    savedMotion = reducedMotion ? "still" : "full";
    savedDepth = "on";
  }

  applyMotionMode(savedMotion);
  applyDepthMode(savedDepth !== "off");
}

function openDrawer() {
  mobileDrawer.classList.add("is-open");
  drawerBackdrop.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  syncBodyOverflow();
  activateFocusTrap(mobileDrawer, ".mobile-nav a");
  trackEvent("mobile_menu_open");
}

function closeDrawer() {
  mobileDrawer.classList.remove("is-open");
  drawerBackdrop.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  syncBodyOverflow();
  deactivateFocusTrap(mobileDrawer);
}

function createHeroParticles() {
  if (!heroParticles) {
    return;
  }

  heroParticles.innerHTML = "";

  const particleCount = getAmbientEffectCount("hero");
  if (!particleCount) {
    return;
  }

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "hero-particle";
    particle.style.setProperty("--particle-left", `${Math.random() * 100}%`);
    particle.style.setProperty("--particle-size", `${Math.random() * 8 + 4}px`);
    particle.style.setProperty("--particle-delay", `${Math.random() * -14}s`);
    particle.style.setProperty("--particle-duration", `${Math.random() * 8 + 10}s`);
    particle.style.setProperty("--particle-drift", `${Math.random() * 160 - 80}px`);
    heroParticles.appendChild(particle);
  }
}

function createSpiceCloud() {
  if (!heroSpiceCloud) {
    return;
  }

  heroSpiceCloud.innerHTML = "";

  const spiceCount = getAmbientEffectCount("spice");
  if (!spiceCount) {
    return;
  }

  for (let index = 0; index < spiceCount; index += 1) {
    const spice = document.createElement("span");
    spice.className = `spice-particle spice-particle-${index % 3}`;
    spice.style.setProperty("--spice-left", `${Math.random() * 100}%`);
    spice.style.setProperty("--spice-top", `${Math.random() * 100}%`);
    spice.style.setProperty("--spice-size", `${Math.random() * 22 + 10}px`);
    spice.style.setProperty("--spice-delay", `${Math.random() * -8}s`);
    spice.style.setProperty("--spice-duration", `${Math.random() * 10 + 10}s`);
    spice.style.setProperty("--spice-drift-x", `${Math.random() * 80 - 40}px`);
    spice.style.setProperty("--spice-drift-y", `${Math.random() * 60 - 30}px`);
    heroSpiceCloud.appendChild(spice);
  }
}

function setupTiltCards() {
  const cards = document.querySelectorAll(".feature-float, .service-band-card, .special-card, .insight-card, .story-card, .mini-card, .point-card, .contact-card, .immersive-stage, .signature-lab, .menu-card");

  cards.forEach((card) => {
    if (card.dataset.tiltReady === "true") {
      return;
    }

    card.dataset.tiltReady = "true";

    card.addEventListener("pointermove", (event) => {
      const shouldSkip = window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768 || getMotionMode() === "still" || document.body.dataset.depth === "off";
      if (shouldSkip) {
        return;
      }

      const bounds = card.getBoundingClientRect();
      const percentX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const percentY = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateY = percentX * 10;
      const rotateX = percentY * -10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function updateParallax() {
  if (getMotionMode() === "still" || document.body.dataset.depth === "off" || isCompactViewport()) {
    parallaxNodes.forEach((node) => {
      node.style.setProperty("--parallax-shift", "0px");
    });
    return;
  }

  const motionFactor = getMotionMode() === "soft" ? 0.45 : 1;
  parallaxNodes.forEach((node) => {
    const depth = Number(node.dataset.parallax || 0);
    node.style.setProperty("--parallax-shift", `${window.scrollY * depth * motionFactor}px`);
  });
}

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = total > 0 ? (scrollTop / total) * 100 : 0;

  scrollProgress.style.width = `${ratio}%`;
  siteHeader.classList.toggle("is-scrolled", scrollTop > 24);
  scrollTopButton.classList.toggle("is-visible", scrollTop > 700);
  updateParallax();

  scrollDepthMilestones.forEach((milestone) => {
    if (ratio >= milestone && !seenScrollDepths.has(milestone)) {
      seenScrollDepths.add(milestone);
      trackEvent("scroll_depth", { milestone });
    }
  });
}

function scheduleScrollUI() {
  if (scrollFrame) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    updateScrollUI();
  });
}

function handleWindowResize() {
  scheduleScrollUI();
  window.clearTimeout(ambientResizeTimer);
  ambientResizeTimer = window.setTimeout(() => {
    refreshAmbientEffects();
  }, 160);
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  reveals.forEach((element) => observer.observe(element));
}

function setupInsightCounters() {
  if (!insightValues.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    insightValues.forEach((node) => {
      node.textContent = String(Number(node.dataset.counterTarget || 0));
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const node = entry.target;
      const target = Number(node.dataset.counterTarget || 0);
      const startedAt = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        node.textContent = String(Math.round(target * progress));
        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
      observer.unobserve(node);
    });
  }, { threshold: 0.45 });

  insightValues.forEach((node) => observer.observe(node));
}

function setupSignatureLab() {
  if (!signatureLab) {
    return;
  }

  signatureLab.addEventListener("pointermove", (event) => {
    const shouldSkip = window.innerWidth < 768 || getMotionMode() === "still" || document.body.dataset.depth === "off";
    if (shouldSkip) {
      signatureLab.style.removeProperty("--lab-pointer-x");
      signatureLab.style.removeProperty("--lab-pointer-y");
      return;
    }

    const bounds = signatureLab.getBoundingClientRect();
    const percentX = (event.clientX - bounds.left) / bounds.width;
    const percentY = (event.clientY - bounds.top) / bounds.height;
    signatureLab.style.setProperty("--lab-pointer-x", `${percentX}`);
    signatureLab.style.setProperty("--lab-pointer-y", `${percentY}`);
  });

  signatureLab.addEventListener("pointerleave", () => {
    signatureLab.style.removeProperty("--lab-pointer-x");
    signatureLab.style.removeProperty("--lab-pointer-y");
  });
}

function isPhoneOrEmail(value) {
  return /^[0-9+\-\s()]{7,}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setupGalleryAccessibility() {
  document.querySelectorAll(".gallery-item").forEach((button) => {
    const title = button.dataset.title || "gallery item";
    button.setAttribute("aria-label", `Open gallery item: ${title}`);
  });
}

function setupTrackableLinks() {
  document.querySelectorAll("a[href^='tel:']").forEach((link) => {
    link.addEventListener("click", () => trackEvent("call_click", { href: link.getAttribute("href") || "" }));
  });

  document.querySelectorAll("a[href*='wa.me']").forEach((link) => {
    link.addEventListener("click", () => trackEvent("whatsapp_click", { href: link.getAttribute("href") || "" }));
  });

  document.querySelectorAll("a[href*='maps.app.goo.gl'], a[href*='google.com/maps']").forEach((link) => {
    link.addEventListener("click", () => trackEvent("maps_click", { href: link.getAttribute("href") || "" }));
  });
}

function setupRipples() {
  document.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || getMotionMode() === "still") {
      return;
    }

    const trigger = event.target.closest(".button, .pill-link, .floating-link, .motion-button, .menu-tab, .lightbox-close");
    if (!trigger) {
      return;
    }

    const bounds = trigger.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "button-ripple";
    ripple.style.left = `${event.clientX - bounds.left}px`;
    ripple.style.top = `${event.clientY - bounds.top}px`;
    trigger.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 650);
  });
}

function openLightbox(kind, src, title) {
  if (kind === "video") {
    lightboxBody.innerHTML = `
      <video controls autoplay loop playsinline poster="${imageLibrary.signature}" aria-label="${title}">
        <source src="${src}" type="video/mp4">
      </video>
    `;
  } else if (kind === "embed") {
    lightboxBody.innerHTML = `
      <iframe
        src="${src}"
        title="${title}"
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else {
    lightboxBody.innerHTML = `<img src="${src}" alt="${title}">`;
  }

  lightbox.setAttribute("aria-label", title || "Gallery viewer");
  lightbox.hidden = false;
  syncBodyOverflow();
  activateFocusTrap(lightbox, "#lightboxClose");
  trackEvent("gallery_open", { kind, title: title || "" });
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxBody.innerHTML = "";
  syncBodyOverflow();
  deactivateFocusTrap(lightbox);
}

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveCategory(tab.dataset.category));
});

motionButtons.forEach((button) => {
  button.addEventListener("click", () => applyMotionMode(button.dataset.motionMode || "full"));
});

depthToggle.addEventListener("change", () => applyDepthMode(depthToggle.checked));

menuSearch.addEventListener("input", renderMenu);
menuSort.addEventListener("change", () => {
  activeSort = menuSort.value;
  renderMenu();
});
vegOnlyToggle.addEventListener("change", renderMenu);
spicyOnlyToggle.addEventListener("change", renderMenu);
popularOnlyToggle.addEventListener("change", renderMenu);
menuCartButton.addEventListener("click", openCart);
cartToggleButton.addEventListener("click", openCart);
miniCartBubble.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
clearCartButton.addEventListener("click", () => {
  clearCart();
  setFormMessage(checkoutMessage, "Cart cleared. Add dishes to start a new order.", "success");
});

reservationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const invalidControl = validateFormControls(reservationForm);
  if (invalidControl) {
    invalidControl.focus();
    setFormMessage(reservationMessage, "Please fix the highlighted reservation details.", "error");
    return;
  }

  const formData = new FormData(reservationForm);
  const error = validateReservation(formData);

  if (error) {
    setFormMessage(reservationMessage, error, "error");
    return;
  }

  const guestName = formData.get("guestName").trim();
  const guestType = formData.get("guestType");
  const guestDate = formData.get("guestDate");
  const guestTime = formData.get("guestTime");
  const guests = formData.get("guestCount");
  const payload = Object.fromEntries(formData.entries());

  const stored = await submitLeadForm("reservation", payload);

  setFormMessage(
    reservationMessage,
    stored
      ? `Thanks, ${guestName}. Your ${guestType.toLowerCase()} for ${guestDate} at ${guestTime} for ${guests} guest(s) has been noted. The restaurant can follow up on ${phoneNumber}.`
      : `Thanks, ${guestName}. Your ${guestType.toLowerCase()} request for ${guestDate} at ${guestTime} is ready. If you are previewing locally, please also use call or WhatsApp because the PHP form capture only works on live hosting.`,
    "success"
  );
  clearFormDraft(reservationForm);
  reservationForm.reset();
  resetEnhancedForm(reservationForm);
  document.getElementById("guestDate").min = todayStringForIndia();
  showConfirmationModal("Reservation request sent", `We have your ${guestType.toLowerCase()} request for ${guestDate} at ${guestTime}. The team can follow up on ${phoneNumber}.`);
  trackEvent("form_submit", { formType: "reservation", stored });
});

cateringQuoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const invalidControl = validateFormControls(cateringQuoteForm);
  if (invalidControl) {
    invalidControl.focus();
    setFormMessage(cateringQuoteMessage, "Please complete the highlighted catering details.", "error");
    return;
  }

  const formData = new FormData(cateringQuoteForm);
  const payload = Object.fromEntries(formData.entries());
  const stored = await submitLeadForm("cateringQuote", payload);
  const quoteName = formData.get("quoteName").trim();
  const eventType = formData.get("quoteEventType");
  const eventDate = formData.get("quoteDate");
  const eventTime = formData.get("quoteTime");

  setFormMessage(
    cateringQuoteMessage,
    stored
      ? `Thanks, ${quoteName}. Your ${eventType.toLowerCase()} catering request for ${eventDate} at ${eventTime} has been captured.`
      : `Thanks, ${quoteName}. Your catering request is ready. If you are previewing locally, please also use WhatsApp because automatic capture only works on live hosting.`,
    "success"
  );
  clearFormDraft(cateringQuoteForm);
  cateringQuoteForm.reset();
  resetEnhancedForm(cateringQuoteForm);
  document.getElementById("quoteDate").min = todayStringForIndia();
  showConfirmationModal("Catering quote requested", `We have your ${eventType.toLowerCase()} enquiry for ${eventDate} at ${eventTime}. The team can follow up with package suggestions shortly.`);
  trackEvent("form_submit", { formType: "cateringQuote", stored });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const invalidControl = validateFormControls(contactForm);
  if (invalidControl) {
    invalidControl.focus();
    setFormMessage(contactMessageStatus, "Please fix the highlighted enquiry details.", "error");
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("contactName").trim();
  const phone = formData.get("contactPhone").trim();
  const message = formData.get("contactMessage").trim();

  if (!name || !phone || !message) {
    setFormMessage(contactMessageStatus, "Please complete the enquiry form before sending it.", "error");
    return;
  }

  const stored = await submitLeadForm("contact", Object.fromEntries(formData.entries()));

  setFormMessage(
    contactMessageStatus,
    stored
      ? `Thanks, ${name}. Your enquiry has been captured and can be followed up using ${phone}.`
      : `Thanks, ${name}. Your enquiry is ready. If you are previewing locally, please also call or WhatsApp because automatic form capture only works once the PHP endpoint is live on hosting.`,
    "success"
  );
  clearFormDraft(contactForm);
  contactForm.reset();
  resetEnhancedForm(contactForm);
  showConfirmationModal("Enquiry sent", `Your message has been noted and the restaurant can follow up using ${phone}.`);
  trackEvent("form_submit", { formType: "contact", stored });
});

newsletterForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const invalidControl = validateFormControls(newsletterForm);
  if (invalidControl) {
    invalidControl.focus();
    setFormMessage(newsletterMessage, "Please add a valid phone number or email.", "error");
    return;
  }

  const formData = new FormData(newsletterForm);
  const name = formData.get("newsletterName").trim();
  const contact = formData.get("newsletterContact").trim();

  if (!contact) {
    setFormMessage(newsletterMessage, "Please add a phone number or email to get updates.", "error");
    return;
  }

  if (!isPhoneOrEmail(contact)) {
    setFormMessage(newsletterMessage, "Please enter a valid phone number or email address.", "error");
    return;
  }

  const stored = await submitLeadForm("newsletter", Object.fromEntries(formData.entries()));

  setFormMessage(
    newsletterMessage,
    stored
      ? `Thanks${name ? `, ${name}` : ""}. Offer and reservation updates can now be shared using ${contact}.`
      : `Thanks${name ? `, ${name}` : ""}. Your update request is ready. Automatic capture for newsletter signups will work once the PHP endpoint is live on hosting.`,
    "success"
  );
  clearFormDraft(newsletterForm);
  newsletterForm.reset();
  resetEnhancedForm(newsletterForm);
  showConfirmationModal("Updates enabled", `Festival offers and reservation updates can now be shared using ${contact}.`);
  trackEvent("form_submit", { formType: "newsletter", stored });
});

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const invalidControl = validateFormControls(checkoutForm);
  if (invalidControl) {
    invalidControl.focus();
    setFormMessage(checkoutMessage, "Please fix the highlighted order details.", "error");
    return;
  }

  const formData = new FormData(checkoutForm);
  const error = validateCheckout(formData);

  if (error) {
    setFormMessage(checkoutMessage, error, "error");
    return;
  }

  const stored = await submitLeadForm("order", buildOrderSubmissionPayload(formData));
  const encodedMessage = buildCartWhatsAppMessage(formData);
  setFormMessage(
    checkoutMessage,
    stored
      ? "Order summary ready. Opening WhatsApp to send it now."
      : "Order summary ready. Opening WhatsApp now. Server capture will work once the PHP form endpoint is live on hosting.",
    "success"
  );
  trackEvent("form_submit", { formType: "order", stored, total: getCartTotal() });
  window.open(`${whatsappBase}${encodedMessage}`, "_blank", "noopener,noreferrer");
});

menuToggle.addEventListener("click", () => {
  if (mobileDrawer.classList.contains("is-open")) {
    closeDrawer();
  } else {
    openDrawer();
  }
});

drawerClose.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
confirmationClose.addEventListener("click", closeConfirmationModal);
confirmationAction.addEventListener("click", closeConfirmationModal);
confirmationModal.addEventListener("click", (event) => {
  if (event.target === confirmationModal) {
    closeConfirmationModal();
  }
});

document.querySelectorAll(".mobile-nav a, .mobile-cta a").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => openLightbox(button.dataset.kind, button.dataset.src, button.dataset.title));
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeConfirmationModal();
    closeLightbox();
    closeDrawer();
    closeCart();
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", scheduleScrollUI, { passive: true });
window.addEventListener("resize", handleWindowResize);

document.getElementById("guestDate").min = todayStringForIndia();
document.getElementById("quoteDate").min = todayStringForIndia();
populateTimeSlots(guestTimeSelect, "Select reservation time");
populateTimeSlots(quoteTimeSelect, "Select catering time");
decorateRequiredFields();

renderMenuSkeletons();
attachFormEnhancements(reservationForm);
attachFormEnhancements(cateringQuoteForm);
attachFormEnhancements(contactForm);
attachFormEnhancements(newsletterForm);
attachFormEnhancements(checkoutForm);
checkoutForm.elements.namedItem("checkoutType").addEventListener("change", () => {
  syncCheckoutAddressField();
});
loadExperiencePreferences();
cart = loadCart();
renderCart();
syncCheckoutAddressField();
updateLiveStatus();
updateOfferCountdown();
updateEventCountdown();
setupSignatureLab();
setupRevealAnimations();
setupInsightCounters();
setupGalleryAccessibility();
setupTrackableLinks();
setupRipples();
setupMediaLoadingStates();
window.requestAnimationFrame(() => {
  scheduleScrollUI();
});
runWhenIdle(() => {
  renderMenu();
  renderTestimonials();
  restartTestimonialTimer();
  setupTiltCards();
}, 220);
window.setInterval(() => {
  updateLiveStatus();
  updateOfferCountdown();
  updateEventCountdown();
}, 60000);

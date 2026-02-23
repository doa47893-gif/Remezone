/* ============================================================
   SCRIPT.JS — ShopCurate Affiliate Marketing Website
   
   HOW TO CUSTOMIZE:
   → Edit PRODUCTS array below to change product listings
   → Edit BLOG_POSTS array below to change blog articles
   → Each product has an affiliateLink field — put your links there
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCTS DATA
   ============================================================
   To add/edit products, modify this array.
   
   FIELDS:
   - id:            Unique number (don't duplicate)
   - name:          Product title
   - category:      Category name (used for filter buttons)
   - description:   Short product description (1-2 sentences)
   - price:         Current price (string, e.g. "$49.99")
   - originalPrice: Original/crossed-out price (string, or null)
   - rating:        Star rating out of 5 (number)
   - reviewCount:   Number of reviews (number)
   - badge:         Optional badge text e.g. "Best Seller" (null to hide)
   - image:         Image URL — use Unsplash or your own hosted image
   - affiliateLink: ⭐ YOUR AFFILIATE URL GOES HERE ⭐
   ============================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Headphones",
    category: "Tech",
    description: "Industry-leading noise cancellation with 30-hour battery life and crystal-clear call quality. A must-have for remote workers.",
    price: "$279.99",
    originalPrice: "$399.99",
    rating: 4.9,
    reviewCount: 3842,
    badge: "Best Seller",
    // Replace the image URL with your own product image
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE1?tag=YOUR-TAG-20"
  },
  {
    id: 2,
    name: "Ember Temperature Control Mug",
    category: "Home",
    description: "Keep your coffee or tea at the perfect temperature all morning. App-controlled and beautifully designed.",
    price: "$79.95",
    originalPrice: null,
    rating: 4.7,
    reviewCount: 1256,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE2?tag=YOUR-TAG-20"
  },
  {
    id: 3,
    name: "Lululemon Yoga Mat 5mm",
    category: "Fitness",
    description: "Non-slip surface, superior grip, and sweat-wicking material. Perfect for yoga, pilates, and home workouts.",
    price: "$88.00",
    originalPrice: null,
    rating: 4.8,
    reviewCount: 967,
    badge: null,
    image: "https://images.unsplash.com/photo-1601925228604-5e68c0aafc51?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.lululemon.com/EXAMPLE?affiliate=YOUR-ID"
  },
  {
    id: 4,
    name: "Anker 65W Charging Station",
    category: "Tech",
    description: "Charge your laptop, phone, and tablet simultaneously. Compact enough for your bag, powerful enough for everything.",
    price: "$35.99",
    originalPrice: "$49.99",
    rating: 4.6,
    reviewCount: 5120,
    badge: "Top Value",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE4?tag=YOUR-TAG-20"
  },
  {
    id: 5,
    name: "Fellow Stagg EKG Kettle",
    category: "Home",
    description: "Variable temperature control, precision pouring spout, and a built-in stopwatch. The gold standard for pour-over coffee.",
    price: "$165.00",
    originalPrice: null,
    rating: 4.9,
    reviewCount: 2043,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://fellowproducts.com/EXAMPLE?affiliate=YOUR-ID"
  },
  {
    id: 6,
    name: "Garmin Forerunner 265",
    category: "Fitness",
    description: "Advanced running metrics, AMOLED display, and up to 15 days of battery life. The smartwatch for serious runners.",
    price: "$349.99",
    originalPrice: null,
    rating: 4.8,
    reviewCount: 788,
    badge: null,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE6?tag=YOUR-TAG-20"
  },
  {
    id: 7,
    name: "Secretlab TITAN Evo Chair",
    category: "Home",
    description: "All-day comfort with lumbar support, magnetic head pillow, and premium leatherette. Built for long work or gaming sessions.",
    price: "$429.00",
    originalPrice: "$519.00",
    rating: 4.7,
    reviewCount: 4310,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://secretlab.co/EXAMPLE?affiliate=YOUR-ID"
  },
  {
    id: 8,
    name: "Kindle Paperwhite 11th Gen",
    category: "Tech",
    description: "300 PPI glare-free display, adjustable warm light, and 10 weeks of battery. The best e-reader money can buy.",
    price: "$139.99",
    originalPrice: null,
    rating: 4.9,
    reviewCount: 12088,
    badge: null,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    // ⭐ REPLACE WITH YOUR AFFILIATE LINK ⭐
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE8?tag=YOUR-TAG-20"
  }
];

/* ============================================================
   BLOG POSTS DATA
   ============================================================
   Edit these blog posts to improve SEO and drive traffic.
   
   FIELDS:
   - title:    Blog post title (use SEO keywords)
   - tag:      Category label
   - excerpt:  Short summary (2-3 sentences)
   - date:     Publication date string
   - readTime: Estimated read time string
   - image:    Cover image URL
   - link:     URL to the full article (use "#" as placeholder)
   ============================================================ */
const BLOG_POSTS = [
  {
    title: "10 Best Noise-Cancelling Headphones of 2025 (Tested & Ranked)",
    tag: "Tech Reviews",
    excerpt: "We spent 3 months testing 20+ pairs of headphones to find the absolute best. Here's what actually delivers on its promises.",
    date: "May 12, 2025",
    readTime: "8 min read",
    // Replace with your own image URL
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
    // Replace with your blog post URL
    link: "#"
  },
  {
    title: "How to Build the Perfect Home Office Setup for Under $500",
    tag: "Home & Office",
    excerpt: "A great workspace doesn't have to cost a fortune. We break down exactly what to prioritize and where to save money.",
    date: "Apr 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    link: "#"
  },
  {
    title: "The Fitness Gear That Actually Helped Us Stay Consistent",
    tag: "Fitness",
    excerpt: "After testing dozens of products, we found that the best fitness gear has one thing in common: it removes friction from your routine.",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    link: "#"
  }
];

/* ============================================================
   APP STATE
   ============================================================ */
let activeCategory = 'all';
let searchQuery = '';

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

/** Generate star string from rating number */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Build HTML for a single product card */
function createProductCard(product) {
  const badge = product.badge
    ? `<div class="product-badge">${product.badge}</div>`
    : '';
  const originalPrice = product.originalPrice
    ? `<span class="product-price-original">${product.originalPrice}</span>`
    : '';

  return `
    <article class="product-card reveal" data-id="${product.id}">
      <div class="product-image-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x450/F2EFE9/A8A49E?text=No+Image'"
        />
        ${badge}
      </div>
      <div class="product-body">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span>${product.rating}</span>
          <span class="rating-count">(${product.reviewCount.toLocaleString()})</span>
        </div>
      </div>
      <div class="product-footer">
        <div>
          <span class="product-price">${product.price}</span>
          ${originalPrice}
        </div>
        <!--
          ============================================================
          AFFILIATE BUTTON — Link is set in the PRODUCTS array above
          ============================================================
        -->
        <a
          href="${product.affiliateLink}"
          class="btn btn-affiliate product-cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label="Buy ${product.name}"
        >
          View Deal →
        </a>
      </div>
    </article>
  `;
}

/** Build HTML for a single blog card */
function createBlogCard(post) {
  return `
    <article class="blog-card reveal">
      <div class="blog-card-image">
        <img
          src="${post.image}"
          alt="${post.title}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x340/F2EFE9/A8A49E?text=No+Image'"
        />
      </div>
      <div class="blog-card-body">
        <div class="blog-tag">${post.tag}</div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-meta">
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
      </div>
    </article>
  `;
}

/* ============================================================
   FILTER & SEARCH LOGIC
   ============================================================ */

/** Get unique categories from PRODUCTS array */
function getCategories() {
  const cats = PRODUCTS.map(p => p.category);
  return [...new Set(cats)].sort();
}

/** Render category filter buttons */
function renderFilters() {
  const container = document.getElementById('filter-buttons');
  const categories = getCategories();
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.category = cat;
    btn.textContent = cat;
    container.appendChild(btn);
  });
}

/** Return filtered & searched products */
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const searchIn = `${product.name} ${product.description} ${product.category}`.toLowerCase();
    const matchesSearch = searchQuery === '' || searchIn.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

/** Render products to the grid */
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  const filtered = getFilteredProducts();

  grid.innerHTML = filtered.map(createProductCard).join('');

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    // Trigger reveal animation for newly added cards
    setTimeout(observeRevealElements, 50);
  }
}

/** Render blog posts */
function renderBlogPosts() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = BLOG_POSTS.map(createBlogCard).join('');
  setTimeout(observeRevealElements, 50);
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

/** Category filter click */
function initFilters() {
  const container = document.getElementById('filter-buttons');
  container.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeCategory = btn.dataset.category;
    // Update active state
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });
}

/** Search input with debounce */
function initSearch() {
  const input = document.getElementById('search-input');
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim();
      renderProducts();
    }, 280);
  });
}

/** Header scroll effect */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/** Mobile hamburger menu */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const nav  = document.getElementById('main-nav');
  const body = document.body;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
    body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      body.style.overflow = '';
    });
  });
}

/** Contact form — frontend validation and success message */
function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Simple validation
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });
    // Email validation
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.classList.add('error');
      valid = false;
    }

    if (!valid) return;

    /*
      ============================================================
      FORM SUBMISSION:
      To make this form live, replace the block below with a
      fetch() call to your form service, e.g. Formspree:

      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(() => { ... });
      ============================================================
    */
    // Simulate successful submission (remove in production)
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
      form.reset();
      form.style.opacity = '';
      form.style.pointerEvents = '';
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 800);
  });

  // Remove error class on input
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });
}

/* ============================================================
   INTERSECTION OBSERVER — Scroll reveal animations
   ============================================================ */
function observeRevealElements() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for grid children
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   INIT — Boot the app
   ============================================================ */
function init() {
  renderFilters();
  renderProducts();
  renderBlogPosts();
  initFilters();
  initSearch();
  initHeaderScroll();
  initHamburger();
  initContactForm();
  observeRevealElements();
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

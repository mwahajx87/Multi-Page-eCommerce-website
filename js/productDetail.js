// ===== PRODUCT DETAIL PAGE: Dynamic Rendering =====

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderProductDetail();

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        menuToggle.innerHTML = '<i class="ri-close-line"></i>';
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
      }
    });
  }
});

function renderProductDetail() {
  // Get product ID from URL query parameter
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id")) || 9; // Default to Asgaard Sofa (id: 9)

  const product = getProductById(productId);
  if (!product) {
    document.getElementById("productDetailInfo").innerHTML =
      '<p class="text-center text-[#999999] py-10">Product not found.</p>';
    return;
  }

  // Update page title
  document.title = `${product.name} - Furniro`;

  // Update breadcrumb
  const breadcrumb = document.getElementById("productBreadcrumb");
  if (breadcrumb) {
    breadcrumb.textContent = `Home > Shop > ${product.name}`;
  }

  // Update page title
  const pageTitle = document.getElementById("productPageTitle");
  if (pageTitle) {
    pageTitle.textContent = product.name;
  }

  // Render image gallery
  renderImageGallery(product);

  // Render product info
  renderProductInfo(product);

  // Render description
  renderDescription(product);

  // Render related products
  renderRelatedProducts(product);
}

// ===== RENDER IMAGE GALLERY =====
function renderImageGallery(product) {
  const gallery = document.getElementById("productImageGallery");
  if (!gallery) return;

  // Collect available images for this product
  const images = [product.image, product.hoverImage];
  // Add more images from the product folder if they match common patterns
  if (product.id === 9) {
    // Asgaard Sofa specific images
    images.push("./images/product/cloudSofa.png", "./images/product/cloudeSofa2.png", "./images/product/mayaSofa.png");
  } else if (product.id === 10) {
    // Outdoor Sofa Set specific images
    images.push("./images/product/outdoorSofa.png", "./images/product/stuartSofa.png");
  } else {
    // Generic product images
    images.push("./images/product/image1.png", "./images/product/image2.png");
  }

  // Deduplicate
  const uniqueImages = [...new Set(images)].filter(Boolean);

  // Main image (first unique image)
  const mainImage = uniqueImages[0];

  // Build thumbnails (up to 4)
  const thumbnails = uniqueImages.slice(0, 4);

  let thumbsHtml = "";
  thumbnails.forEach((img, index) => {
    thumbsHtml += `
      <div class="h-20 w-20 overflow-hidden rounded-lg bg-[#F9F1E7] cursor-pointer product-thumb" data-src="${img}">
        <img class="h-full w-full object-cover" src="${img}" alt="${product.name} thumbnail ${index + 1}" />
      </div>`;
  });

  gallery.innerHTML = `
    <div class="flex gap-4">
      <div class="flex flex-col gap-4">
        ${thumbsHtml}
      </div>
      <div class="flex-1 overflow-hidden rounded-lg bg-[#F9F1E7]">
        <img id="productMainImage" class="h-full w-full object-cover" src="${mainImage}" alt="${product.name}" />
      </div>
  `;

  // Click to swap main image
  setTimeout(() => {
    document.querySelectorAll(".product-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.dataset.src;
        const mainImg = document.getElementById("productMainImage");
        if (mainImg) mainImg.src = src;
      });
    });
  }, 0);
}

// ===== RENDER PRODUCT INFO =====
function renderProductInfo(product) {
  const container = document.getElementById("productDetailInfo");
  if (!container) return;

  // Star rating HTML
  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  let starsHtml = "";
  for (let i = 0; i < fullStars; i++) starsHtml += '<i class="ri-star-fill"></i>';
  if (halfStar) starsHtml += '<i class="ri-star-half-fill"></i>';
  for (let i = 0; i < emptyStars; i++) starsHtml += '<i class="ri-star-line"></i>';

  // Tags
  const tags = product.tags || [];
  const tagsStr = tags.length > 0 ? tags.join(", ") : product.category;

  // SKU
  const sku = product.sku || "N/A";
  const category = product.category || "General";

  // Determine if product is in wishlist for heart icon
  const liked = isInWishlist(product.id);

  container.innerHTML = `
    <h1 class="text-4xl font-bold text-[#333333]">${product.name}</h1>
    <p class="mt-2 text-2xl font-bold text-[#B88E2F]">${formatPrice(product.price)}</p>

    <div class="mt-3 flex items-center gap-3">
      <div class="flex items-center gap-1 text-[#FFC700]">${starsHtml}</div>
      <span class="text-sm text-[#999999]">|</span>
      <span class="text-sm text-[#999999]">${product.reviews} Customer Review${product.reviews !== 1 ? 's' : ''}</span>
    </div>

    <p class="mt-4 text-sm leading-6 text-[#777777]">${product.description}</p>

    <div class="mt-6">
      <p class="text-sm text-[#999999]">Size</p>
      <div class="mt-2 flex gap-3">
        <button class="h-9 w-9 rounded-lg bg-[#B88E2F] text-sm text-white">L</button>
        <button class="h-9 w-9 rounded-lg border border-[#999999] bg-white text-sm text-[#333333]">XL</button>
        <button class="h-9 w-9 rounded-lg border border-[#999999] bg-white text-sm text-[#333333]">XS</button>
      </div>

    <div class="mt-6">
      <p class="text-sm text-[#999999]">Color</p>
      <div class="mt-2 flex gap-3">
        <span class="inline-block h-7 w-7 rounded-full bg-[#816DFA]"></span>
        <span class="inline-block h-7 w-7 rounded-full bg-[#333333]"></span>
        <span class="inline-block h-7 w-7 rounded-full bg-[#B88E2F]"></span>
      </div>

    <div class="mt-8 flex items-center gap-4">
      <!-- Quantity -->
      <div class="flex items-center border border-[#999999] rounded-lg">
        <button id="qtyMinus" class="px-4 py-2 text-sm text-[#333333] cursor-pointer">-</button>
        <span id="qtyDisplay" class="px-4 py-2 text-sm text-[#333333]">1</span>
        <button id="qtyPlus" class="px-4 py-2 text-sm text-[#333333] cursor-pointer">+</button>
      </div>
      <button id="addToCartBtn"
        class="rounded-lg border border-[#333333] px-10 py-2 text-sm font-bold text-[#333333] transition-colors hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] cursor-pointer">
        Add To Cart
      </button>
      <button id="compareBtn"
        class="rounded-lg border border-[#333333] px-10 py-2 text-sm font-bold text-[#333333] transition-colors hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] cursor-pointer">
        Compare
      </button>
    </div>

    <hr class="my-8 border-t border-[#dddddd]" />
    <div class="space-y-3 text-sm text-[#777777]">
      <div class="flex gap-4">
        <span class="w-20">SKU</span>
        <span>: ${sku}</span>
      </div>
      <div class="flex gap-4">
        <span class="w-20">Category</span>
        <span>: ${category}</span>
      </div>
      <div class="flex gap-4">
        <span class="w-20">Tags</span>
        <span>: ${tagsStr}</span>
      </div>

    <div class="mt-6 flex items-center gap-4 text-sm text-[#777777]">
      <span class="w-20">Share</span>
      <div class="flex items-center gap-4 text-lg">
        <a href="#" class="text-[#333333] hover:text-[#B88E2F]"><i class="ri-facebook-fill"></i></a>
        <a href="#" class="text-[#333333] hover:text-[#B88E2F]"><i class="ri-linkedin-fill"></i></a>
        <a href="#" class="text-[#333333] hover:text-[#B88E2F]"><i class="ri-twitter-fill"></i></a>
      </div>
  `;

  // Attach event listeners
  setTimeout(() => {
    let qty = 1;
    const qtyDisplay = document.getElementById("qtyDisplay");
    const qtyMinus = document.getElementById("qtyMinus");
    const qtyPlus = document.getElementById("qtyPlus");

    if (qtyMinus) {
      qtyMinus.addEventListener("click", () => {
        if (qty > 1) {
          qty--;
          if (qtyDisplay) qtyDisplay.textContent = qty;
        }
      });
    }
    if (qtyPlus) {
      qtyPlus.addEventListener("click", () => {
        qty++;
        if (qtyDisplay) qtyDisplay.textContent = qty;
      });
    }

    const addBtn = document.getElementById("addToCartBtn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        addToCart(product.id, qty);
        showToast(`${product.name} added to cart!`);
      });
    }

    const compareBtn = document.getElementById("compareBtn");
    if (compareBtn) {
      compareBtn.addEventListener("click", () => {
        const result = addToCompare(product.id);
        if (result.success) {
          showToast(`${product.name} added to compare!`);
          setTimeout(() => {
            window.location.href = "./productComparison.html";
          }, 500);
        } else {
          showToast(result.message);
        }
      });
    }
  }, 0);
}

// ===== RENDER DESCRIPTION =====
function renderDescription(product) {
  const container = document.getElementById("productDescription");
  if (!container) return;

  const specs = product.specs || {};

  container.innerHTML = `
    <p class="text-sm leading-7 text-[#777777]">
      ${product.description}
    </p>
    <p class="text-sm leading-7 text-[#777777]">
      The ${product.name} features high-quality materials and expert craftsmanship.
      ${specs.fillingMaterial ? `Filled with ${specs.fillingMaterial} for optimal comfort.` : ''}
      ${specs.upholsteryMaterial ? `Upholstered in premium ${specs.upholsteryMaterial}.` : ''}
      ${specs.finishType ? `Finished with a ${specs.finishType} surface.` : ''}
    </p>
  `;
}

// ===== RENDER RELATED PRODUCTS =====
function renderRelatedProducts(product) {
  const container = document.getElementById("relatedProductsContainer");
  if (!container) return;

  const allProducts = getProducts();
  // Find products in the same category, excluding current product
  const related = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // Shuffle and pick up to 4
  const shuffled = related.sort(() => Math.random() - 0.5).slice(0, 4);

  // If we still don't have 4, fill with other products
  if (shuffled.length < 4) {
    const others = allProducts.filter(
      (p) => p.id !== product.id && !shuffled.find((s) => s.id === p.id)
    );
    while (shuffled.length < 4 && others.length > 0) {
      const randomIndex = Math.floor(Math.random() * others.length);
      shuffled.push(others[randomIndex]);
      others.splice(randomIndex, 1);
    }
  }

  container.innerHTML = "";
  shuffled.forEach((p) => {
    container.appendChild(createProductCard(p));
  });
}

// ===== WISHLIST PAGE: Render Wishlisted Products =====

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderWishlistPage();

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

function renderWishlistPage() {
  const container = document.getElementById("wishlistContainer");
  const emptyEl = document.getElementById("wishlistEmpty");
  if (!container) return;

  const wishlistIds = getWishlist();
  const products = getProducts();
  const wishlistProducts = wishlistIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  container.innerHTML = "";

  if (wishlistProducts.length === 0) {
    container.classList.add("hidden");
    if (emptyEl) {
      emptyEl.classList.remove("hidden");
    }
    return;
  }

  container.classList.remove("hidden");
  if (emptyEl) {
    emptyEl.classList.add("hidden");
  }

  wishlistProducts.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}


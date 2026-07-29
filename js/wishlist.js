document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderWishlistPage();
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

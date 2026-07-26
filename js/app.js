// ===== MOBILE MENU TOGGLE =====
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

// ===== HOMEPAGE: Render Products =====
function renderHomepageProducts() {
  const container = document.getElementById("homeProducts");
  if (!container) return;
  const products = getProducts();
  const productsToShow = products.slice(0, 8);
  container.innerHTML = "";
  productsToShow.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}

// ===== INIT ON DOM READY =====
document.addEventListener("DOMContentLoaded", function () {
  // data.js already calls initDataStore() and updateCartBadge() on DOMContentLoaded
  renderHomepageProducts();
});

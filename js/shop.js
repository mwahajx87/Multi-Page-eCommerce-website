// ===== SHOP PAGE: Dynamic Products with Pagination & Filter =====

let shopState = {
  currentPage: 1,
  perPage: 8,
  sortBy: "default",
  filteredProducts: [],
};

function renderShopProducts() {
  const container = document.getElementById("shopProducts");
  if (!container) return;

  let products = getProducts();
  let sortBy = document.getElementById("sortSelect")?.value || "default";
  let showCount = parseInt(document.getElementById("showSelect")?.value) || 8;

  // Sort
  let sorted = [...products];
  if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
  else if (sortBy === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));

  shopState.filteredProducts = sorted;
  shopState.perPage = showCount;

  const totalPages = Math.ceil(sorted.length / showCount);
  const start = (shopState.currentPage - 1) * showCount;
  const pageItems = sorted.slice(start, start + showCount);

  // Render products
  container.innerHTML = "";
  pageItems.forEach((product) => {
    container.appendChild(createProductCard(product));
  });

  // Update showing count
  const showingEl = document.getElementById("showingCount");
  if (showingEl) {
    const end = Math.min(start + showCount, sorted.length);
    showingEl.textContent = `Showing ${sorted.length > 0 ? start + 1 : 0}–${end} of ${sorted.length} results`;
  }

  // Render pagination
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("shopPagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className =
      i === shopState.currentPage
        ? "rounded bg-[#B88E2F] px-5 py-2 text-sm text-white cursor-pointer"
        : "rounded bg-[#F9F1E7] px-5 py-2 text-sm text-[#333333] hover:bg-[#e8dccc] cursor-pointer";
    btn.addEventListener("click", () => {
      shopState.currentPage = i;
      renderShopProducts();
      window.scrollTo({ top: document.getElementById("shopProducts").offsetTop - 150, behavior: "smooth" });
    });
    pagination.appendChild(btn);
  }

  // Next button
  if (shopState.currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.className =
      "rounded bg-[#F9F1E7] px-7 py-2 text-sm text-[#333333] hover:bg-[#e8dccc] cursor-pointer";
    nextBtn.addEventListener("click", () => {
      shopState.currentPage++;
      renderShopProducts();
      window.scrollTo({ top: document.getElementById("shopProducts").offsetTop - 150, behavior: "smooth" });
    });
    pagination.appendChild(nextBtn);
  }
}

// ===== INIT SHOP PAGE =====
document.addEventListener("DOMContentLoaded", function () {
  const shopContainer = document.getElementById("shopProducts");
  if (!shopContainer) return;

  renderShopProducts();

  // Sort change
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      shopState.currentPage = 1;
      renderShopProducts();
    });
  }

  // Show count change
  const showSelect = document.getElementById("showSelect");
  if (showSelect) {
    showSelect.addEventListener("change", () => {
      shopState.currentPage = 1;
      renderShopProducts();
    });
  }
});


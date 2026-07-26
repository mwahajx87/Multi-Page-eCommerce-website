// ===== PRODUCT COMPARISON DYNAMIC RENDERER =====

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderComparePage();

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

  // Add product select change event
  const addSelect = document.getElementById("addProductSelect");
  if (addSelect) {
    addSelect.addEventListener("change", function () {
      const id = parseInt(this.value);
      if (id) {
        const result = addToCompare(id);
        if (result.success) {
          showToast("Product added to compare!");
          renderComparePage();
        } else {
          showToast(result.message);
        }
        this.value = "";
      }
    });
  }
});

// ===== RENDER COMPARE PAGE =====
function renderComparePage() {
  renderCompareProducts();
  renderCompareTable();
  populateAddProductSelect();
}

// ===== RENDER PRODUCT CARDS =====
function renderCompareProducts() {
  const grid = document.getElementById("compareProductsGrid");
  if (!grid) return;

  const compareIds = getCompare();
  const products = getProducts();
  const compareProducts = compareIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  // Keep the first column (Go to Product) and last column (Add A Product)
  const firstCol = grid.children[0];
  const lastCol = grid.children[grid.children.length - 1];

  // Clear middle columns
  while (grid.children.length > 1) {
    grid.removeChild(grid.children[1]);
  }

  // Remove last if it's still there (we'll re-add it)
  // Actually, keep the structure: [firstCol, ...productCols, lastCol]
  // Let's just clear everything and rebuild
  grid.innerHTML = "";

  // Rebuild: first col
  grid.appendChild(firstCol.cloneNode(true));

  // Product columns
  compareProducts.forEach((product, index) => {
    const stars = getStarRating(product.rating);
    const col = document.createElement("div");
    col.className = "flex flex-col items-center";
    col.innerHTML = `
      <div class="relative w-full">
        <div class="w-full overflow-hidden rounded-lg bg-[#F9F1E7]">
          <img class="h-full w-full object-cover" src="${product.image}" alt="${product.name}" />
        </div>
        <button class="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white shadow flex items-center justify-center text-[#999999] hover:text-red-500 remove-compare-btn" data-id="${product.id}">
          <i class="ri-close-line text-lg"></i>
        </button>
      </div>
      <h3 class="mt-4 text-xl font-bold text-[#333333]">${product.name}</h3>
      <p class="mt-2 text-lg font-bold text-[#B88E2F]">${formatPrice(product.price)}</p>
      <div class="mt-2 flex items-center gap-2">
        <div class="flex items-center gap-1 text-[#FFC700]">${stars}</div>
        <span class="text-xs text-[#999999]">|</span>
        <span class="text-xs text-[#999999]">${product.reviews} Reviews</span>
      </div>
    `;
    grid.appendChild(col);

    // Attach remove event
    const removeBtn = col.querySelector(".remove-compare-btn");
    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        const id = parseInt(removeBtn.dataset.id);
        removeFromCompare(id);
        showToast("Product removed from compare");
        renderComparePage();
      });
    }
  });

  // Last col (Add A Product)
  grid.appendChild(lastCol.cloneNode(true));

  // Re-attach the add product select event (since clone doesn't copy events)
  const newAddSelect = grid.querySelector("#addProductSelect");
  if (newAddSelect) {
    newAddSelect.addEventListener("change", function () {
      const id = parseInt(this.value);
      if (id) {
        const result = addToCompare(id);
        if (result.success) {
          showToast("Product added to compare!");
          renderComparePage();
        } else {
          showToast(result.message);
        }
        this.value = "";
      }
    });
    populateAddProductSelectForElement(newAddSelect);
  }
}

// ===== RENDER COMPARISON TABLE =====
function renderCompareTable() {
  const container = document.getElementById("compareTableContainer");
  if (!container) return;

  const compareIds = getCompare();
  const products = getProducts();
  const compareProducts = compareIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  if (compareProducts.length === 0) {
    container.innerHTML =
      '<p class="text-center text-[#999999] py-10">Add products to compare their specifications.</p>';
    return;
  }

  // Define all spec fields to show in the table
  const specGroups = [
    {
      title: "General",
      fields: [
        { key: "salesPackage", label: "Sales Package" },
        { key: "modelNumber", label: "Model Number" },
        { key: "secondaryMaterial", label: "Secondary Material" },
        { key: "configuration", label: "Configuration" },
        { key: "upholsteryMaterial", label: "Upholstery Material" },
        { key: "upholsteryColor", label: "Upholstery Color" },
      ],
    },
    {
      title: "Product",
      fields: [
        { key: "fillingMaterial", label: "Filling Material" },
        { key: "finishType", label: "Finish Type" },
        { key: "adjustableHeadrest", label: "Adjustable Headrest" },
        { key: "maxLoadCapacity", label: "Maximum Load Capacity" },
        { key: "origin", label: "Origin of Manufacture" },
      ],
    },
    {
      title: "Dimensions",
      fields: [
        { key: "width", label: "Width" },
        { key: "height", label: "Height" },
        { key: "depth", label: "Depth" },
        { key: "weight", label: "Weight" },
        { key: "seatHeight", label: "Seat Height" },
        { key: "legHeight", label: "Leg Height" },
      ],
    },
    {
      title: "Warranty",
      fields: [
        { key: "warranty", label: "Warranty Summary" },
        {
          key: "warrantyService",
          label: "Warranty Service Type",
          isEmail: true,
        },
        { key: "warrantyCovered", label: "Covered in Warranty" },
        { key: "warrantyNotCovered", label: "Not Covered in Warranty" },
        { key: "domesticWarranty", label: "Domestic Warranty" },
      ],
    },
  ];

  let tableHtml = `<table class="w-full min-w-[700px] border-collapse text-left">`;

  specGroups.forEach((group) => {
    tableHtml += `
      <thead>
        <tr>
          <th class="w-1/4 py-4 pr-6 text-lg font-bold text-[#333333]">${group.title}</th>
          ${compareProducts
            .map(
              () =>
                `<th class="w-${Math.floor(75 / compareProducts.length)}% py-4 px-6"></th>`
            )
            .join("")}
        </tr>
      </thead>
      <tbody>
    `;

    group.fields.forEach((field) => {
      tableHtml += `<tr>
        <td class="py-4 pr-6 text-sm text-[#777777]">${field.label}</td>
        ${compareProducts
          .map((p) => {
            const specs = p.specs || {};
            let val = specs[field.key] || "-";
            if (field.isEmail && val !== "-") {
              val = `<a href="mailto:${val}" class="text-[#B88E2F] underline">${val}</a>`;
            }
            return `<td class="py-4 px-6 text-sm text-[#333333]">${val}</td>`;
          })
          .join("")}
      </tr>`;
    });

    // Add "Add To Cart" buttons for last group
    if (group.title === "Warranty") {
      tableHtml += `<tr>
        <td class="py-4 pr-6 text-sm text-[#777777]"></td>
        ${compareProducts
          .map(
            (p) =>
              `<td class="py-4 px-6 text-sm text-[#333333]"><button class="compare-add-cart rounded-lg bg-[#B88E2F] px-10 py-3 text-sm font-bold text-white transition-colors hover:bg-[#a07a28]" data-id="${p.id}">Add To Cart</button></td>`
          )
          .join("")}
      </tr>`;
    }

    tableHtml += `</tbody>`;
  });

  tableHtml += `</table>`;
  container.innerHTML = tableHtml;

  // Attach add-to-cart events
  container.querySelectorAll(".compare-add-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      showToast("Product added to cart!");
    });
  });
}

// ===== POPULATE ADD PRODUCT SELECT =====
function populateAddProductSelect() {
  const select = document.getElementById("addProductSelect");
  if (select) populateAddProductSelectForElement(select);
}

function populateAddProductSelectForElement(select) {
  const products = getProducts();
  const compareIds = getCompare();
  // Keep only the first option (Choose a Product)
  select.innerHTML = '<option value="">Choose a Product</option>';
  products.forEach((p) => {
    if (!compareIds.includes(p.id)) {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.name;
      select.appendChild(opt);
    }
  });
}

// ===== STAR RATING HELPER =====
function getStarRating(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="ri-star-fill text-sm"></i>';
  if (half) html += '<i class="ri-star-half-fill text-sm"></i>';
  for (let i = 0; i < empty; i++) html += '<i class="ri-star-line text-sm"></i>';
  return html;
}


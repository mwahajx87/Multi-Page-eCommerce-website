document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderComparePage();

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

function renderComparePage() {
  renderCompareProducts();
  renderCompareTable();
  populateAddProductSelect();
}

function renderCompareProducts() {
  const grid = document.getElementById("compareProductsGrid");
  if (!grid) return;

  const compareIds = getCompare();
  const products = getProducts();
  const compareProducts = compareIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const firstCol = grid.children[0];
  const lastCol = grid.children[grid.children.length - 1];

  while (grid.children.length > 1) {
    grid.removeChild(grid.children[1]);
  }

  grid.innerHTML = "";

  grid.appendChild(firstCol.cloneNode(true));

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

  grid.appendChild(lastCol.cloneNode(true));

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
                `<th class="w-${Math.floor(75 / compareProducts.length)}% py-4 px-6"></th>`,
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

    if (group.title === "Warranty") {
      tableHtml += `<tr>
        <td class="py-4 pr-6 text-sm text-[#777777]"></td>
        ${compareProducts
          .map(
            (p) =>
              `<td class="py-4 px-6 text-sm text-[#333333]"><button class="compare-add-cart rounded-lg bg-[#B88E2F] px-10 py-3 text-sm font-bold text-white transition-colors hover:bg-[#a07a28]" data-id="${p.id}">Add To Cart</button></td>`,
          )
          .join("")}
      </tr>`;
    }

    tableHtml += `</tbody>`;
  });

  tableHtml += `</table>`;
  container.innerHTML = tableHtml;

  container.querySelectorAll(".compare-add-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      showToast("Product added to cart!");
    });
  });
}

function populateAddProductSelect() {
  const select = document.getElementById("addProductSelect");
  if (select) populateAddProductSelectForElement(select);
}

function populateAddProductSelectForElement(select) {
  const products = getProducts();
  const compareIds = getCompare();
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

function getStarRating(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="ri-star-fill text-sm"></i>';
  if (half) html += '<i class="ri-star-half-fill text-sm"></i>';
  for (let i = 0; i < empty; i++)
    html += '<i class="ri-star-line text-sm"></i>';
  return html;
}

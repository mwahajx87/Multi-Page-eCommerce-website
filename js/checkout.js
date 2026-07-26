// ===== CHECKOUT DYNAMIC RENDERER =====

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderCheckoutOrderSummary();
  setupCheckoutForm();

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

// ===== RENDER ORDER SUMMARY =====
function renderCheckoutOrderSummary() {
  const itemsContainer = document.getElementById("checkoutOrderItems");
  const totalsContainer = document.getElementById("checkoutTotals");
  if (!itemsContainer || !totalsContainer) return;

  const cart = getCart();
  const products = getProducts();

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm sm:text-base font-semibold text-[#333333]">Product</span>
        <span class="text-sm sm:text-base font-semibold text-[#333333]">Subtotal</span>
      </div>
      <p class="text-sm text-[#999999] py-4 text-center">Your cart is empty</p>
    `;
    totalsContainer.innerHTML = `
      <div class="flex justify-between items-center mb-3">
        <span class="text-sm text-[#666666]">Subtotal</span>
        <span class="text-sm text-[#666666]">Rp 0</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-sm sm:text-base text-[#333333]">Total</span>
        <span class="text-base sm:text-lg font-bold text-[#B88E2F]">Rp 0</span>
      </div>
    `;
    return;
  }

  // Keep the header row
  let itemsHtml = `
    <div class="flex justify-between items-center mb-4">
      <span class="text-sm sm:text-base font-semibold text-[#333333]">Product</span>
      <span class="text-sm sm:text-base font-semibold text-[#333333]">Subtotal</span>
    </div>
  `;

  let subtotal = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      const lineTotal = product.price * item.quantity;
      subtotal += lineTotal;
      itemsHtml += `
        <div class="flex justify-between items-center py-2">
          <span class="text-sm text-[#333333]">${product.name} <span class="text-[#999999]">x ${item.quantity}</span></span>
          <span class="text-sm text-[#666666]">${formatPrice(lineTotal)}</span>
        </div>
      `;
    }
  });

  itemsContainer.innerHTML = itemsHtml;

  const total = subtotal;
  totalsContainer.innerHTML = `
    <div class="flex justify-between items-center mb-3">
      <span class="text-sm text-[#666666]">Subtotal</span>
      <span class="text-sm text-[#666666]">${formatPrice(subtotal)}</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-sm sm:text-base text-[#333333]">Total</span>
      <span class="text-base sm:text-lg font-bold text-[#B88E2F]">${formatPrice(total)}</span>
    </div>
  `;
}

// ===== SETUP CHECKOUT FORM =====
function setupCheckoutForm() {
  const placeOrderBtn = document.querySelector(".place-order-btn");
  // The button doesn't have a specific class - use the submit button
  const form = document.querySelector("form");
  const submitBtn = document.querySelector('button[type="submit"]');

  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      placeOrder();
    });
  }
}

// ===== PLACE ORDER =====
function placeOrder() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  // Gather form data
  const formData = {
    firstName: document.querySelector('input[type="text"]')?.value || "",
    lastName:
      document.querySelectorAll('input[type="text"]')[1]?.value || "",
    companyName:
      document.querySelectorAll('input[type="text"]')[2]?.value || "",
    country: document.querySelector("select")?.value || "",
    street: document.querySelectorAll('input[type="text"]')[3]?.value || "",
    city: document.querySelectorAll('input[type="text"]')[4]?.value || "",
    province: document.querySelectorAll("select")[1]?.value || "",
    zip: document.querySelectorAll('input[type="text"]')[5]?.value || "",
    phone: document.querySelectorAll('input[type="text"]')[6]?.value || "",
    email: document.querySelector('input[type="email"]')?.value || "",
    additionalInfo: document.querySelector("textarea")?.value || "",
    payment: document.querySelector('input[name="payment"]:checked')?.value || "bank",
  };

  // Create order
  const orders = getOrders();
  const order = {
    id: Date.now(),
    orderId: "ORD-" + Date.now().toString(36).toUpperCase(),
    date: new Date().toISOString(),
    items: JSON.parse(JSON.stringify(cart)),
    billing: formData,
    total: getCartTotal(),
    status: "Pending",
  };

  orders.push(order);
  saveOrders(orders);
  clearCart();

  showToast(`Order placed! ID: ${order.orderId}`);
  renderCheckoutOrderSummary();

  // Reset form
  document.querySelectorAll("input, textarea, select").forEach((el) => {
    if (el.type !== "radio") el.value = "";
  });
}


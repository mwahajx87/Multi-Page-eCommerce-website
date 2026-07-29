document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderCartPage();
});

function renderCartPage() {
  renderCartItems();
  renderCartTotals();
}

function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  const cart = getCart();
  const products = getProducts();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <i class="ri-shopping-cart-line text-6xl text-[#cccccc]"></i>
        <p class="mt-4 text-lg text-[#999999]">Your cart is empty</p>
        <a href="./shop.html" class="mt-4 inline-block bg-[#B88E2F] text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#a07a28]">
          Shop Now
        </a>
      </div>
    `;
    return;
  }

  let html = "";
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;

    const lineTotal = product.price * item.quantity;
    html += `
      <div class="cart-item flex flex-col md:flex-row items-start md:items-center px-4 sm:px-6 py-6 gap-4 md:gap-0 border-b border-[#eeeeee]">
        <div class="flex w-full md:w-[40%] items-center gap-4">
          <div class="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#F9F1E7]">
            <img class="h-full w-full object-cover" src="${product.image}" alt="${product.name}" />
          </div>
          <span class="text-base text-[#898989]">${product.name}</span>
        </div>
        <div class="flex md:block w-full md:w-[20%] items-center justify-between md:text-center">
          <span class="md:hidden text-sm text-[#333333] font-medium">Price:</span>
          <span class="text-base text-[#898989]">${formatPrice(product.price)}</span>
        </div>
        <div class="flex md:block w-full md:w-[20%] items-center justify-between md:text-center">
          <span class="md:hidden text-sm text-[#333333] font-medium">Qty:</span>
          <input type="number" value="${item.quantity}" min="1"
            class="cart-qty-input w-14 rounded border border-[#cccccc] px-3 py-1.5 text-center text-base text-[#333333] outline-none"
            data-id="${item.productId}" />
        </div>
        <div class="flex w-full md:w-[20%] items-center justify-between md:justify-center gap-4">
          <span class="md:hidden text-sm text-[#333333] font-medium">Subtotal:</span>
          <span class="cart-line-total text-base text-[#333333]" data-id="${item.productId}">${formatPrice(lineTotal)}</span>
          <button class="cart-remove-btn text-[#B88E2F] hover:text-red-500" data-id="${item.productId}">
            <i class="ri-delete-bin-line text-xl"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".cart-qty-input").forEach((input) => {
    input.addEventListener("change", function () {
      const id = parseInt(this.dataset.id);
      const qty = parseInt(this.value) || 1;
      if (qty < 1) {
        removeFromCart(id);
      } else {
        updateCartQuantity(id, qty);
      }
      renderCartPage();
    });
  });

  container.querySelectorAll(".cart-remove-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.dataset.id);
      removeFromCart(id);
      showToast("Item removed from cart");
      renderCartPage();
    });
  });
}

function renderCartTotals() {
  const container = document.getElementById("cartTotalsContent");
  if (!container) return;

  const cart = getCart();
  const products = getProducts();
  let subtotal = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  });

  const total = subtotal;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-base text-[#333333]">Subtotal</span>
        <span class="text-base text-[#898989]">${formatPrice(0)}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-base text-[#333333]">Total</span>
        <span class="text-xl font-bold text-[#B88E2F]">${formatPrice(0)}</span>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="text-base text-[#333333]">Subtotal</span>
      <span class="text-base text-[#898989]">${formatPrice(subtotal)}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-base text-[#333333]">Total</span>
      <span class="text-xl font-bold text-[#B88E2F]">${formatPrice(total)}</span>
    </div>
  `;
}

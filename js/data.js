const FURNITURE_DATA = {
  products: [
    {
      id: 1,
      name: "Syltherine",
      category: "Dining",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      image: "./images/shop/image1.png",
      hoverImage: "./images/shop/image1.png",
      sku: "SS001",
      tags: ["Chair", "Cafe", "Dining"],
      rating: 4.5,
      reviews: 120,
      badge: "discount",
      badgeColor: "#E97171",
      specs: {
        salesPackage: "1 Chair",
        modelNumber: "SYLTH001",
        secondaryMaterial: "Plywood",
        configuration: "Standard",
        upholsteryMaterial: "Fabric",
        upholsteryColor: "Black and White",
        fillingMaterial: "Foam",
        finishType: "Matte",
        adjustableHeadrest: "No",
        maxLoadCapacity: "120 KG",
        origin: "India",
        width: "45 cm",
        height: "85 cm",
        depth: "50 cm",
        weight: "8 KG",
        seatHeight: "45 cm",
        legHeight: "15 cm",
        warranty: "6 Months Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "6 Months",
      },
    },
    {
      id: 2,
      name: "Leviosa",
      category: "Living",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: null,
      discount: 0,
      image: "./images/shop/image2.png",
      hoverImage: "./images/shop/image2.png",
      sku: "LEV002",
      tags: ["Chair", "Living"],
      rating: 4,
      reviews: 85,
      badge: null,
      badgeColor: null,
      specs: {
        salesPackage: "1 Chair",
        modelNumber: "LEV002",
        secondaryMaterial: "Metal",
        configuration: "Standard",
        upholsteryMaterial: "Fabric",
        upholsteryColor: "Beige and Brown",
        fillingMaterial: "Foam",
        finishType: "Satin",
        adjustableHeadrest: "No",
        maxLoadCapacity: "110 KG",
        origin: "India",
        width: "48 cm",
        height: "82 cm",
        depth: "52 cm",
        weight: "7 KG",
        seatHeight: "44 cm",
        legHeight: "14 cm",
        warranty: "6 Months Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "6 Months",
      },
    },
    {
      id: 3,
      name: "Lolito",
      category: "Living",
      description: "Luxury big sofa",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      image: "./images/shop/image3.png",
      hoverImage: "./images/shop/image3.png",
      sku: "LOL003",
      tags: ["Sofa", "Luxury", "Living"],
      rating: 4.8,
      reviews: 200,
      badge: "discount",
      badgeColor: "#E97171",
      specs: {
        salesPackage: "1 Three Seater Sofa",
        modelNumber: "LOL003",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Premium Fabric",
        upholsteryColor: "Grey and Cream",
        fillingMaterial: "High Density Foam",
        finishType: "Matte",
        adjustableHeadrest: "Yes",
        maxLoadCapacity: "350 KG",
        origin: "India",
        width: "210 cm",
        height: "90 cm",
        depth: "85 cm",
        weight: "55 KG",
        seatHeight: "48 cm",
        legHeight: "6 cm",
        warranty: "2 Year Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "2 Year",
      },
    },
    {
      id: 4,
      name: "Respira",
      category: "Dining",
      description: "Outdoor bar table and stool",
      price: 500000,
      originalPrice: null,
      discount: 0,
      image: "./images/shop/image4.png",
      hoverImage: "./images/shop/image4.png",
      sku: "RES004",
      tags: ["Table", "Outdoor", "Dining"],
      rating: 4.2,
      reviews: 65,
      badge: "new",
      badgeColor: "#2EC1AC",
      specs: {
        salesPackage: "1 Bar Table, 2 Stools",
        modelNumber: "RES004",
        secondaryMaterial: "Aluminium",
        configuration: "Standard",
        upholsteryMaterial: "N/A",
        upholsteryColor: "Natural Silver",
        fillingMaterial: "N/A",
        finishType: "Powder Coated",
        adjustableHeadrest: "No",
        maxLoadCapacity: "150 KG",
        origin: "India",
        width: "110 cm",
        height: "105 cm",
        depth: "60 cm",
        weight: "18 KG",
        seatHeight: "75 cm",
        legHeight: "10 cm",
        warranty: "1 Year Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "1 Year",
      },
    },
    {
      id: 5,
      name: "Grifo",
      category: "Bedroom",
      description: "Night lamp",
      price: 1500000,
      originalPrice: null,
      discount: 0,
      image: "./images/shop/image6.png",
      hoverImage: "./images/shop/image6.png",
      sku: "GRI005",
      tags: ["Lamp", "Bedroom"],
      rating: 4.1,
      reviews: 42,
      badge: null,
      badgeColor: null,
      specs: {
        salesPackage: "1 Table Lamp",
        modelNumber: "GRI005",
        secondaryMaterial: "Steel",
        configuration: "Standard",
        upholsteryMaterial: "N/A",
        upholsteryColor: "Matte Black",
        fillingMaterial: "N/A",
        finishType: "Matte",
        adjustableHeadrest: "No",
        maxLoadCapacity: "5 KG",
        origin: "India",
        width: "20 cm",
        height: "45 cm",
        depth: "20 cm",
        weight: "1.5 KG",
        seatHeight: "N/A",
        legHeight: "N/A",
        warranty: "6 Months Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "6 Months",
      },
    },
    {
      id: 6,
      name: "Muggo",
      category: "Dining",
      description: "Small mug",
      price: 150000,
      originalPrice: null,
      discount: 0,
      image: "./images/shop/image7.png",
      hoverImage: "./images/shop/image7.png",
      sku: "MUG006",
      tags: ["Mug", "Dining", "Kitchen"],
      rating: 4.6,
      reviews: 310,
      badge: "new",
      badgeColor: "#2EC1AC",
      specs: {
        salesPackage: "1 Ceramic Mug",
        modelNumber: "MUG006",
        secondaryMaterial: "N/A",
        configuration: "Standard",
        upholsteryMaterial: "N/A",
        upholsteryColor: "White",
        fillingMaterial: "N/A",
        finishType: "Glossy",
        adjustableHeadrest: "No",
        maxLoadCapacity: "1 KG",
        origin: "India",
        width: "10 cm",
        height: "12 cm",
        depth: "10 cm",
        weight: "0.3 KG",
        seatHeight: "N/A",
        legHeight: "N/A",
        warranty: "No Warranty",
        warrantyService: "N/A",
        warrantyCovered: "N/A",
        warrantyNotCovered: "N/A",
        domesticWarranty: "No Warranty",
      },
    },
    {
      id: 7,
      name: "Pingky",
      category: "Bedroom",
      description: "Cute bed set",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      image: "./images/shop/image8.png",
      hoverImage: "./images/shop/image8.png",
      sku: "PIN007",
      tags: ["Bed", "Bedroom", "Set"],
      rating: 4.3,
      reviews: 150,
      badge: "discount",
      badgeColor: "#E97171",
      specs: {
        salesPackage: "1 Bed Frame, 1 Mattress, 2 Pillows",
        modelNumber: "PIN007",
        secondaryMaterial: "Plywood",
        configuration: "Standard",
        upholsteryMaterial: "Fabric",
        upholsteryColor: "Pink and White",
        fillingMaterial: "Memory Foam",
        finishType: "Matte",
        adjustableHeadrest: "No",
        maxLoadCapacity: "250 KG",
        origin: "India",
        width: "150 cm",
        height: "90 cm",
        depth: "200 cm",
        weight: "45 KG",
        seatHeight: "N/A",
        legHeight: "8 cm",
        warranty: "1 Year Manufacturing Warranty",
        warrantyService: "support@furniro.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "1 Year",
      },
    },
    {
      id: 8,
      name: "Potty",
      category: "Living",
      description: "Minimalist flower pot",
      price: 500000,
      originalPrice: null,
      discount: 0,
      image: "./images/shop/image9.png",
      hoverImage: "./images/shop/image9.png",
      sku: "POT008",
      tags: ["Pot", "Living", "Decor"],
      rating: 4,
      reviews: 78,
      badge: "new",
      badgeColor: "#2EC1AC",
      specs: {
        salesPackage: "1 Flower Pot",
        modelNumber: "POT008",
        secondaryMaterial: "N/A",
        configuration: "Standard",
        upholsteryMaterial: "N/A",
        upholsteryColor: "Terracotta",
        fillingMaterial: "N/A",
        finishType: "Matte",
        adjustableHeadrest: "No",
        maxLoadCapacity: "10 KG",
        origin: "India",
        width: "25 cm",
        height: "30 cm",
        depth: "25 cm",
        weight: "2 KG",
        seatHeight: "N/A",
        legHeight: "N/A",
        warranty: "No Warranty",
        warrantyService: "N/A",
        warrantyCovered: "N/A",
        warrantyNotCovered: "N/A",
        domesticWarranty: "No Warranty",
      },
    },
    {
      id: 9,
      name: "Asgaard Sofa",
      category: "Living",
      description: "Premium comfort sofa with elegant design",
      price: 250000,
      originalPrice: null,
      discount: 0,
      image: "./images/product/asgaardSofa.png",
      hoverImage: "./images/product/cloudSofa.png",
      sku: "ASG009",
      tags: ["Sofa", "Living", "Premium"],
      rating: 5,
      reviews: 204,
      badge: null,
      badgeColor: null,
      specs: {
        salesPackage: "1 Sectional Sofa",
        modelNumber: "TFCBUGR656H5",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey and Lion",
        fillingMaterial: "Foam",
        finishType: "Bright Grey and Lion",
        adjustableHeadrest: "No",
        maxLoadCapacity: "280 KG",
        origin: "India",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.64 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
        warranty: "1 Year Manufacturing Warranty",
        warrantyService: "operations@treivfurniture.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "1 Year",
      },
    },
    {
      id: 10,
      name: "Outdoor Sofa Set",
      category: "Living",
      description: "Durable outdoor sofa set for garden",
      price: 224000,
      originalPrice: null,
      discount: 0,
      image: "./images/product/outdoorSofa.png",
      hoverImage: "./images/product/outdoorSofa.png",
      sku: "ODS010",
      tags: ["Sofa", "Outdoor", "Garden"],
      rating: 4.5,
      reviews: 145,
      badge: null,
      badgeColor: null,
      specs: {
        salesPackage: "1 Three Seater, 2 Single Seater",
        modelNumber: "DTUBUGR6368",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey and Lion",
        fillingMaterial: "Matte",
        finishType: "Bright Grey and Lion",
        adjustableHeadrest: "Yes",
        maxLoadCapacity: "300 KG",
        origin: "India",
        width: "265.32 cm",
        height: "80 cm",
        depth: "170 cm",
        weight: "65 KG",
        seatHeight: "45 cm",
        legHeight: "5 cm",
        warranty: "1.2 Year Manufacturing Warranty",
        warrantyService: "operations@treivfurniture.com",
        warrantyCovered: "Manufacturing Defects",
        warrantyNotCovered: "Damage due to misuse or natural wear and tear",
        domesticWarranty: "1.2 Year",
      },
    },
  ],

  blogPosts: [
    {
      id: 1,
      title: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/blog/Rectangle1.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Design",
      slug: "going-all-in-millennial-design",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/blog/Rectangle2.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Interior",
      slug: "exploring-new-ways-decorating",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/blog/Rectangle3.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Crafts",
      slug: "handmade-pieces-took-time",
    },
  ],

  blogCategories: [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 5 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 3 },
    { name: "Wood", count: 6 },
  ],

  recentPosts: [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "./images/blog/Rectangle4.png",
      date: "14 Aug 2022",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      image: "./images/blog/Rectangle5.png",
      date: "14 Aug 2022",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      image: "./images/blog/Rectangle6.png",
      date: "14 Aug 2022",
    },
    {
      id: 4,
      title: "Modern home in Milan",
      image: "./images/blog/Rectangle7.png",
      date: "14 Aug 2022",
    },
    {
      id: 5,
      title: "Colorful office redesign",
      image: "./images/blog/Rectangle8.png",
      date: "14 Aug 2022",
    },
  ],
};

function initDataStore() {
  localStorage.setItem(
    "furniro_products",
    JSON.stringify(FURNITURE_DATA.products),
  );
  if (!localStorage.getItem("furniro_blogPosts")) {
    localStorage.setItem(
      "furniro_blogPosts",
      JSON.stringify(FURNITURE_DATA.blogPosts),
    );
  }
  if (!localStorage.getItem("furniro_blogCategories")) {
    localStorage.setItem(
      "furniro_blogCategories",
      JSON.stringify(FURNITURE_DATA.blogCategories),
    );
  }
  if (!localStorage.getItem("furniro_recentPosts")) {
    localStorage.setItem(
      "furniro_recentPosts",
      JSON.stringify(FURNITURE_DATA.recentPosts),
    );
  }
  if (!localStorage.getItem("furniro_cart")) {
    localStorage.setItem("furniro_cart", JSON.stringify([]));
  }
  if (!localStorage.getItem("furniro_compare")) {
    localStorage.setItem("furniro_compare", JSON.stringify([]));
  }
  if (!localStorage.getItem("furniro_wishlist")) {
    localStorage.setItem("furniro_wishlist", JSON.stringify([]));
  }
  if (!localStorage.getItem("furniro_orders")) {
    localStorage.setItem("furniro_orders", JSON.stringify([]));
  }
}

function getProducts() {
  return JSON.parse(localStorage.getItem("furniro_products")) || [];
}

function getProductById(id) {
  const products = getProducts();
  return products.find((p) => p.id === id);
}

function getBlogPosts() {
  return JSON.parse(localStorage.getItem("furniro_blogPosts")) || [];
}

function getBlogCategories() {
  return JSON.parse(localStorage.getItem("furniro_blogCategories")) || [];
}

function getRecentPosts() {
  return JSON.parse(localStorage.getItem("furniro_recentPosts")) || [];
}

function getCart() {
  return JSON.parse(localStorage.getItem("furniro_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("furniro_cart", JSON.stringify(cart));
}

function getCompare() {
  return JSON.parse(localStorage.getItem("furniro_compare")) || [];
}

function saveCompare(compare) {
  localStorage.setItem("furniro_compare", JSON.stringify(compare));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("furniro_wishlist")) || [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("furniro_wishlist", JSON.stringify(wishlist));
}

function getOrders() {
  return JSON.parse(localStorage.getItem("furniro_orders")) || [];
}

function saveOrders(orders) {
  localStorage.setItem("furniro_orders", JSON.stringify(orders));
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart(cart);
  updateCartBadge();
  return cart;
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.productId !== productId);
  saveCart(cart);
  updateCartBadge();
  return cart;
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find((i) => i.productId === productId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }
  saveCart(cart);
  updateCartBadge();
  return cart;
}

function clearCart() {
  saveCart([]);
  updateCartBadge();
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  const cart = getCart();
  const products = getProducts();
  let total = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      total += product.price * item.quantity;
    }
  });
  return total;
}

function addToCompare(productId) {
  const compare = getCompare();
  if (compare.length >= 2) {
    compare.shift();
  }
  if (!compare.includes(productId)) {
    compare.push(productId);
    saveCompare(compare);
  }
  return { success: true, compare };
}

function removeFromCompare(productId) {
  let compare = getCompare();
  compare = compare.filter((id) => id !== productId);
  saveCompare(compare);
  return compare;
}

function isInCompare(productId) {
  const compare = getCompare();
  return compare.includes(productId);
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  saveWishlist(wishlist);
  return wishlist;
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.includes(productId);
}

function updateCartBadge() {
  const count = getCartCount();
  const cartIcons = document.querySelectorAll(".ri-shopping-cart-2-line");
  cartIcons.forEach((icon) => {
    const parent = icon.parentElement;
    let badge = parent.querySelector(".cart-badge");
    if (count > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className =
          "cart-badge absolute -top-2 -right-2 bg-[#E97171] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold";
        icon.parentElement.style.position = "relative";
        icon.parentElement.appendChild(badge);
      }
      badge.textContent = count > 99 ? "99+" : count;
    } else {
      if (badge) badge.remove();
    }
  });
}

function renderCartDropdown() {
  const dropdown = document.getElementById("cartDropdown");
  if (!dropdown) return;

  const cart = getCart();
  const products = getProducts();
  let itemsHtml = "";
  let subtotal = 0;

  if (cart.length === 0) {
    itemsHtml = `
      <div class="px-4 py-8 text-center">
        <i class="ri-shopping-cart-line text-4xl text-[#cccccc]"></i>
        <p class="mt-2 text-sm text-[#999999]">Your cart is empty</p>
      </div>
    `;
  } else {
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return;
      subtotal += product.price * item.quantity;

      itemsHtml += `
        <div class="cart-dropdown-item flex items-center gap-3 px-4 py-3 border-b border-[#eeeeee]">
          <a href="./product.html?id=${product.id}" class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-[#F9F1E7]">
            <img class="h-full w-full object-cover" src="${product.image}" alt="${product.name}" />
          </a>
          <div class="flex-1 min-w-0">
            <a href="./product.html?id=${product.id}" class="text-sm font-semibold text-[#333333] truncate block hover:text-[#B88E2F]">${product.name}</a>
            <p class="text-xs text-[#898989] mt-1">
              <span class="text-sm">${item.quantity}</span> x <span class="text-sm text-[#B88E2F] font-medium">${formatPrice(product.price)}</span>
            </p>
          </div>
          <button class="cart-dropdown-remove text-[#999999] hover:text-red-500 text-lg flex-shrink-0 cursor-pointer" data-id="${item.productId}">
            <i class="ri-close-line"></i>
          </button>
        </div>
      `;
    });
  }

  dropdown.innerHTML = `
    <div class="w-[320px] bg-white shadow-lg border border-[#e0e0e0] rounded-lg">
      <div class="px-4 py-4 border-b border-[#eeeeee]">
        <a href="./cart.html" class="text-lg font-bold text-[#333333] hover:text-[#B88E2F]">Shopping Cart</a>
      </div>
      <div class="cart-dropdown-items max-h-[300px] overflow-y-auto">
        ${itemsHtml}
      </div>
      <div class="px-4 py-4 border-t border-[#eeeeee]">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-[#333333]">Subtotal</span>
          <span class="text-sm font-bold text-[#B88E2F]">${formatPrice(subtotal)}</span>
        </div>
        <div class="flex gap-2">
          <a href="./cart.html" class="flex-1 text-center rounded-full border border-[#333333] px-3 py-2 text-xs font-bold text-[#333333] hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] transition-colors">
            Cart
          </a>
          <a href="./checkout.html" class="flex-1 text-center rounded-full border border-[#333333] px-3 py-2 text-xs font-bold text-[#333333] hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] transition-colors">
            Checkout
          </a>
          <a href="./productComparison.html" class="flex-1 text-center rounded-full border border-[#333333] px-3 py-2 text-xs font-bold text-[#333333] hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] transition-colors">
            Comparison
          </a>
        </div>
      </div>
    </div>
  `;

  dropdown.querySelectorAll(".cart-dropdown-remove").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const id = parseInt(this.dataset.id);
      removeFromCart(id);
      renderCartDropdown();
      showToast("Item removed from cart");
    });
  });
}

function initCartDropdown() {
  const cartIcon = document.querySelector(".cart-icon-wrapper");
  const dropdown = document.getElementById("cartDropdown");
  if (!cartIcon || !dropdown) return;

  let overlay = document.getElementById("cartDropdownOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "cartDropdownOverlay";
    overlay.className = "fixed inset-0 bg-black/50 z-[99] hidden";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      document
        .querySelectorAll(".cart-dropdown")
        .forEach((d) => d.classList.add("hidden"));
      overlay.classList.add("hidden");
    });
  }

  function showDropdown() {
    renderCartDropdown();
    dropdown.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function hideDropdown() {
    dropdown.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  cartIcon.addEventListener("click", function (e) {
    if (dropdown.contains(e.target)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const isHidden = dropdown.classList.contains("hidden");
    document
      .querySelectorAll(".cart-dropdown")
      .forEach((d) => d.classList.add("hidden"));
    overlay.classList.add("hidden");
    if (isHidden) {
      showDropdown();
    } else {
      hideDropdown();
    }
  });

  dropdown.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (link) {
      hideDropdown();
    }
  });
}

function formatPrice(price) {
  if (!price) return "Rp 0";
  return "Rp " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;
  const badgeHtml =
    product.badge === "discount"
      ? `<span class="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E97171] text-sm font-medium text-white">-${discount}%</span>`
      : product.badge === "new"
        ? `<span class="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2EC1AC] text-sm font-medium text-white">New</span>`
        : "";

  const originalPriceHtml = product.originalPrice
    ? `<span class="text-sm text-[#B0B0B0] line-through">${formatPrice(product.originalPrice)}</span>`
    : "";

  const div = document.createElement("div");
  div.className = "relative overflow-hidden bg-[#F4F5F7] cursor-pointer";
  div.innerHTML = `
    <div class="relative group">
      <img class="w-full object-cover" src="${product.image}" alt="${product.name}" loading="lazy" />
      ${badgeHtml}
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button class="add-to-cart-btn mb-4 bg-white px-12 py-3 text-sm font-bold text-[#B88E4A] cursor-pointer" data-id="${product.id}">Add to cart</button>
        <div class="flex items-center gap-6 text-sm text-white">
          <span class="flex cursor-pointer items-center gap-1 hover:text-[#B88E4A] toggle-wishlist" data-id="${product.id}">
            <i class="ri-share-line"></i> Share
          </span>
          <span class="flex cursor-pointer items-center gap-1 hover:text-[#B88E4A] add-to-compare" data-id="${product.id}">
            <i class="ri-arrow-left-right-line"></i> Compare
          </span>
          <span class="flex cursor-pointer items-center gap-1 hover:text-[#B88E4A] toggle-wishlist" data-id="${product.id}">
            <i class="${isInWishlist(product.id) ? "ri-heart-fill text-red-500" : "ri-heart-line"}"></i> Like
          </span>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold text-[#3A3A3A]">${product.name}</h3>
      <p class="mt-1 text-sm text-[#898989]">${product.description}</p>
      <div class="mt-2 flex items-center gap-3">
        <span class="text-lg font-bold text-[#3A3A3A]">${formatPrice(product.price)}</span>
        ${originalPriceHtml}
      </div>
    </div>
  `;

  div.addEventListener("click", (e) => {
    if (
      e.target.closest(".add-to-cart-btn") ||
      e.target.closest(".add-to-compare") ||
      e.target.closest(".toggle-wishlist")
    ) {
      return;
    }
    window.location.href = `./product.html?id=${product.id}`;
  });

  setTimeout(() => {
    const addBtn = div.querySelector(".add-to-cart-btn");
    if (addBtn) {
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(addBtn.dataset.id);
        addToCart(id);
        showToast(`${product.name} added to cart!`);
      });
    }

    const compareBtns = div.querySelectorAll(".add-to-compare");
    compareBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const result = addToCompare(id);
        if (result.success) {
          showToast(`${product.name} added to compare!`);
          // Navigate to comparison page after short delay
          setTimeout(() => {
            window.location.href = "./productComparison.html";
          }, 500);
        } else {
          showToast(result.message);
        }
      });
    });

    const wishlistBtns = div.querySelectorAll(".toggle-wishlist");
    wishlistBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const wishlist = toggleWishlist(id);
        const icon = btn.querySelector("i");
        if (icon) {
          if (wishlist.includes(id)) {
            icon.className = "ri-heart-fill text-red-500";
          } else {
            icon.className = "ri-heart-line";
          }
        }
        const isLiked = wishlist.includes(id);
        showToast(
          isLiked
            ? `${product.name} added to wishlist!`
            : `${product.name} removed from wishlist!`,
        );
      });
    });
  }, 0);

  return div;
}

function showToast(message) {
  const existing = document.querySelector(".furniro-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className =
    "furniro-toast fixed bottom-6 right-6 bg-[#333333] text-white px-6 py-3 rounded-lg shadow-lg z-[9999] text-sm font-medium animate-fade-in";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeInUp 0.3s ease forwards;
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  initCartDropdown();
});

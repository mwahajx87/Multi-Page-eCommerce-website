const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
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

document.addEventListener("DOMContentLoaded", function () {
  initDataStore();
  updateCartBadge();
  renderBlog();
  renderCategories();
  renderRecentPosts();
});

let blogCurrentPage = 1;
const BLOG_PER_PAGE = 2;

function renderBlog() {
  const container = document.getElementById("blogPostsContainer");
  if (!container) return;

  const posts = getBlogPosts();
  const totalPages = Math.ceil(posts.length / BLOG_PER_PAGE);
  const start = (blogCurrentPage - 1) * BLOG_PER_PAGE;
  const end = start + BLOG_PER_PAGE;
  const pagePosts = posts.slice(start, end);

  let html = "";
  pagePosts.forEach((post) => {
    html += `
      <article>
        <img class="w-full rounded-lg object-cover" src="${post.image}" alt="${post.title}" loading="lazy" />
        <div class="mt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[#9F9F9F]">
          <span class="flex items-center gap-1"><i class="ri-user-3-line"></i> ${post.author}</span>
          <span class="flex items-center gap-1"><i class="ri-calendar-line"></i> ${post.date}</span>
          <span class="flex items-center gap-1"><i class="ri-price-tag-3-line"></i> ${post.category}</span>
        </div>
        <h2 class="mt-3 text-2xl sm:text-3xl font-bold text-[#333333]">${post.title}</h2>
        <p class="mt-3 text-base leading-7 text-[#9F9F9F]">${post.content.substring(0, 300)}...</p>
        <a href="#"
          class="mt-4 inline-block border-b-2 border-[#333333] pb-1 text-sm font-bold text-[#333333] hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors">Read more</a>
      </article>
    `;
  });

  let paginationHtml = "";
  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `<button class="rounded ${i === blogCurrentPage ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-[#333333]"} px-4 sm:px-5 py-2 text-sm blog-page-btn" data-page="${i}">${i}</button>`;
  }
  if (totalPages > 1) {
    paginationHtml += `<button class="rounded bg-[#F9F1E7] px-5 sm:px-7 py-2 text-sm text-[#333333] blog-page-btn" data-page="${blogCurrentPage + 1 > totalPages ? totalPages : blogCurrentPage + 1}">Next</button>`;
  }

  html += `<div class="flex flex-wrap justify-center gap-3 sm:gap-4">${paginationHtml}</div>`;
  container.innerHTML = html;

  document.querySelectorAll(".blog-page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = parseInt(btn.dataset.page);
      if (page >= 1 && page <= totalPages) {
        blogCurrentPage = page;
        renderBlog();
        window.scrollTo({ top: container.offsetTop - 100, behavior: "smooth" });
      }
    });
  });
}

function renderCategories() {
  const container = document.getElementById("blogCategories");
  if (!container) return;

  const categories = getBlogCategories();
  let html = "";
  categories.forEach((cat) => {
    html += `
      <li class="flex justify-between text-base text-[#333333]">
        <span class="hover:text-[#B88E2F] cursor-pointer">${cat.name}</span>
        <span class="text-[#9F9F9F]">${cat.count}</span>
      </li>
    `;
  });
  container.innerHTML = html;
}

function renderRecentPosts() {
  const container = document.getElementById("blogRecentPosts");
  if (!container) return;

  const posts = getRecentPosts();
  let html = "";
  posts.forEach((post) => {
    html += `
      <div class="flex gap-4">
        <img class="h-16 w-16 shrink-0 rounded object-cover" src="${post.image}" alt="${post.title}" loading="lazy" />
        <div>
          <h4 class="text-sm font-bold text-[#333333] hover:text-[#B88E2F] cursor-pointer">${post.title}</h4>
          <p class="mt-1 text-xs text-[#9F9F9F]">${post.date}</p>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

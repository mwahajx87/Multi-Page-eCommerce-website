# Furniro — Furniture E-Commerce Website

A responsive, multi-page furniture e-commerce front-end built with plain HTML, vanilla JavaScript, and Tailwind CSS. The project simulates a real online store — browsing, product details, cart, wishlist, product comparison, checkout, and a blog — with all data persisted client-side via `localStorage`.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Demo

https://mwahajx87.github.io/Multi-Page-eCommerce-website/

## Features

- **Dynamic product catalog** — products are rendered from a central data store, not hard-coded in HTML
- **Shop page** — sorting (price, name), pagination, and "items per page" control
- **Product detail page** — image gallery with thumbnails, quantity selector, specs table
- **Cart** — add/remove items, update quantity, live subtotal & total, persists across page reloads
- **Wishlist** — save products for later, empty-state UI
- **Product comparison** — compare up to multiple products side-by-side across specs (dimensions, materials, warranty, etc.)
- **Checkout** — order summary, billing form, and order placement that generates an order ID
- **Blog** — paginated posts, categories, and recent posts sidebar
- **Cart dropdown & badge** — live cart preview from the navbar, available on every page
- **Fully responsive** — mobile menu, adaptive grids/layouts across breakpoints
- **Toast notifications** — user feedback for cart/wishlist/compare actions

## Tech Stack

| Layer      | Technology                                             |
|------------|---------------------------------------------------------|
| Markup     | HTML5                                                    |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) (via CDN, `@tailwindcss/browser`) |
| Icons      | [Remix Icon](https://remixicon.com/)                     |
| Logic      | Vanilla JavaScript (no frameworks, no build step)        |
| Storage    | Browser `localStorage` (acts as a mock database)         |

No bundler, package manager, or build step is required — the site runs directly in the browser.

## Project Structure

```
furniro/
├── index.html                 # Home page
├── shop.html                  # Product listing page
├── product.html                # Single product detail page
├── productComparison.html      # Product comparison page
├── cart.html                  # Shopping cart page
├── checkout.html               # Checkout / billing page
├── wishlist.html               # Wishlist page
├── blog.html                  # Blog listing page
├── contact.html                # Contact form page
│
├── js/
│   ├── data.js                 # Product data + localStorage data layer (CRUD helpers)
│   ├── app.js                  # Shared logic: mobile menu, homepage product grid
│   ├── shop.js                 # Shop page: sorting, pagination
│   ├── productDetail.js        # Product detail page logic
│   ├── productComparison.js    # Comparison table logic
│   ├── cart.js                 # Cart rendering & totals
│   ├── checkout.js             # Order summary & order placement
│   ├── wishlist.js             # Wishlist rendering
│   └── blog.js                 # Blog posts, categories, pagination
│
└── images/                     # Product, homepage, and blog images
```

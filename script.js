const products = [
    { name: "Classic Tee", price: "$25", image: "images/shirt1.jpg" },
    { name: "Street Hoodie", price: "$40", image: "images/hoodie1.jpg" },
    { name: "Leather Jacket", price: "$60", image: "images/jacket1.jpg" },
    { name: "Caps", price: "$15", image: "images/cap1.jpg" },
  ];
  
  const productGrid = document.getElementById("productGrid");
  
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="cart-btn">Add to Cart</button>
    `;
    productGrid.appendChild(div);
  });
  // Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
}
// Shop Page Dynamic Loading
const shopProducts = [
    { name: "Classic Tee", price: "$25", category: "unisex", image: "images/shirt1.jpg" },
    { name: "Street Hoodie", price: "$40", category: "men", image: "images/hoodie1.jpg" },
    { name: "Leather Jacket", price: "$60", category: "unisex", image: "images/jacket1.jpg" },
    { name: "Caps", price: "$15", category: "women", image: "images/cap1.jpg" },
    { name: "Cargo Pants", price: "$38", category: "men", image: "images/pants1.jpg" },
    { name: "Crop Top", price: "$30", category: "women", image: "images/croptop1.jpg" }
  ];
  
  const shopGrid = document.getElementById("shopGrid");
  const categoryFilter = document.getElementById("categoryFilter");
  
  function displayProducts(filter = "all") {
    if (!shopGrid) return;
  
    shopGrid.innerHTML = "";
  
    const filtered = filter === "all"
      ? shopProducts
      : shopProducts.filter(p => p.category === filter);
  
    filtered.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      `;
      shopGrid.appendChild(div);
    });
  }
  
  if (shopGrid) {
    displayProducts();
  
    categoryFilter.addEventListener("change", (e) => {
      displayProducts(e.target.value);
    });
  }
  // Redirect "Shop Now" button to Shop Page
const shopNowBtn = document.getElementById('shopNowBtn');
if (shopNowBtn) {
  shopNowBtn.addEventListener('click', () => {
    window.location.href = 'shop.html';
  });
}
// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
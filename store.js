const products = [
  { id: 1, name: "Нан", price: 30, category: "Наубайхана", image: "https://glovo.dhmedia.io/image/menus-glovo/products/d869c8364b56322f1049f2f68eed171c8529eef6053e3a8cdfbe26e5ee104fac?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d" },
  { id: 2, name: "Сүт", price: 50, category: "Сүт өнімдері", image: "https://magnumopt.kz/upload/iblock/eb7/eb77224f5b4014842975d1742a71a21e.png" },
  { id: 3, name: "Ірімшік", price: 120, category: "Сүт өнімдері", image: "https://dobryanka-rus.ru/storage/goods/245165_K9LH3_300x300.jpg" },
  { id: 4, name: "Тауық еті", price: 200, category: "Ет", image: "https://vegetarianskie-recepty.ru/wp-content/uploads/tykvennyj-sup-pyure-s-kuricej-poshagovye-recepty-s-foto-na.jpg" },
  { id: 5, name: "Бауырсақ", price: 25, category: "Наубайхана", image: "https://avatars.mds.yandex.net/get-mpic/4413406/img_id4242252017850721245.jpeg/9hq" },
  { id: 6, name: "Йогурт", price: 60, category: "Сүт өнімдері", image: "https://vodovoz.ru/upload/iblock/bca/bca88ba8034ba1d27f8678cb8d60c44e.jpeg" }
];

let cart = [];

function renderCategoryFilter() {
  const categories = [...new Set(products.map(p => p.category))];
  const container = document.getElementById('category-filter');
  container.innerHTML = "";

  const allBtn = document.createElement('button');
  allBtn.textContent = "Барлығы";
  allBtn.onclick = () => renderProducts();
  container.appendChild(allBtn);

  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.onclick = () => renderProducts(category);
    container.appendChild(btn);
  });
}

function renderProducts(category = null) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = category ? products.filter(p => p.category === category) : products;

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Бағасы: ${product.price}₸</p>
      <button onclick="addToCart(${product.id})">Себетке қосу</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const count = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = total;
}

// Инициализация
renderCategoryFilter();
renderProducts();
// Себет пен өнімдер

let cart = [];

function addToCart(productName) {
  cart.push(productName);
  document.getElementById('cart-count').textContent = cart.length;

  console.log("Текущая корзина:", cart);

}
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
  
    if (!name || !email || !password || !confirmPassword) {
      message.textContent = "Пожалуйста, заполните все поля.";
      return;
    }
  
    if (password !== confirmPassword) {
      message.textContent = "Пароли не совпадают.";
      return;
    }
  
    message.style.color = "green";
    message.textContent = "Регистрация успешна!";
    // Здесь можно отправить данные на сервер
  });
  cart = [];
  const cartContainer = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  
  function updateCart() {
    cartContainer.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.name} — ${item.price}₽`;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Удалить';
      removeBtn.onclick = () => {
        cart.splice(index, 1);
        updateCart();
      };
  
      itemDiv.appendChild(removeBtn);
      cartContainer.appendChild(itemDiv);
      total += item.price;
    });
  
    totalElement.textContent = total;
  }
  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const name = product.getAttribute('data-name');
      const price = Number(product.getAttribute('data-price'));
      cart.push({ name, price });
      updateCart();
    });
  });
    
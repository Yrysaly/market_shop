document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!name || !email || !password) {
      alert("Барлық жолақтарды толтырыңыз!");
      return;
    }
  
    // Тіркеу деректерін сақтау
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    // Сәтті хабарлама көрсету
    document.getElementById('success-message').style.display = 'block';
  
    // 1.5 секундтан кейін store.html бетіне өту
    setTimeout(() => {
      window.location.href = "store.html";
    }, 1500);
  });
  
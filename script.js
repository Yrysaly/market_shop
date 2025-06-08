// Элементті таңдау
const box = document.querySelector("#colorBox");

// Тышқанды үстіне апарғанда түсін өзгерту
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Түс өзгерді!";
});

// Тышқанды алып кеткенде бастапқы түске қайту
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "lightgray";
    box.textContent = "Тышқанды апарыңыз";
});
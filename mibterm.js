document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
    const table = document.getElementById("dataTable");
    const tbody = table.querySelector("tbody");
  
    // Жүктелген кезде localStorage-тен мәліметтерді көрсету
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      document.body.style.backgroundColor = savedData.bgcolor;
      displayData(savedData);
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const dob = document.getElementById("dob").value;
      const bgcolor = document.getElementById("bgcolor").value;
  
      if (!name ;!email;!dob) return;
  
      const data = { name, email, dob, bgcolor };
      localStorage.setItem("formData", JSON.stringify(data));
  
      document.body.style.backgroundColor = bgcolor;
      displayData(data);
    });
  
    function displayData(data) {
      tbody.innerHTML = `
        <tr>
          <td>${data.name}</td>
          <td>${data.email}</td>
          <td>${data.dob}</td>
        </tr>
      `;
      table.style.display = "table";
    }
  });
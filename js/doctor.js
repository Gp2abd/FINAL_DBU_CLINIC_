document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.querySelector(
    'input[type="text"][placeholder="Search by Name"]'
  );
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");

  // Search functionality for the patient details table
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    rows.forEach((row) => {
      const cell = row.querySelector("td:first-child");
      if (cell) {
        const text = cell.textContent || cell.innerText;
        row.style.display =
          text.toLowerCase().indexOf(filter) > -1 ? "" : "none";
      }
    });
  });

  // Highlight the active navigation link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("href").includes(current)) {
        li.classList.add("active");
      }
    });
  });

  // Modal functionality for editing patient details
  const modal = document.getElementById("editModal");
  const span = document.getElementsByClassName("close")[0];
  const form = document.getElementById("editForm");
  let currentRow;

  table.addEventListener("click", function (event) {
    const target = event.target;

    // Delete functionality
    if (target.alt === "Delete") {
      const row = target.closest("tr");
      row.remove();
    }

    // Edit functionality
    if (target.alt === "Edit") {
      currentRow = target.closest("tr");
      const cells = currentRow.querySelectorAll("td");
      document.getElementById("patientName").value = cells[0].textContent;
      document.getElementById("gender").value = cells[1].textContent;
      document.getElementById("age").value = cells[2].textContent;
      document.getElementById("dateOfVisit").value = cells[3].textContent;
      document.getElementById("diagnosis").value = cells[4].textContent;
      document.getElementById("severity").value = cells[5].textContent;
      document.getElementById("totalVisits").value = cells[6].textContent;
      document.getElementById("status").value = cells[7].textContent;
      modal.style.display = "block";
    }
  });

  // Close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Save the edited details
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const cells = currentRow.querySelectorAll("td");
    cells[0].textContent = document.getElementById("patientName").value;
    cells[1].textContent = document.getElementById("gender").value;
    cells[2].textContent = document.getElementById("age").value;
    cells[3].textContent = document.getElementById("dateOfVisit").value;
    cells[4].textContent = document.getElementById("diagnosis").value;
    cells[5].textContent = document.getElementById("severity").value;
    cells[6].textContent = document.getElementById("totalVisits").value;
    cells[7].textContent = document.getElementById("status").value;
    modal.style.display = "none";
  });

  // Add functionality
  document
    .querySelector("#add-patient-btn")
    .addEventListener("click", function () {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
      <td contenteditable="true">New Patient</td>
      <td contenteditable="true">Gender</td>
      <td contenteditable="true">Age</td>
      <td contenteditable="true">Date of Visit</td>
      <td contenteditable="true">Diagnosis</td>
      <td contenteditable="true">Severity</td>
      <td contenteditable="true">Total Visits</td>
      <td contenteditable="true">Status</td>
      <td class="table-icons">
        <button href="#"><img src="images/icons/edit-3-svgrepo-com.svg" alt="Edit" /></button>
        <button href="#"><img src="images/icons/delete-2-svgrepo-com.svg" alt="Delete" /></button>
      </td>
    `;
      tbody.appendChild(newRow);
    });
});

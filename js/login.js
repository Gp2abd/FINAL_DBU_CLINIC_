const Patient = document.getElementById("Patient");
const Doctor = document.getElementById("Doctor");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  if (Patient.style.display === "block") {
    Patient.style.display = "none";
    Doctor.style.display = "block";
    toggleButton.innerText = "Login as a Patient";
  } else {
    Patient.style.display = "block";
    Doctor.style.display = "none";
    toggleButton.innerText = "Login as a Doctor";
  }
});

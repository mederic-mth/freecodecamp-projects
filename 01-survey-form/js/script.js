const form = document.getElementById("survey-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Le formulaire a été soumis.");
});
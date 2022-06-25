// Modes sombre et clair
let darkMode = document.querySelector(".dark_mode"),
  lightMode = document.querySelector(".light_mode"),
  body = document.querySelector("body");

lightMode.style.display = "none";

darkMode.addEventListener("click", (e) => {
  body.classList.add("dark");
  darkMode.style.display = "none";
  lightMode.style.display = "inherit";
});

lightMode.addEventListener("click", (e) => {
  body.classList.remove("dark");
  lightMode.style.display = "none";
  darkMode.style.display = "inherit";
});

let welcome = "Jensone";
document.querySelector(".username").innerHTML = welcome;

// fonction pour afficher la date d'aujourd'hui et l'année
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}
/* console.log(formatDate(new Date())); */
document.querySelector(".date").innerHTML = formatDate(new Date());

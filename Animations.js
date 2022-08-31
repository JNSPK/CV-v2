var AboutMe = document.querySelector(".aboutme");

document.querySelector(".aboutme").addEventListener("click", function () {
  AboutMe.classList.toggle("aboutmeopen");
});

var Achievements = document.querySelector(".achievements");

document.querySelector(".achievements").addEventListener("click", function () {
  Achievements.classList.toggle("achievementsopen");
});

var Contact = document.querySelector(".contact");

document.querySelector(".contact").addEventListener("click", function () {
  Contact.classList.toggle("contactopen");
});

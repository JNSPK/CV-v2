var AboutMe = document.querySelector(".aboutme");

document.querySelector(".aboutmepage").addEventListener("click", function () {
  AboutMe.classList.toggle("aboutmeopen");
});

var Achievements = document.querySelector(".achievements");

document
  .querySelector(".achievementspage")
  .addEventListener("click", function () {
    Achievements.classList.toggle("achievementsopen");
  });

var Contact = document.querySelector(".contact");

document.querySelector(".contactpage").addEventListener("click", function () {
  Contact.classList.toggle("contactopen");
});

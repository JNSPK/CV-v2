var AboutMe = document.querySelector(".aboutme");
var AboutMeContent = document.querySelector(".aboutmecontent");
var AchievementsContent= document.querySelector(".achievementscontent");
var ContactContent = document.querySelector(".contactcontent");

document.querySelector(".aboutme").addEventListener("click", function () {
  AboutMe.classList.toggle("aboutmeopen");
  AboutMeContent.classList.toggle("aboutmecontentvisible");
});

var Achievements = document.querySelector(".achievements");

document.querySelector(".achievements").addEventListener("click", function () {
  Achievements.classList.toggle("achievementsopen");
  AchievementsContent.classList.toggle("achievementscontentvisible");
  AboutMeContent.classList.toggle("aboutmecontentvisible");
});

var Contact = document.querySelector(".contact");

document.querySelector(".contact").addEventListener("click", function () {
  Contact.classList.toggle("contactopen");
  ContactContent.classList.toggle("contactcontentvisible")
  AchievementsContent.classList.toggle("achievementscontentvisible");
});

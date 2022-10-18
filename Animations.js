/*var AboutMe = document.querySelector(".aboutme");
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
  AchievementsContent.classList.toggle("achievementscontentvisible")
;
});
*/
// boutton//
const AboutMe = document.querySelector(".aboutme");
const Achievements = document.querySelector(".achievements");
const Contact = document.querySelector(".contact");

//textes//

const AboutMeContent = document.querySelector(".aboutmecontent");
const AchievementsContent= document.querySelector(".achievementscontent");
const ContactContent = document.querySelector(".contactcontent");

let visible = false;

//comportement//

AboutMe.addEventListener("click",  () => {
  visible = !visible;
  visible ? AboutMe.classList.add('open') + AboutMeContent.classList.add('visible') : AboutMe.classList.remove('open') + AboutMeContent.classList.remove('visible');
});

Achievements.addEventListener("click",  () => {
  visible = !visible;
  visible ? Achievements.classList.add('open') + AchievementsContent.classList.add('visible') : Achievements.classList.remove('open') + AchievementsContent.classList.remove('visible') + AboutMe.classList.remove('open') + AboutMeContent.classList.remove('visible');
});

Contact.addEventListener("click",  () => {
  visible = !visible;
  visible ? Contact.classList.add('open') + ContactContent.classList.add('visible') : Contact.classList.remove('open') + ContactContent.classList.remove('visible') + AboutMe.classList.remove('open') + Achievements.classList.remove('open')+ AchievementsContent.classList.remove('visible') +AboutMeContent.classList.remove('visible');
});




/*

document.querySelector(".achievements").addEventListener("click", function () {
  Achievements.classList.toggle("achievementsopen");
  AchievementsContent.classList.toggle("achievementscontentvisible");
  AboutMeContent.classList.toggle("aboutmecontentvisible");
});



document.querySelector(".contact").addEventListener("click", function () {
  Contact.classList.toggle("contactopen");
  ContactContent.classList.toggle("contactcontentvisible")
  AchievementsContent.classList.toggle("achievementscontentvisible")
;
});*/
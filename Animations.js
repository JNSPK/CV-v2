// boutton//
const AboutMe = document.querySelector(".aboutme");
const Achievements = document.querySelector(".achievements");
const Contact = document.querySelector(".contact");

function hideAllTabs() {
  AboutMe.classList.remove("open");
  Achievements.classList.remove("open");
  Contact.classList.remove("open");
}
//comportement//
const toggleContent = ($content) => () => {
  const isOpen = $content.classList.contains("open");
  hideAllTabs();
  if (isOpen) {
    return;
  }
  $content.classList.add("open");
};

AboutMe.addEventListener("click", toggleContent(AboutMe));

Achievements.addEventListener("click", toggleContent(Achievements));

Contact.addEventListener("click", toggleContent(Contact));

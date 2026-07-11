const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

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


function toggleFeedback(){

    const content =
        document.getElementById("feedback-content");

    const arrow =
        document.getElementById("feedback-arrow");


    content.classList.toggle("show");


    if(content.classList.contains("show")){

        arrow.style.transform="rotate(180deg)";

    }

    else{

        arrow.style.transform="rotate(0deg)";

    }

}

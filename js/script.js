function menuCrossed() {
  firstElement.style.transform = "rotate(45deg)";
  firstElement.style.top = "32px";
  secondElement.style.display = "none";
  thirdElement.style.transform = "rotate(-45deg)";
  thirdElement.style.top = "32px";
}
function menuNormal() {
  firstElement.style.transform = "rotate(0deg)";
  secondElement.style.display = "block";
  thirdElement.style.transform = "rotate(0deg)";
  firstElement.style.top = "";
  thirdElement.style.top = "";
}

const element = document.getElementById("burger-menu");
const firstElement = document.getElementById("1-line");
const secondElement = document.getElementById("2-line");
const thirdElement = document.getElementById("3-line");

addEventListener("change", function () {
  if (element.checked) {
    menuCrossed();
  } else {
    menuNormal();
  }
});

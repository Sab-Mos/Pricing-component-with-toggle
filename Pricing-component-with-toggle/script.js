let toggleBtn = document.querySelector(".toggle-btn");

let firstParagraph = document.querySelector(".box:first-child .pricing p");

let middleParagraph = document.querySelector(".box-middle p");

let lastParagraph = document.querySelector(".box:nth-child(3) p");

let textSwitch = false;
let toggleMoved = false;

let toggleInfo = localStorage.getItem("toggle");

if (toggleInfo === "true") {
  toggleBtn.classList.remove("inactive");

  firstParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>19.99</p>";

  middleParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>24.99</p>";

  lastParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>39.99</p>";
} else {
  toggleBtn.classList.add("inactive");
  toggleBtn.classList.remove("active");

  firstParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>199.9</p>";

  middleParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>249.9</p>";

  lastParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>399.9</p>";
}

toggleBtn.addEventListener("click", () => {
  if (toggleMoved) {
    toggleBtn.classList.add("active");
    toggleBtn.classList.remove("inactive");
  } else {
    toggleBtn.classList.remove("active");
    toggleBtn.classList.add("inactive");
  }

  if (textSwitch) {
    firstParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>19.99</p>";

    middleParagraph.innerHTML =
      "<p><span class=dollar>&dollar;</span>24.99</p>";

    lastParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>39.99</p>";
  } else {
    firstParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>199.9</p>";

    middleParagraph.innerHTML =
      "<p><span class=dollar>&dollar;</span>249.9</p>";

    lastParagraph.innerHTML = "<p><span class=dollar>&dollar;</span>399.9</p>";
  }

  textSwitch = !textSwitch;
  toggleMoved = !toggleMoved;

  let hasClass = toggleBtn.classList.contains("active");

  localStorage.setItem("toggle", hasClass);
});

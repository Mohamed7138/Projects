const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator--keys");

const key = e.target;
const action = key.dataset.action;

keys.addEventListener("click", (e) => {
  if (e.target.matches(input)) {
    // console.log("button clicked");
  }
});

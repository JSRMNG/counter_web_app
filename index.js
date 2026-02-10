var incrementButton = document.querySelector(".counter-increment");
var display = document.querySelector(".counter-display");
var decrementButton = document.querySelector(".counter-decrement");
var display = document.querySelector(".counter-display");

var count = 0;

incrementButton.addEventListener("click", function () {
  count = count + 1;
  display.innerText = count;
});

decrementButton.addEventListener("click", function () {

  if (count > 0) {
    count--;
    display.innerText = count;
  }

  display.innerText = count;
});

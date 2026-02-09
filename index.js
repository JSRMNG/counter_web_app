var incrementButton = document.querySelector(".counter-increment");

var display = document.querySelector(".counter-display");

var count = 0;

incrementButton.addEventListener("click",
  function () {
  count = count + 1;
  display.innnerText = count;
  
  }
);

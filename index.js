var incrementButton = document.querySelector(".counter-increment");

var Display = document.querySelector(".counter-dsiplay");

var count = 0;

incrementButton.addEventListener("click",
  function () {
  count = count + 1;
  display.innnerText = count;
  
  }
);

var incrementButton = document.querySelector(".counter-increment");
var display = document.querySelector(".counter-display");
var decrementButton = document.querySelector(".counter-decrement");
var display = document.querySelector(".counter-display");

var count = 0;

function updateDisplay() {
  display.innerText = count;
} 

incrementButton.addEventListener("click", function () {
  count++;
  updateDisplay();
});

decrementButton.addEventListener("click", function () {

  if (count > 0) {
    count--;
  }
  
  updateDisplay();

});

document.addEventListener("keydown",function(event) {
	if(event.key === "ArrowUp") {
		count++;
		updateDisplay();
		}
	
	if(event.key === "ArrowDown") {
		if(count > 0) {
			count--;
			}
		updateDisplay();
		}
	});


// // Get the display input box element
let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

console.log(buttons);
let buttonArray = Array.from(buttons); //Array.from() Converts the buttons NodeList to an array.
let string = "";

buttonArray.forEach(function (btn) {
  // forEach() Iterates over each button in the buttonArray

  btn.addEventListener("click", function (event) {
    // Adding click event listener to each button

    if (event.target.innerHTML == "DEL") {
      //substring used for Delete function.
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      display.value = string;
      // 'eval' function used to convert string into number and used to calculate mathematical expression given as a string.
    } else if (event.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string = string + event.target.innerHTML;
      display.value = string;
      console.log(event.target.innerHTML);
    }
  });
});

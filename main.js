// Get the display input box element
let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons); // Converts the buttons NodeList to an array
let string = "";

buttonArray.forEach(function (btn) {
  // Iterates over each button in the buttonArray

  btn.addEventListener("click", function (event) {
    // Adding click event listener to each button

    if (event.target.innerHTML == "DEL") {
      // Delete function: Removes the last character from the string
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (event.target.innerHTML == "AC") {
      // Clear function: Resets the string and display
      string = "";
      display.value = string;
    } else if (event.target.innerHTML == "=") {
      try {
        // Evaluate the expression and limit to 2 decimal places
        let result = eval(string);
        if (typeof result === "number") {
          result = result.toFixed(1); // Limit result to 2 decimal places
        }
        display.value = result;
      } catch (e) {
        // Handle any errors (e.g., syntax errors)
        display.value = "Error";
      }
    } else {
      // Append the clicked button's value to the string
      string = string + event.target.innerHTML;
      display.value = string;
      console.log(event.target.innerHTML);
    }
  });
});

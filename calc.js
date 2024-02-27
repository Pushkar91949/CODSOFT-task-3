document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "0";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button.innerText);
    });
  });

  function handleButtonClick(value) {
    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (value === "C") {
      currentInput = "0";
    } else if (value === "√") {
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    } else {
      if (currentInput === "0" || currentInput === "Error") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    display.innerText = currentInput;
  }
});

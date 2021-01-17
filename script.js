(function(){

  // INPUT GATHERED TO CALCULATE EQUATION AND RESULT. 
  let userInput = [];

  // USED TO CALCULATE INFO TO BE RETURNED TO DOM
  let equation;
  let result;

  // SELECTORS
  let displayEquation = document.querySelector(".equation");
  let displayResult = document.querySelector(".result");
  let buttons = document.querySelectorAll(".btn");


  // USING INPUT FROM EVENT LISTENERS TO ADJUST ADJUST TARGETED DOM ELEMENTS

  function updateEquation(arg="0"){
    equation = arg; 
    displayEquation.innerHTML = equation;
  }

  function updateResult(arg="0"){
    result = arg;
    displayResult.innerHTML = result;
  }

  updateEquation(); // Init with default value of "0"
  updateResult(); // Init with default value of "0"


  // EVENT LISTENERS

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      console.log(event.target.innerHTML);

      // If input is a number or operand
      if(event.target.innerHTML !== "AC" && event.target.innerHTML !== "=" && event.target.innerHTML !== "%"){
        userInput.push(event.target.innerHTML);
        updateEquation(userInput.join(""));
      } 

      // If input is AC
      else if(event.target.innerHTML == "AC"){
        updateEquation();
        updateResult();
        userInput = [];
      }

      // If input is =
      else if(event.target.innerHTML == "="){
          try {
            updateResult(eval(userInput.join("")));
            userInput = [result];
            updateEquation(result);
          } catch (error) {
            updateResult();
            userInput = [];
            updateEquation("Error...");
          }
      }

    });
  });

})()
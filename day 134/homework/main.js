// plus.js
function add(a, b) {
    return a + b;
  }
  
  // minus.js
  function subtract(a, b) {
    return a - b;
  }
  
  // multiply.js
  function multiply(a, b) {
    return a * b;
  }
  
  // divide.js
  function divide(a, b) {
    if (b === 0) return "cant divide by zero";
    return a / b;
  }
  
  // the calculator
  function Calculator() {
    const app = document.createElement("div");
    app.style.textAlign = "center";
    app.style.marginTop = "50px";
  
    const title = document.createElement("h1");
    title.innerText = "calculator";
    app.appendChild(title);
  
    const input1 = document.createElement("input");
    input1.type = "number";
    input1.placeholder = "enter first number";
    app.appendChild(input1);
  
    const input2 = document.createElement("input");
    input2.type = "number";
    input2.placeholder = "enter second number";
    app.appendChild(input2);
  
    const resultText = document.createElement("p");
    app.appendChild(resultText);
  
    function createButton(text, operation) {
      const button = document.createElement("button");
      button.innerText = text;
      button.onclick = () => {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        if (isNaN(num1) || isNaN(num2)) {
          resultText.innerText = "invalid numbers";
          return;
        }
        resultText.innerText = `Result: ${operation(num1, num2)}`;
      };
      app.appendChild(button);
    }
  
    createButton("+", add);
    createButton("-", subtract);
    createButton("*", multiply);
    createButton("/", divide);
  
    document.body.appendChild(app);
  }
  
  Calculator();
  
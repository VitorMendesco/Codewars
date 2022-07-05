/*
-- DOT CALCULATOR --
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division

-- TASK --
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
*/

function dotCalculator(equation) {
  // separing string to arrays from whitespaces;
  const arr = equation.split(" ");
  let a = 0;
  let b = 0;
  // countDots() will count only chars that are dots and sum into vars 'a' and 'b';
  function countDots() {
    for (const dot of arr[0]) {
      a += dot === "." ? 1 : 0;
    }
    for (const dot of arr[2]) {
      b += dot === "." ? 1 : 0;
    }
    return verifyOperation();
  }
  let result = 0;
  // verifyOperation() verify the signal and return the total dots in number
  function verifyOperation() {
    let signalObj = {
      "+": (a, b) => {
        return a + b;
      },
      "-": (a, b) => {
        return a - b;
      },
      "*": (a, b) => {
        return a * b;
      },
      "//": (a, b) => {
        return Math.floor(a / b);
      },
    };
    result = signalObj[arr[1]](a, b);
    return buildAnswer();
  }
  // buildAnswer() builds the string result accordingly to variable 'result'
  function buildAnswer() {
    let answer = "";
    for (let i = 0; i < result; i++) {
      answer += ".";
    }
    return answer;
  }
  return countDots();
}

// OPTIMIZED
const dotCalculatorOpt = (equation) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => Math.floor(a / b)
  };
  const [left, operator, right] = equation.split(" ");
  return ".".repeat(operations[operator](left.length, right.length));
};

// ULTRA OPTIMIZED
function dotCalculatorSuperOpt(equation) {
  let [a, op, b] = equation.split(" ");

  if (op === "//") {
    op = "/";
  }

  return "".repeat(Math.floor(eval(a.length + op + b.length)));
}

// TESTS
dotCalculator("..... + ...............");
dotCalculator("..... - ...");
dotCalculator("..... - .");
dotCalculator("..... * ...");
dotCalculator("..... * ..");
dotCalculator("..... // ..");
dotCalculator("..... // .");
dotCalculator(". // ..");
dotCalculator(". - .");

/* jshint esversion: 6 */

//getElementById('id')
const display = document.getElementById("display");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ac = document.getElementById("ac");
const negative = document.getElementById("negative");
const percentage = document.getElementById("percentage");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");

//getElementsByClassName('className')
const numbers = document.getElementsByClassName("numbers");
const lightGrey = document.getElementsByClassName("lightGrey");
const operators = document.getElementsByClassName("operators");

let arr = []; // Store user clicks which will later be used to calculate.
let str = ""; // display user clicks used for display.
let percentageArr = []; // Array to test whether user has click percentage.
let percentStartNum = []; // percentage number user wants to work out.
let storeLastResult = []; // the number which appears after equals has been clicked.

const evalOnce = input => eval(input); //Using eval to turn strings to numbers.

const addCommasToNums = variable => variable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const calculateArray = () => {
  let calculation = evalOnce(
    arr
      .toString()
      .split(",")
      .join("")
  );
  storeLastResult.push(calculation);
  return addCommasToNums(calculation);
};

const controlFontSize = () => {
  if (display.value.length > 9) {
    display.style.fontSize = "6rem";
  }
};

const workoutTotal = () => {
  if (percentageArr.length === 1) {
    //if === 1 then percentage button has been clicked by user.
    display.value = evalOnce(display.value) * percentStartNum[0];
  } else {
    display.value = calculateArray(); // if NOT 1 then calculate as normal, percentage not required.
  }
};

const styleNumbers = () => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("mouseover", () => {
      numbers[i].style.backgroundColor = "#6a6a6a";
    });
    numbers[i].addEventListener("mouseout", () => {
      numbers[i].style.backgroundColor = "#505050";
    });
  }
};

styleNumbers();

const styleZero = () => {
    zero.addEventListener("mouseover", () => {
      zero.style.backgroundColor = "#6a6a6a";
    });
    zero.addEventListener("mouseout", () => {
      zero.style.backgroundColor = "#505050";
    });
};

styleZero();

const styleLightGrey = () => {
  for (let i = 0; i < lightGrey.length; i++) {
    lightGrey[i].addEventListener("mouseover", () => {
      lightGrey[i].style.backgroundColor = "#eaeaea";
    });
    lightGrey[i].addEventListener("mouseout", () => {
      lightGrey[i].style.color = "#1C1C1C";
      lightGrey[i].style.backgroundColor = "#D4D4D2";
    });
  }
};

styleLightGrey();

const jsStyle = (id, bc, c) => {
  id.style.backgroundColor = bc;
  id.style.color = c;
};

const jsStyleReset = () => {
  for (let i = 0; i < operators.length; i++) {
    operators[i].style.color = "white";
    operators[i].style.backgroundColor = "#FF9500";
  }
};

const reduceNumberCode = (num1, num2) => {
  arr.push(num1);
  str = str.concat(num2);
  ac.innerHTML = "C";
  display.value = addCommasToNums(str);
  controlFontSize();
  addCommasToNums(str);
  jsStyleReset();
};

zero.addEventListener("click", () => {
  arr.push(0);
  if (display.value !== "0") {
    // Avoid number begin with multiple zeros.
    str = str.concat(0);
    ac.innerHTML = "C";
    display.value = addCommasToNums(str);
    jsStyleReset();
  }

  controlFontSize();
});

const buttonNumbers = () => {
  const numbersArr = [zero, one, two, three, four, five, six, seven, eight, nine];
  for(let i = 0; i < numbersArr.length; i++) {
    numbersArr[i].addEventListener("click", () => {
      reduceNumberCode(i, i);
    });
  }
};
buttonNumbers();

ac.addEventListener("click", () => {
  arr = [];
  percentageArr = [];
  display.value = "0";
  display.style.fontSize = "7rem";
  str = "";
  if (ac.innerHTML === "C") {
    ac.innerHTML = "AC";
  }
});

negative.addEventListener("click", () => {
  arr.push("-");
  str = str.concat("-");
  jsStyle(negative, "white", "#FF9500");
});

divide.addEventListener("click", () => {
  if (arr[arr.length - 1] !== "/") {
    // Avoids two '/' beside eachother.
    arr.push("/");
    str = "";
    jsStyle(divide, "white", "#FF9500");
  }
});

minus.addEventListener("click", () => {
  if (arr[arr.length - 1] !== "-") {
    // Avoids two '-' beside eachother.
    arr.push("-");
    str = "";
    jsStyle(minus, "white", "#FF9500");
  }
});

plus.addEventListener("click", () => {
  if (arr[arr.length - 1] !== "+") {
    // Avoids two '+' beside eachother.
    arr.push("+");
    str = "";
    jsStyle(plus, "white", "#FF9500");
  }
});

decimal.addEventListener("click", () => {
  if (arr[arr.length - 1] !== ".") {
    // Avoids two '.' beside eachother.
    arr.push(".");
    str = str.concat(".");
    display.value = str;
  }
});

multiply.addEventListener("click", () => {
  if (arr[arr.length - 1] !== "*") {
    // Avoids two '*' beside eachother.
    arr.push("*");
    str = "";
    jsStyle(multiply, "white", "#FF9500");
    percentStartNum.push(display.value);
  }
});

percentage.addEventListener("click", () => {
  percentageArr.push("x");
  let number = evalOnce(str);
  display.value = number * 0.01;
});

equals.addEventListener("click", () => {
  str = "";
  workoutTotal();
  controlFontSize();
  console.log(arr); //for testing.
  arr = [];
  console.log(arr); //for testing.
  console.log(storeLastResult); //for testing.
  arr[0] = storeLastResult[storeLastResult.length - 1];
});
console.log(arr); //for testing.

/* jshint esversion: 6 */
const display = document.getElementById('display');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ac = document.getElementById('ac');
const negative = document.getElementById('negative');
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

let arr = []; // Store user clicks which will later be used to calculate
let str = '0'; // display user clicks used for display
let percentageArr = []; // Array to test whether user has click percentage.
let percentStartNum = []; // percentage number user wants to work out.

const evalOnce = input => eval(input); //Using eval to turn strings to numbers.

const calculateArray = () => evalOnce(arr.toString().split(',').join(''));

const controlFontSize = () => {
  if (display.value.length > 9) {
    display.style.fontSize = '3.5rem';
  }
};

const workoutTotal = () => {
  if (percentageArr.length === 1) { //if === 1 then percentage button has been clicked by user.
    display.value = evalOnce(display.value) * percentStartNum[0];
  } else {
    display.value = calculateArray(); // if NOT 1 then calculate as normal, percentage not required.
  }
};

zero.addEventListener('click', () => {
  arr.push(0);
  if (display.value !== '0') { // Avoid number begin with multiple zeros.
    str = str.concat(0);
    ac.innerHTML = 'C';
    display.value = str;
  }

  controlFontSize();
});

one.addEventListener('click', () => {
  arr.push(1);
  str = str.concat(1);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

two.addEventListener('click', () => {
  arr.push(2);
  str = str.concat(2);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

three.addEventListener('click', () => {
  arr.push(3);
  str = str.concat(3);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

four.addEventListener('click', () => {
  arr.push(4);
  str = str.concat(4);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

five.addEventListener('click', () => {
  arr.push(5);
  str = str.concat(5);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

six.addEventListener('click', () => {
  arr.push(6);
  str = str.concat(6);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

seven.addEventListener('click', () => {
  arr.push(7);
  str = str.concat(7);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

eight.addEventListener('click', () => {
  arr.push(8);
  str = str.concat(8);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

nine.addEventListener('click', () => {
  arr.push(9);
  str = str.concat(9);
  ac.innerHTML = 'C';
  display.value = str;
  controlFontSize();
});

ac.addEventListener('click', () => {
  arr = [];
  percentageArr = [];
  display.value = '0';
  str = '';
  if (ac.innerHTML === 'C') {
    ac.innerHTML = 'AC';
  }
});

negative.addEventListener('click', () => {
  arr.push('-');
  str = str.concat('-');
  display.value = str;
});

divide.addEventListener('click', () => {
  arr.push('/');
  str = '';
});

minus.addEventListener('click', () => {
  arr.push('-');
  str = '';
});

plus.addEventListener('click', () => {
  arr.push('+');
  str = '';
});

decimal.addEventListener('click', () => {
  if (arr[arr.length - 1] !== '.') { // Avoids two '.' in one number.
    arr.push('.');
    str = str.concat('.');
    display.value = str;
  }
});

multiply.addEventListener('click', () => {
  arr.push('*');
  str = '';
  percentStartNum.push(display.value);
});

percentage.addEventListener('click', () => {
  percentageArr.push('x');
  let number = evalOnce(str);
  display.value = number * 0.01;
});

equals.addEventListener('click', () => {
  str = '';
  workoutTotal();
  controlFontSize();
});

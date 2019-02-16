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
let str = ''; // display user clicks used for display

zero.addEventListener('click', () => {
  arr.push(0);
  str = str.concat(0);
  ac.innerHTML = 'C';
  display.value = str;
});

one.addEventListener('click', () => {
  arr.push(1);
  str = str.concat(1);
  ac.innerHTML = 'C';
  display.value = str;
});

two.addEventListener('click', () => {
  arr.push(2);
  str = str.concat(2);
  ac.innerHTML = 'C';
  display.value = str;
});

three.addEventListener('click', () => {
  arr.push(3);
  str = str.concat(3);
  ac.innerHTML = 'C';
  display.value = str;
});

four.addEventListener('click', () => {
  arr.push(4);
  str = str.concat(4);
  ac.innerHTML = 'C';
  display.value = str;
});

five.addEventListener('click', () => {
  arr.push(5);
  str = str.concat(5);
  ac.innerHTML = 'C';
  display.value = str;
});

six.addEventListener('click', () => {
  arr.push(6);
  str = str.concat(6);
  ac.innerHTML = 'C';
  display.value = str;
});

seven.addEventListener('click', () => {
  arr.push(7);
  str = str.concat(7);
  ac.innerHTML = 'C';
  display.value = str;
});

eight.addEventListener('click', () => {
  arr.push(8);
  str = str.concat(8);
  ac.innerHTML = 'C';
  display.value = str;
});

nine.addEventListener('click', () => {
  arr.push(9);
  str = str.concat(9);
  ac.innerHTML = 'C';
  display.value = str;
});

ac.addEventListener('click', () => {
  arr = [];
  display.value = '';
  str = '';
  ac.innerHTML === 'C' ? ac.innerHTML = 'AC' : 'error';
});

negative.addEventListener('click', () => { //needs to be fixed
  arr.push('-');
  str = str.concat('-0');
  display.value = str;
});

divide.addEventListener('click', () => {
  arr.push('/');
  str = '';
});

multiply.addEventListener('click', () => {
  arr.push('*');
  str = '';
});

//Задание1//

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
   if (numbs[i] == 10) break;
   console.log(`Элементы массива, пока не встретилочь значение 10: ${numbs[i]}`);
}

//Задание2//

const position = numbs.indexOf(4);
console.log(`Индекс цифры 4 равен: ${position}`);

//Задание3//

const text = [1, 3, 5, 10, 20];
let joinedText = text.join(" ");
console.log(joinedText); 

//Задание4//

let size = 3; // Размер массива (3x3)
const result = [];

for (let i = 0; i < size; i++) {
  const row = []; // Создаем новый массив для каждой строки
  for (let j = 0; j < size; j++) {
    row.push(1); // Добавляем 1 в текущую строку
  }
  result.push(row); // Добавляем строку в основной массив
}

console.log(JSON.stringify(result));

//Задание5//

const number = [1, 1, 1];
number.push(2);
number.push(2);
number.push(2);
console.log(number);

//Задание6//

const sorting = [9, 8, 7, 'a', 6, 5];
sorting.sort();
const filteredSort = sorting.filter(el => el !== 'a');
console.log(filteredSort);

//Задание7//

// const arr = [9, 8, 7, 6, 5];

// let answer = prompt(`Введи число:`);
// let isFound = arr.includes(Number(answer));

// if (isFound){
//   alert(`Угадал`);
// }else{
//     alert(`Не угадал`);
//   }

//Задание8//

let row = 'abcdef';
const splitRow = row.split('').reverse('');
let joinedRow = splitRow.join('');
console.log(joinedRow); 

//Задание9//

const array = [[1, 2, 3],[4, 5, 6]];
const combined = [...array[0], ...array[1]];
console.log(combined);

//Задание10//

const figur = [2, 4, 5, 6, 8];
for (let i = 0; i < figur.length-1; i++) {
   let sum = figur[i] + figur[i+1];
   console.log(`Сумма текущего и следующего элемента:${sum}`);
}

//Задание11//

function degree(box){
  return box.map(el => el ** 2);
}

const myArr = [2, 3, 4, 5, 6];

const outcome = degree(myArr);

console.log(outcome);

//Задание12//

function line(box1){
  return box1.map(el => el.length);
}

const fruits = ["apple", "banana", "cherry"];

const outcome1 = line(fruits);

console.log(outcome1);

//Задание13//

function degree(box2){
  return box2.filter(el => el < 0);
}

const arrNum = [-2, 3, 4, -5, 6, -7, -8];

const outcome2 = degree(arrNum);

console.log(outcome2);

//Задание14//

// Создаем пустой массив
const arr = [];

// Заполняем массив 10 случайными значениями
for (let i = 0; i < 10; i++) {
    // Генерируем случайное число от 0 до 10
    let randomValue = Math.floor(Math.random() * 11);
    // Добавляем значение в массив
    arr.push(randomValue);
}

const filteredArr = arr.filter(el => el % 2 == 0);

// Выводим массивы в консоль
console.log(`Исходный массив: ${arr}`);
console.log(`Массив с чётными числами: ${filteredArr}`);

//Задание15//

const arr1 = [];

for (let i = 0; i < 6; i++) {
   
    let randomValue = Math.floor(Math.random() * 11);
    
    arr1.push(randomValue);
}

// Нахождение суммы всех чисел в массиве
const sum = arr1.reduce((total, number) => total + number, 0);
let average = sum / 6;
console.log(`Исходный массив: ${arr1}`);
console.log(`Среднее арифметическое всех цифр равно: ${average}`)
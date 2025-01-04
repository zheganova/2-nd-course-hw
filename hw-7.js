//Задание1//

let pip = 'js';
console.log(pip.toUpperCase());

//Задание2//

function sample(){
    const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Хлеб Молоко', 
        'Груша Конференция'];
    const search = 'хлеб';
        
    const newProducts = products.filter((product) => 
        product.toLowerCase().startsWith(search.toLowerCase()));

    return newProducts;
}

const result = sample();
console.log(result); 

//Задание3//

let average = 32.58884;
console.log(Math.floor(average));
console.log(Math.ceil(average));
console.log(Math.round(average));

//Задание4//

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);

const maxValue = Math.max(...numbers);

console.log("Минимальное значение:", minValue); 
console.log("Максимальное значение:", maxValue); 

//Задание5//

function accident() {
    let randomValue = Math.floor(Math.random() * 10) + 1;
    return randomValue;
}

const cat = accident();
console.log(cat); 

//Задание6//

function randomness(num) {

    const length = Math.floor(num / 2);
    const randomV = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (num +1));
        randomV.push(randomNumber);
    }

    return randomV;
}

console.log(randomness(10));

//Задание7//

function randomTwo(num1, num2) {
    
    if (num1 >= num2) {
        alert("Первое число должно быть меньше второго");
        return null; 
    }

    // Генерируем случайное число от num1 до num2
    const randomNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    return randomNum;
}

console.log(randomTwo(2, 9));

//Задание8//

let todayDate = new Date();
console.log(todayDate);

//Задание9//

let currentDate = new Date();
let miliCurrentDate = +currentDate; //Преобразует текущую дату в миллисекунды

let days73 = 73 * 24 * 60 * 60 * 1000; //Переводим 73 дня в миллисекунды

let searchDate = miliCurrentDate + days73; // Получаем колличество миллисекунд, текущая дата + 73 дня

let daysWill73 = new Date(searchDate); // Дата через 73 дня

console.log(daysWill73); 

//Задание10//

function fullTimeDate() {

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let myDate = new Date();

    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " — это " + days[myDate.getDay()]; 

    let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 

    return [fullDate, fullTime];
}

let res = fullTimeDate();
console.log(res[0]);
console.log(res[1]);
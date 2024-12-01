//Задание1//

let password = 'зайчик';
let answer = prompt('Введите пароль');

console.log(answer == password ? 'Пароль введен верно' : 'Пароль введен неправильно');

//Задание2//

let c = 10;

console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');

//Задание3//

let d = 300;
let e = 7;

console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

//Задание4//

let a = '2';
let b = '3';

alert (+a + +b);

//Задание5//

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
        console.log('Зима')
        break;
    case '2':
        console.log('Зима')
        break;    
    case '3':
        console.log('Весна')
        break;
    case '4':
        console.log('Весна')
        break;
    case '5':
        console.log('Весна')
        break;
    case '6':
        console.log('Лето')
        break;
    case '7':
        console.log('Лето')
        break;
    case '8':
        console.log('Лето')
        break;
    case '9':
        console.log('Осень')
        break;
    case '10':
        console.log('Осень')
        break;
    case '11':
        console.log('Осень')
        break;
    case '12':
        console.log('Зима')
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}
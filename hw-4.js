//Задание1//

let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

//Задание2//

let m = 1;

while (m <= 5) {
    console.log(m);
    m++;
}

//Задание3//

let number = 1;

while(number < 22) {
    if(number >= 7 && number < 22) {
        console.log(number);
    }
    number++;
}

//Задание4//

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
 }
 
 for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
 }

 //Задание5//

 let n = 1000;
 let num = 0;
 
 while (n >= 50) {
     n = n / 2;
     num++;
 }
 
 console.log(`Результат: ${n}, Количество итераций: ${num}`);

 //Задание6//

let dayFriday = 3;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i+=7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
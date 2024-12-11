//Задание1//

function min(a, b) {
	if (a < b) {
		return a;
} else {
	return b;
	}
}

console.log(min(2, 7)); 
console.log(min(8, 8)); 

//Задание2//

function isEven(number) {
	return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(isEven(4)); 
console.log(isEven(13)); 

//Задание3//

function degree(a) {
    let pow = a ** 2;
    console.log(pow);
}

degree(5);

function extent(a) {
    return a ** 2;
}

degree(12);

//Задание4//

function year(number) {
	if (number >= 0 && number < 13) {
		console.log('Привет, друг!');
} else if (number >= 13) {
	console.log('Добро пожаловать!');
	} else {
        console.log('Вы ввели неправильное значение');
    }
}

year(16);

//Задание5//

function typeNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    }

    return a * b;
}

console.log(typeNumbers(3, 'abs'));

//Задание6//

function type(n) {
    if (isNaN(Number(n))) {
        return 'Переданный параметр не является числом';
    }

    let cube = n ** 3;
    return `${n} в кубе равняется ${cube}`;
}

console.log(type(5));

//Задание7//

function getArea() {
    const area = Math.PI * this.radius ** 2;
    return `Площадь круга равна: ${area}`;
};

function getPerimeter() {
    const perimeter = 2 * Math.PI * this.radius;
    return `Периметр окружности равен: ${perimeter}`;
};

const circle1 = {
    radius: 2,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
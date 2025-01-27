function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startGame1() {
    const num = getRandomNumber();

    alert(`Привет! Твоя задача угадать случайное число от 1 до 100.`);

    while(true) {
        let answer = prompt(`Введи число, которое задумал:`);

        if (answer === null) {
            alert(`Игра завершена. Ты вышел.`);
            break;
        }

        if (isNaN(answer)) {
            alert(`Пожалуйста, введи корректное число.`);
            continue; 
        }

        if(answer < num) {
            alert(`Твоё число меньше случайного. Попробуй ещё.`);
        }else if(answer > num) {
            alert(`Твоё число больше случайного. Попробуй ещё.`)
        }else{
            alert(`Да, верно! Это число ${num}.`);
            break;
        }
    }
}

function startGame2() {

    alert(`Привет! Давай порешаем арифметические задачки!`);

    while(true) {

        let num1 = getRandomNumber();
        let num2 = getRandomNumber();

        const operations = [
            { symbol: '+', result: num1 + num2 },
            { symbol: '-', result: num1 - num2 },
            { symbol: '*', result: num1 * num2 },
            { symbol: '/', result: (num1 / num2).toFixed(2) } // Округляем результат деления до 2 знаков
        ];
        
        const randomOperation = operations[Math.floor(Math.random() * 4)];

        let answer = prompt(`${num1} ${randomOperation.symbol} ${num2} = `);

        if (answer === null) {
            alert(`Игра завершена. Ты вышел.`);
            break;
        }

        if (isNaN(answer)) {
            alert(`Пожалуйста, введи корректное число.`);
            continue; 
        }

        if(answer == randomOperation.result) {
            alert(`Да, верно!`);
        }else{
            alert(`Ответ неверный. Правильный ответ: ${randomOperation.result}`);
        }
    }
}

function startGame3() {

    alert(`Привет! Твоя задача написать любой текст, а я переверну его. Сыграем?`);

    while(true) {
        let answer = prompt(`Введи текст:`);

        if (answer === null) {
            alert(`Игра завершена. Ты вышел.`);
            break;
        }

        let answerNew = answer.toLowerCase().split('').reverse().join('');
        alert(answerNew);
    }
}

function startGame4() {

    alert(`Привет! Сейчас ты поучаствуешь в викторине. Поехали!`);

    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let n = 0;

    for(let i = 0; i < quiz.length; i++){
        let answer = prompt(`${quiz[i].question}\n${quiz[i].options}\nВведи номер правильного ответа:`);

        if (answer === null) {
            alert(`Игра завершена. Ты вышел.`);
            return;
        }

        if (isNaN(answer)) {
            alert(`Пожалуйста, введи корректное число.`);
            i--; // Повторяем текущий вопрос
            continue; 
        }

        if(Number(answer) === quiz[i].correctAnswer) {
            alert(`Правильно!`);
            n++;
        }else{
            alert(`Неправильно. Правильный ответ: ${quiz[i].correctAnswer}`);
        }
    }

    alert(`Викторина подошла к концу. Количество правильных ответов: ${n}. Спасибо за игру!`);
}

function startGame5() {

    alert(`Привет! Давай сыграем в "Камень, ножницы, бумага"!`);

    const choice = ["Камень", "Ножницы", "Бумага"];

    while(true){
        let answer = prompt(`${choice.join(", ")}\nВыбери:`);

        if (answer === null) {
            alert(`Игра завершена. Ты вышел.`);
            return;
        }
    
        // Приводим выбор пользователя к нижнему регистру
        answer = answer.toLowerCase();
    
        // Проверяем, что выбор пользователя допустим
        if (!choice.map(c => c.toLowerCase()).includes(answer)) {
            alert("Некорректный выбор. Попробуй ещё раз.");
            continue;
        }
    
         function comp() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choice[randomIndex].toLowerCase();
        }
    
        const computerChoice = comp();
    
        alert(`Ты выбрал: ${answer}\nКомпьютер выбрал: ${computerChoice}`);
    
        // Определяем победителя
        if (answer === computerChoice) {
            alert("Ничья!");
        } else if (
            (answer === "камень" && computerChoice === "ножницы") ||
            (answer === "ножницы" && computerChoice === "бумага") ||
            (answer === "бумага" && computerChoice === "камень")
        ) {
            alert("Ты победил!");
        } else {
            alert("Ты проиграл!");
        }
    }
}
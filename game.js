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
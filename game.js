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
// const number = prompt('Введите число');
// let input;
let total = 0;

while (true) {
    let input = prompt('Введите число');
    // total  = (total += number);
    if (input === null){
        console.log ('Отменено пользователем')
        break;
    }
    input = Number(input);

const notANumber = Number.isNaN(input);

if(notANumber){
    continue;
}

    total += input;
} 

alert (`Общая сумма чисел равна ${total}`);
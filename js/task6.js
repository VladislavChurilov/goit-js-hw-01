// const number = prompt('Введите число');
// let input;
let total = 0;

while (true) {
    let input = prompt('Введите число');
    // total  = (total += number);
    if (input === null){
        break;
    }
    input = Number(input);
    total += input;
} 
alert (`Общая сумма чисел равна ${total}`);
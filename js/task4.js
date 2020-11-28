let credits = 23580;
const pricePerDroid = 3000; 
let quantity = prompt ('сколько дроидов вы хотите купить?');
let totalPrice = (quantity * pricePerDroid);
let message = ('Отменено пользователем!');

if (credits <= totalPrice){
    
    message = ('Недостаточно средств на счету!');
} else {
    credits -= totalPrice;
    message = (`Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`);
}
if(quantity === null){
    message = ('Отменено пользователем!');
}

console.log (message);
const ADMIN_PASSWORD = 'jqueryismyjam';
const password = prompt('Пароль');
let message = ('Отменено пользователем!');

// console.log (`${message}`);


if (ADMIN_PASSWORD === password ){
    message = ('Добро пожаловать!');
    // console.log (`${message}`);
} else{
    message = ('Доступ запрещен, неверный пароль!');
    // console.log (`${message}`);
}
if (password === null){
    message = ('Отменено пользователем!');
    
}
//  message = ('Отменено пользователем!');
console.log (message);
alert(message);
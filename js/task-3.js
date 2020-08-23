let message = prompt (``);
const ADMIN_PASSWORD = 'jqueryismyjam';
if (message == null) {
    message = `Отменено пользователем!`
} 

else if (ADMIN_PASSWORD === message) {
    message = `Добро пожаловать!`
}
else {
    message = `Доступ запрещен, неверный пароль!`
}
alert(message);


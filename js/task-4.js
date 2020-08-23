const credits = 23580;
const pricePerDroid = 3000;
let count = prompt `Количество дроидов`;
let totalPrice;
let balance;

if (count === null) {
    console.log(`Отменено пользователем!`);
} else {
    totalPrice = count * pricePerDroid;
    if (totalPrice > credits) {
        console.log ('Недостаточно средств на счету!');
    } else {
        balance = credits % pricePerDroid;
        console.log(`Вы купили ${count} дроидов, на счету осталось ${balance} кредитов.`)

    }
}


/*const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
 message = CANCELED_BY_USER;
} else { 
    totalPrice = orderPieces * pricePerDroid;
    if (totalPrice > credits) {
      message = ACCESS_DENIED;
    } else {
      balanceCredit = credits - totalPrice;
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
    
    }
}
*/

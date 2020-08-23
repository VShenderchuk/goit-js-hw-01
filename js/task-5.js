let nameCountry = prompt `Название страны`;
let message;
let cost;
if (nameCountry === null) {
    console.log(`Отменено пользователем!`);
} else {
switch (nameCountry.toUpperCase()) {
    case 'КИТАЙ':
    cost = 100;
    break;
     
    case 'ЧИЛИ':
    cost = 250;
    break;

    case 'АВСТРАЛИЯ':
    cost = 170;
    break;

    case 'ИНДИЯ':
    cost = 80;
    break;

    case 'ЯМАЙКА':
    cost = 120;
    break;

    default:
        alert('В вашей стране доставка не доступна')
}

alert(`Доставка в ${nameCountry} будет стоить ${cost} кредитов`)
}


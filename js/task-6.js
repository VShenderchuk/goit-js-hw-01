let total = 0;
let input;
input = prompt(`Введите число`);
let validNumber;

while (input != null) { // Запуск циклу, до поки юзер не натисне cancel
    validNumber = Number(input);
    if (Number.isNaN(validNumber)) { //перевіряємо чи змінна не є число (NaN)
        console.log(`isNaN`);
        alert('Было введено не число, попробуйте еще раз')
    } else {
        console.log(`isNumber`)
        total = total + validNumber;
        console.log(total);
        

    }
    input = prompt(`Введите число`);
    

}
alert(`Общая сумма чисел равна ${total}`);



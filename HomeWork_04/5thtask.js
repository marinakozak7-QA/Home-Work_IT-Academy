//Даны два 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) ваш код должен работать с любыми заданными 2 числами.
const number1 = 3487;
const number2 = 3794;
let positionAndValueMatch = 0;
let valueMatchOnly = 0;

for (let i = 0; i < 4; i++) {
    const digit1 = number1.toString() [i];
    const digit2 = number2.toString() [i]

    if (digit1 === digit2) {
        positionAndValueMatch++;
    } else if (number1.toString().includes(digit2)) {
        valueMatchOnly++;
    }
}
console.log ('Цифр совпадающих по значению и позиции' + positionAndValueMatch);
console.log ('Цифр совпадающих только по значению' + valueMatchOnly);
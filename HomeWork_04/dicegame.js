//Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной). У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья. Выведите результаты в консоль.
let numRolls = 3;
let sumPlayer1 = 0;
let sumPlayer2 = 0;
for (let i = 0; i < numRolls; i++) {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;
    console.log ("A dice returns to Player1 " + roll1);
    console.log ("A dice returns to Player2 " + roll2);
    sumPlayer1 += roll1;
    sumPlayer2 += roll2;
}
console.log ("Player1 sum is "+ sumPlayer1);
console.log ("Player2 sum is "+ sumPlayer2);

if (sumPlayer1 > sumPlayer2) {
    console.log ("Player1 wins");
} else if (sumPlayer1 < sumPlayer2){
    console.log ("Player2 wins");
} else {
    console.log ("Draw");
}
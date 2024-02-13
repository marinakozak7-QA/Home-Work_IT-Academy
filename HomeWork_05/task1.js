function countFridayThe13ths(startDate) {
    let currentDate = new Date();
    let count = 0;
    while (startDate < currentDate) {
        if (startDate.getDate() === 13 && startDate.getDay() === 5) {
            count++;
        }
        startDate.setDate(startDate.getDate() + 1);
    }
    return count;
}
let startDate = new Date('1986-07-07');
let friday13Count = countFridayThe13ths(startDate);
console.log(friday13Count);
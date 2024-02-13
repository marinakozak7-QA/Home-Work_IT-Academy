function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const array = [12, 15, 20, 25, 59, 79];
const average = findAverage(array);
console.log(average);
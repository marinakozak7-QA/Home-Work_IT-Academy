function checkSumEquality(str) {
    if (str.length % 2 !== 0) {
        return 'нет';
    }
    let firstSum = Number(str[0]) + Number(str[1]) + Number(str[2]);

    let secondSum = Number(str[3]) + Number(str[4]) + Number(str[5]);

    if (firstSum === secondSum) {
        return 'да';
    } else {
        return 'нет';
    }
}
console.log(checkSumEquality('123456'));
console.log(checkSumEquality('111222'));
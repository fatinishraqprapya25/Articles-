var numbers = [1, 2, 3, 4, 5, 6];
var newNum = numbers.filter((value, index, array) => {
    return value <= 2;
});

console.log(newNum);
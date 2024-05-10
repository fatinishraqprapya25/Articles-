const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;

const sumWithInitial = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);
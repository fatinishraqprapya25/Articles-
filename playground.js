var datas = [1, 2, 3, 4, 5, 6];
const newData = datas.map((value, index, array) => {
    return value * value;
});
console.log(newData);
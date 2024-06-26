# Array in JavaScript

## Introduction

In JavaScript, An Array is an special type of variable that can contain a single value or more than a value of different types at a time. We can think of it as a collection of data stored in a variable. It is very easy to declare and use an array.

For Example, you want to create a numbers Array and a colors array.

```JavaScript
var numArr = [1,2,3,4,5,6]; // Numbers Array
var colors = ["red", "green", "blue"]; /// colors Array
```

You also can create an Array of multiple types.

```JavaScript
var myArr = [1,"fuad"]; // Numbers Array
```

## Important Array Methods

JavaScript Array has some awesome and powerful methods those allow us to manupulate Array efficiently and perform various operations. Some of them are given below.

## length

'length' Method is used to get the number of elements of an Array. For Example, We have an array called myFriends and it has 4 elements. If use the 'length' method it will return 4.

``` JavaScript
var myFriends = ["Fuad", "Prapya", "Tasin"];
console.log(myFriends.length);
```

## toString()

Array.toString() method converts an Array to a string (comma separatedly) of Array values.

``` JavaScript
var fruits = ["Mango", "Apple", "Bananna"];
var str = fruits.toString();
console.log(str);
```

## push()

Array.push() method is used to insert a single element or more than a single element to the end of an Array. We can also push an array using this method. Besides, this method returns the new length of the Array.

For Example,

``` JavaScript
var friends = ["Fuad", "Arif", "Tasin"];
// inserting a single element
friends.push("Nafiz");
// inserting an array
var anoFriends  = ["Raad", "Turzo", "Nafi"];
friends.push(...anoFriends);
```

## pop()

Array.pop() method removes the last element of an Array and returns the value that was popped out.

```javascript
var friends = ["Fuad", "Tasin", "Sakib"];
const poppedOut = friends.pop();
console.log(friends);
console.log(poppedOut);
```

## shift ()

Array.shift() method is almost similiar to Array.pop() method. Array.pop() method removes the last element but Array.shift() method removes the first element of an Array and returns the value that was shifted out.

```javascript
var friends = ["Fuad", "Tasin", "Sakib"];
const shiftedOut = friends.shift();
console.log(friends);
console.log(shiftedOut);
```

## unshift()

Array.unshift() method works like the Array.push() method. Push method add an element or elements to the end of an array. But Unshift method inserts an element at the beginning.

```javascript
var friends = ["Fuad", "Tasin", "Sakib"];
friends.unshift("Muhi");
console.log(friends);
```

## forEach()

Array.forEach() is used to execute a provided function once for each element. It's a great way to traverse a array without using the traditional for loops. We have to pass a callback function as a parameter of the method. 

```javascript
var numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((value, index, array) => {
    console.log(value);
});
```

## map()

Array.map() has lots of similarities with Array.forEach() method. This method also take a callback function as a parameter. And this callback function has 3 parameters. They are 'value', 'index', 'array'. 

```javascript
var datas = [1, 2, 3, 4, 5, 6];
const newData = datas.map((value, index, array) => {
    return value * value;
});
console.log(newData);
```

## find()

Array.find() method is used to search specific element through condition. We have to pass a callback function as a parameter of the method. This callback has also 3 parameters named 'value', 'index', 'array'. The first one 'value' is required and the others are optional. It will return a value that satisfies the condition written in the callback function. 

```javascript
var numbers = [1, 2, 3, 4, 5, 6];
var newNum = numbers.find((value, index, array) => {
    return value > 2;
});
console.log(newNum);
```

In the 'newNum' variable, the value will be the first element of the 'numbers' array which is greater than 2.

## filter()

Array.filter() method is almost similiar to Array.find() method. It also takes a callback function as parameter and this callback function has 3 parameters. The parameters are 'value', 'index' and 'array'. The first one is required and the second & third one are optional. The find() method returns a single value. But it returns a array of values those satisfies the condition written in the callback function's body.

``` JavaScript
var numbers = [1, 2, 3, 4, 5, 6];
var newNum = numbers.filter((value, index, array) => {
    return value <= 2;
});

console.log(newNum);
```

## reduce()

Array.reduce() method is very powerfull. This is method is used to reduce the array to a single value. It take a callback function and a initial value as parameters.Initial Value is optional. The function executes once for each element. This function has 2 parameters. The parameters are 'accumulator', 'currentValue'. 

```JavaScript
const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
console.log(sumWithInitial);
```

If you've read through the entire article, I hope you've grasped the fundamentals of arrays and their methods. Stay tuned for further updates! If you found this article helpful, please consider liking, commenting, and sharing your thoughts.
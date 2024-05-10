# Array in JavaScript

## Introduction

In JavaScript, An Array is an special type of variable that can contain a single value or more than a value of diffent types at a time. We can think of it as a collection of data stored in a variable. It is very easy to declare and use an array.

For Example, you want to create a numbers Array and a colors array.

```JavaScript
var numArr = [1,2,3,4,5,6]; // Numbers Array
var colors = ["red", "green", "blue"]; /// colors Array
```

You also can create an Array of multiple types.

```JavaScript
var myArr = [1,2,3,4,5,6]; // Numbers Array
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
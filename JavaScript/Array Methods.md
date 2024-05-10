# Array in JavaScript: All Your Need to Need

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

## Length

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
var friends = ["Fuad", "Arif", "Tasin"];
// inserting a single element
var x = friends.push("Nafiz");
console.log(x);

var anoFriends = ["Raad", "Turzo", "Nafi"];
const len = friends.push(...anoFriends);

console.log(len);
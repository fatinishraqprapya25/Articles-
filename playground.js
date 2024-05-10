var friends = ["Fuad", "Arif", "Tasin"];
// inserting a single element
friends.push("Nafiz");

var anoFriends = ["Raad", "Turzo", "Nafi"];
friends.push(...anoFriends);

console.log(friends);
console.log ("func is loaded");

var name = 'fred';

var person = {
    name: 'fred',
    tel: '123456'
}

/*
var greet = function(name, phone) {
    console.log("Hello ", name);
    console.log("\tcall me ", phone);
}
*/

var greet = function(rec) {
    console.log("Hello ", rec['name']);
    console.log("\tcall me ", rec['tel']);
    return 0;
}

var mkGreet = function(rec) {
    return ("Hello " + rec['name'] + "\tcall me " + rec['tel']);
}

greet(person['name'], person['tel']);

console.log('typeof name = ', typeof name);
console.log('typeof greet = ', typeof greet);

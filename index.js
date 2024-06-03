const userInfo = require('./information');

console.log(userInfo.firstName); // Cyriac

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My name is ${userInfo.firstName} and I'm at ${userInfo.campus} campus`,
    e: "oO",
    T: "U "
}));
const userInfo = require('./information')

console.log(

)

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My name is ${userInfo.firstname} and I'm at ${userInfo.campus} campus`,
    e: "oO",
    T: "U "
}));
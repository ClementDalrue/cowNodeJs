const userInfo = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({ text : `Hi, my name is ${userInfo.nom} and I'm at ${userInfo.campus}`}));


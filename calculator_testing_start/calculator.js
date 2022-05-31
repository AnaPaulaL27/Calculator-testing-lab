"use strict";  //strict flag- hold accountable


const sum = function(a, b){          //anonymous 
    return a + b;
};

const subtract = (a, b) => a - b;    //arrow + implicit return


const multiply = (a, b) => a * b;   //arrow + implicit return

const divide =  (a, b) => a / b     // arrow + implicit return 


const modulus = (a, b) => a % b     //arrow + implicit return


const even = a => {                 // since 1 arg
    if(a % 2 == 0 ){
    return true;
} else { 
    return false ;
    }
};


const odd = b => {                  // since 1 arg  
    if(b % 2 != 0 ){
        return true;
    } else { 
        return false ;
        }
    };



module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};

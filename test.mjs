import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

function optel(getal1, getal2){

let som = getal1 + getal2;

console.log('De twee getallen opgeteld geven: ' + som);

}

function aftrek(getal1, getal2){

let som = getal1 - getal2;

console.log('De eerste getal min de tweede geeft: ' + som);

}

optel(2, 3);

aftrek(10, 8);


                            
                    









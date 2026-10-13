import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

function optel(getal1, getal2){

let som = getal1 + getal2;

console.log('De twee getallen opgeteld geven: ' + som);

}

optel(2, 3);

optel(54, 88);

optel(234, 546);


                            
                    











const Readline = require('node:readline')

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//while (true){

    const zufall= Math.floor(Math.random() * 100) + 1;

    rl.question(`Ihre Zahl zwischen 1-100 ? : `, zahl => {
        let operationZahl = parseInt(zahl);

        if (operationZahl === zufall) {
            console.log(`Richtig! Die Zahl war ${zufall}`);
        } else {
            console.log(`Falsch! Die Zahl war ${zufall}`);
        }
    });
//}
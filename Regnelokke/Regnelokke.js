import * as readline from "readline/promises";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Hei, skriv inn nye TALL paa hver linje, jeg skal regne ut summen av dem. Skriv 0 naar du er ferdig.");
let numbers = [];
let minSum = 0;
// Rekursjon
function calculateSum(index = 0) {
    if (index === numbers.length) {
        console.log(`Summen av tallene er ${minSum}`);
        return;
    }
    minSum += numbers[index];
    calculateSum(index + 1);
}
function findMaxMin() {
    let max = numbers[0];
    let min = numbers[0];
    for (const element of numbers) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(`Det storste tallet er ${max}`);
    console.log(`Det minste tallet er ${min}`);
}
function readLines() {
    return new Promise((resolve, reject) => {
        rl.on("line", async (line) => {
            try {
                let number = parseFloat(line);
                if (isNaN(number)) {
                    console.log("Dette er ikke et tall");
                }
                if (number === 0) {
                    rl.close();
                    resolve();
                }
                numbers.push(number);
            }
            catch (error) {
                console.log("Dette er ikke et tall, error");
                reject(error);
            }
        });
        rl.on("close", () => {
            resolve();
        });
        rl.on("Error", (error) => {
            reject(error);
            console.log("Dette er ikke et tall, error");
        });
    });
}
await readLines();
calculateSum();
findMaxMin();
// Lag liste der du leser inn og lagrer tallene
// kjor gjennom listen og regn ut summen og lagre den i en variabel
// finn det minste og storste tallet i listen og skriv disse ut
//# sourceMappingURL=Regnelokke.js.map
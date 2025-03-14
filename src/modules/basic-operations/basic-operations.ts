import * as readlineSync from 'readline-sync';

export const helloWorld = (): void => {
    console.log("Hello, World!");
};

export const displayInformedNumber = (): void => {
    const informedNumber: number = Number(readlineSync.question("Enter a number: "));

    if (isNaN(informedNumber)) {
        console.log("That is not a valid number!");
    } else {
        console.log(`The informed number was ${informedNumber}`);
    }
}   
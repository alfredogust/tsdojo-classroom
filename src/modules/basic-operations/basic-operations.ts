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
};

export const sumTwoNumbers = (): void => {
    const firstNumber: number = Number(readlineSync.question("Enter the first number: "));
    const secondNumber: number = Number(readlineSync.question("Enter the second number: "));

    if (isNaN(firstNumber)) {
        console.log("The first value is not a valid number!")
    } else if (isNaN(secondNumber)) {
        console.log("The second value is not a valid number!")
    } else {
        const sumOfNumbers: number = firstNumber + secondNumber;
        
        console.log(`The value of the sum is: ${sumOfNumbers}`)
    }
};
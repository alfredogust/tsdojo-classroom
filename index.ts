import * as readlineSync from 'readline-sync';
import {helloWorld} from './src/modules/basic-operations/basic-operations';

const showMenu = (): void => {
    console.log("\n=== Exercise List: Basic Operations with TypeScript ===");
    console.log("1 - Hello World");
    console.log("0 - Exit\n");
};

const app = (): void => {
    let option: number;

    do {
        showMenu();
        option = parseInt(readlineSync.question('Choose an option: '), 10);

        switch (option) {
            case 1:
                helloWorld();
                break;
            case 0:
                break;
            default:
                console.log("Invalid option! Try again.");
        }
    } while (option !== 0);
};

app();
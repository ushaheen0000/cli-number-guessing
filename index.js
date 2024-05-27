#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) Computer Will generate a random number - Done.
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number Guesing Game");
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}

#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    Euro: 0.98,
    GBP: 0.76,
    INR: 74.68,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'Euro', 'GBP', 'INR', 'PKR']
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'Euro', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let from_Amount = Currency[user_answer.from];
let to_Amount = Currency[user_answer.To];
let amount = user_answer.amount;
let base_Amount = amount / from_Amount;
let converted_Amount = base_Amount * to_Amount;
console.log(`The converted amount is: ${converted_Amount}`);

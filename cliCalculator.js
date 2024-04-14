#! /usr/bin/env node
import inquirer from "inquirer";
const usrReply = await inquirer.prompt({
    type: "number",
    name: "number1",
    message: "Enter first number",
});
const usrReply2 = await inquirer.prompt({
    type: "number",
    name: "number2",
    message: "Enter second number",
});
const operators = await inquirer.prompt([
    {
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operator",
        message: "Select an operator",
    },
]);
if (operators.operator === "Addition") {
    let sum = usrReply.number1 + usrReply2.number2;
    console.log(`The sum of nubmbers are ${sum}`);
}
if (operators.operator === "Subtraction") {
    let sub = usrReply.number1 - usrReply2.number2;
    console.log(`The result is = ${sub}`);
}
if (operators.operator === "Multiplication") {
    let multiply = usrReply.number1 * usrReply2.number2;
    console.log(`The result is = ${multiply}`);
}
if (operators.operator === "Division") {
    let div = usrReply.number1 / usrReply2.number2;
    console.log(`The result is = ${div}`);
}

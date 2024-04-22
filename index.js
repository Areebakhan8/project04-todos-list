#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.bold(`\n Welcome TO To_Do List....!! \n`));
let todos_list = [];
let while_condition = true;
while (while_condition) {
    let userOption = await inquirer.prompt({
        name: "select",
        type: "list",
        message: chalk.greenBright.bold("Select A Option"),
        choices: ["Add To_Do", "Remove To_Do"]
    });
    if (userOption.select === "Add To_Do") {
        let userAnswer = await inquirer.prompt({
            name: "answer",
            type: "input",
            message: chalk.blueBright("Write Something to Add in your To_do")
        });
        if (userAnswer.answer !== "") {
            todos_list.push(userAnswer.answer);
            console.log(todos_list);
        }
        else {
            console.log(chalk.bgBlue.bold("Please..Write Something to Add in your To_do"));
        }
    }
    else if (userOption.select === "Remove To_Do") {
        let removeItem = await inquirer.prompt({
            name: "remove",
            type: "list",
            choices: todos_list,
            message: chalk.red.bold("Select Item to Remove")
        });
        let indexToRemove = todos_list.indexOf(removeItem.remove);
        if (indexToRemove >= 0) {
            todos_list.splice(indexToRemove, 1);
            console.log(chalk.yellow("You Removed", removeItem.remove));
            console.log(todos_list);
        }
    }
    let user_ans = await inquirer.prompt({
        name: "ans_select",
        type: "confirm",
        default: true,
        message: chalk.blueBright.bold("DO You Want To Add More TO_DO In Your List")
    });
    if (user_ans.ans_select === false) {
        while_condition = false;
    }
}
console.log(chalk.bgCyanBright.bold(`Your To_Do List Is,[${todos_list}]`));
console.log(chalk.bgMagenta.bold("THANK-YOU For Using To-Do List"));

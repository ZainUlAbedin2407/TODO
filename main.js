#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list!"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "What you want to update in the list?",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list!"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "View") {
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "What you want to delete in the list?",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
        }
    } while (true);
}
createTodo(todos);

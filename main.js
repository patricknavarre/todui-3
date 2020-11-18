const readline = require('readline');
const { number } = require('yargs');
const data = require('./data.js');


const todos = data.todos;

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

const displayTodos = () => {
  console.log('Your todos are:')
for (i = 0; i < todos.length; i++) {
  console.log(i + 1 + '-' + todos[i].text);
}
}
displayTodos();


const add = (userInput) => {
  const todo = {
    text: userInput,
    isComplete: false,
    priority: 2,
  }
  todos.unshift(todo);
  console.clear();
  displayTodos();
  interface.question(menu, handleMenu);
}

const removeTodo = (num) => {
  // if(num = todos[i].text)
todos.splice(num - 1,1)
  displayTodos();
  interface.question(menu, handleMenu)
}

const handleMenu = (cmd) => {
  switch (cmd) {
    case '1':
    console.clear();
    interface.question('What todo would you like to add?\n\n', add);
    break;

    case '2':
    console.clear();
    displayTodos(); 
    interface.question('Which todo would you like to remove?\n\n', removeTodo);
    break;

    case '3': 
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
    break;

    case '4': 
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
    break;

    case '5':
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
    break;

    default:
    console.log('Quitting!');
    interface.close();
  }
};

console.clear();

displayTodos();

interface.question(menu, handleMenu);

const inquirer = require('inquirer');
require('colors');

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: 1,
        name: '1. Create a task',
      },
      {
        value: 2,
        name: '2. List tasks',
      },
      {
        value: 3,
        name: '3. List completed tasks',
      },
      {
        value: 4,
        name: '4. List pending tasks',
      },
      {
        value: 5,
        name: '5. Complete a task(s)',
      },
      {
        value: 6,
        name: '6. Delete a task',
      },
      {
        value: 0,
        name: '0. Exit',
      },
    ],
  },
  {
    type: 'input',
    name: 'key',
    message: `Press ${'ENTER'.green} to continue`
  }
]

const inquirerMenu = async () => {
  const { option } = await inquirer.prompt(menuOpts[0]);
  return option;
};

const pause = async () => {
  const { key } = await inquirer.prompt(menuOpts[1]);
  return key;
};

module.exports = {
  inquirerMenu,
  pause,
};
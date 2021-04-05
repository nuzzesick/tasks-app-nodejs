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
        name: `${'1.'.green} Create a task`,
      },
      {
        value: 2,
        name: `${'2.'.green} List tasks`,
      },
      {
        value: 3,
        name: `${'3.'.green} List completed tasks`,
      },
      {
        value: 4,
        name: `${'4.'.green} List pending tasks`,
      },
      {
        value: 5,
        name: `${'5.'.green} Complete a task(s)`,
      },
      {
        value: 6,
        name: `${'6.'.green} Delete a task`,
      },
      {
        value: 0,
        name: `${'0.'.green} Exit`,
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

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) return 'Please enter a value';
        else return true;
      }
    }
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
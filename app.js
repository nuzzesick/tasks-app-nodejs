const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/fileAdmin');
const Tasks = require('./models/tasks');
require('colors');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksDB = readDB();

  if (tasksDB) tasks.loadTasksFromArr(tasksDB);

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await readInput('Description: ');
        tasks.createTask(desc);
      break;
      case 2:
        tasks.completedList();
      break;
    }

    saveDB(tasks.listArr);

    if (opt !== 0) await pause();
  } while (opt !== 0);
}

main();
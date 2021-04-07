const colors = require("colors");
const Task = require("./task");

class Tasks {
  _list = {};
  get listArr() {
    const list = [];
    Object.keys(this._list).forEach(key => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }
  constructor() {
    this._list = {};
  }
  loadTasksFromArr (tasks = []) {
    tasks.forEach(task => {
      this._list[task.id] = task;
    })
  }
  completedList() {
    console.log('');
    this.listArr.forEach((task, index) => {
      const color = task.completedIn ? colors.green : colors.red;
      const taskNumber = index + 1;
      const status = task.completedIn ? 'Completed' : 'Incompleted';
      console.log(`${color(taskNumber + '.')} ${task.desc} :: ${status}`);
    });
  }
  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
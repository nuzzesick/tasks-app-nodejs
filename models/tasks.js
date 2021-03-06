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

  deleteTask(id = '') {
    if (this._list[id]) delete this._list[id];
  }

  listCompletedAndPendingTasks = (completed = true) => {
    console.log('');
    const tasks = this.listArr.filter(task => completed ? task.completedIn : !task.completedIn);
    const color = completed ? colors.green : colors.red;
    const status = completed ? 'Completed' : 'Incompleted';
    tasks.forEach((task, index) => {
      const taskNumber = index + 1;
      console.log(`${color(taskNumber + '.')} ${task.desc} :: ${status}`);
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const task = this._list[id];
      if (!task.completedIn) task.completedIn = new Date().toISOString();
    });
    this.listArr.forEach(task => {
      if (!ids.includes(task.id)) this._list[task.id].completedIn = null;
    });
  }
}

module.exports = Tasks;
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log(`completing task ${this.name}`);
        this.completed = true;
    }

    _save() {
        console.log(`saving task ${this.name}`);
    }
}


const task = new Task('task1');
task.complete();
task._save();

console.log(task.name);
const Task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log(`completing task ${this.name}`);
        this.completed = true;
    }

    // this.save = function() {
    //     console.log(`saving task ${this.name}`);
    // } 
}

Task.prototype.save = function() {
    console.log(`saving task ${this.name}`);
}  

const task1 = new Task('task1');
const task2 = new Task('task2');
const task3 = new Task('task3');
const task4 = new Task('task4');

task1.save();
task2.save();
task3.save();
task4.save();
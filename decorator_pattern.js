// Decorator pattern => new object creeren en extra functionaliteit toegvoegen, inheritence
// Fascade pattern => wrapper om ugly code te verbergen
// Flyweight pattern => share data between objects (keep your memory footprint low)

console.log('Jippie');

const Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log(`completing task ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log(`saving task ${this.name}`);
}


const legacyTask = new Task('myTask');
legacyTask.complete();
legacyTask.save();


const UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
    console.log('notifying important people');
}
UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff in here');
    Task.prototype.save.call(this);
}

const urgentTask = new UrgentTask('Urgent task', 1);
urgentTask.save();
console.log(urgentTask);
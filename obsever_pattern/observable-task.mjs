import { ObserverList } from './observerlist.mjs';
import { Task } from './task.mjs';

// const ObservableTask = function(data) {
//     Task.call(this, data);
//     this.observers = new ObserverList();
// }

class ObservableTask extends Task {
     constructor(data) {
         super(data);
         this.observers = new ObserverList();
     }
}

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}
ObservableTask.prototype.notify = function(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}
ObservableTask.prototype.save = function() {
    this.notify(this);
    Task.prototype.save.call(this);
}

export { ObservableTask };
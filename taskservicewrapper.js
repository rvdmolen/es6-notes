/** ********************** */

// const TaskServiceWrapper = function() {

//     this.completeAndNotify = function() {
//         console.log('completeAndNotify');
//     }
// };

// TaskServiceWrapper.prototype.save = function() {
//     console.log(`saving task ${this.name}`);
// }  

// console.log(TaskServiceWrapper.prototype)


// const taskServiceWrapper = new TaskServiceWrapper();
// console.log(taskServiceWrapper)
// taskServiceWrapper.completeAndNotify();
// taskServiceWrapper.save();

/** ********************** */

// Module Pattern, you cannot prototype
const TaskServiceWrapper = function() {
    function completeAndNotify() {
        console.log('completeAndNotify');
    }

    return {
        completeAndNotify: completeAndNotify
    }
};

// NOT Possible
// TaskServiceWrapper.prototype.save = function() {
//     console.log(`saving task ${this.name}`);
// }

const taskServiceWrapper = new TaskServiceWrapper();
taskServiceWrapper.completeAndNotify();
taskServiceWrapper.save();

/** ********************** */


// const TaskServiceWrapper = function() {
//     function completeAndNotify() {
//         console.log('completeAndNotify');
//     }

//     return {
//         completeAndNotify: completeAndNotify
//     }
// }();

// NOT Possible
// TaskServiceWrapper.prototype.save = function() {
//     console.log(`saving task ${this.name}`);
// }

// TaskServiceWrapper.completeAndNotify();
// TaskServiceWrapper.save();
// const LoggingService = function() {
//     const message = 'Logging ';
//     this.update = function(task) {
//         console.log(message + task.user + ' for task ' + task.name);
//     }
// }

class LoggingService {
    constructor() {
        this.message = 'Logging ';
        this.update = this.update.bind(this);
    }

    update(task) {
      console.log(this.message + task.user + ' for task ' + task.name);
    }
}

export { LoggingService };
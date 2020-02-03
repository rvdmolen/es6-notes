// const NotificationService = function() {
//     const message = 'Notifying ';
//     this.update = function(task) {
//         console.log(message + task.user + ' for task ' + task.name);
//     }
// }

class NotificationService {
    constructor() {
        this.message = 'Notifying ';
        this.update = this.update.bind(this);
    }

    update(task) {
      console.log(this.message + task.user + ' for task ' + task.name);
    }
}

export { NotificationService };
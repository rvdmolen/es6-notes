// const AuditingService = function() {
//     const message = 'Auditing ';
//     this.update = function(task) {
//         console.log(message + task.user + ' for task ' + task.name);
//     }
// }

class AuditingService {
    constructor() {
        this.message = 'Auditing ';
        this.update = this.update.bind(this);
    }

    update(task) {
      console.log(this.message + task.user + ' for task ' + task.name);
    }
}

export { AuditingService };
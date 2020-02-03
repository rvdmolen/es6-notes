
import { NotificationService } from './services/notification.service.mjs';
import { AuditingService } from './services/auditing.service.mjs';
import { LoggingService } from './services/logging.service.mjs';
import { ObservableTask } from './observable-task.mjs';


const task1 = new ObservableTask({name: 'demo for constructor', user: 'John'});

const not = new NotificationService();
const log = new LoggingService();
const aud = new AuditingService();

task1.addObserver(not.update)
task1.addObserver(log.update)
task1.addObserver(aud.update)

task1.save();
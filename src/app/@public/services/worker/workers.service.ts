import {Injectable} from '@angular/core';
import {WorkerRef} from './worker.ref';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private workerQueue: {[user: string]: string};
  constructor() {}

  open(worker: Worker, user: string) {
    this.workerQueue = {...this.workerQueue, ...{[user]: 'runtime'}};
    return new WorkerRef(worker);
  }

  dismiss(user: string) {
    console.log(`${user}已经删除`);
    delete this.workerQueue[user];
  }
}

/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/4/7 15:30
 *
 * Use of this source code is governed by an MIT-style license that can be
 */
import {Subject} from 'rxjs';

export interface WorkersPost {
  methodName: string;
  args: any[];
}

export class WorkerRef {

  public result$: Subject<any> = new Subject<any>();

  constructor(private worker: Worker) {}

  private monitor() {
    this.worker.onmessage = ({data}) => {
      this.result$.next(data);
    }
  }

  send(data: WorkersPost) {
    this.worker.postMessage(data);
    this.monitor();
    return this;
  }

  close() {
    this.worker.terminate();
    this.result$.complete();
  }
}

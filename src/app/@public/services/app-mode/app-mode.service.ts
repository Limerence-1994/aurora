import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ModeState } from '../../../@models/mode.model';
import { Observable } from 'rxjs';
import { reset, update } from '../../../@store/mode/mode.actions';
import {distinctUntilChanged, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppModeService {

  private readonly mode$: Observable<ModeState>;

  constructor(private store: Store<{ mode: ModeState }>) {
    this.mode$ = store.pipe(select('mode'));
  }

  getModeStatus() {
    return this.mode$.pipe(
      distinctUntilChanged(),
      share()
    );
  }

  update(payload: ModeState, patron: string) {
    this.store.dispatch(update({payload, patron}));
  }

  reset() {
    this.store.dispatch(reset());
  }
}

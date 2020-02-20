import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ModeState } from '../../../@models/mode.model';
import { Observable } from 'rxjs';
import { reset, update } from '../../../@store/actions/mode.actions';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppModeService {

  private readonly mode$: Observable<ModeState>;

  constructor(private store: Store<{ mode: ModeState }>) {
    this.mode$ = store.pipe(select('mode'));
  }

  getModeStatus() {
    return this.mode$.pipe(distinctUntilChanged());
  }

  update(mode: ModeState) {
    this.store.dispatch(update({payload: mode}));
  }

  reset() {
    this.store.dispatch(reset());
  }
}

import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Settings} from '../../../@models/settings.module';
import {Observable} from 'rxjs';
import {update} from '../../../@store/settings/settings.actions';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly store$: Observable<Settings>;

  constructor(private settingStore: Store<any>) {
    this.store$ = settingStore.pipe(select('settings'));
  }

  updateSettings(payload: Settings, patron: string) {
    this.settingStore.dispatch(update({
      payload,
      patron
    }));
  }

  getSettings(): Observable<Settings> {
    return this.store$
  }
}

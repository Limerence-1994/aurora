import {Inject, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {AppModeService, ThemeService} from '../@public/services';

@Injectable()
export class InitializeService {

  constructor(
    private httpService: HttpClient,
    private theme: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  load(): Promise<any> {
    const theme   = this.theme.loadStyle('future.css');
    const loading = this.document.querySelector('#ld-container');
    const rel     = this.httpService.get('assets/init.json')
      .toPromise()
      .then(_ => {
        theme.then( r => {
          loading.classList.add('ld-hidden');
        });
      })
      .catch(_ => {
        theme.catch(() => loading.classList.add('ld-error'));
        return Promise.resolve(null);
      });

    return rel.then((res) => { });
  }
}

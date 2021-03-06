import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ThemeService} from '../@public/services';
import {SettingsService} from '../@public/services';
import {Settings} from '../@models/settings.module';

@Injectable()
export class InitializeService {

  constructor(
    private httpService: HttpClient,
    private theme: ThemeService,
    private settings: SettingsService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  load(): Promise<any> {
    const ld    = this.document.querySelector('#ld-container');
    const text  = this.document.querySelector('#ld-text');
    text.insertAdjacentHTML(
      'beforeend',
      '<p>Initializing...</p>'
    );
    const time    = (new Date()).toLocaleString();
    const storage = JSON.parse(localStorage.getItem('settings'));
    const rel     = this.httpService.get('assets/init.json')
      .toPromise()
      .then((data: Settings) => {
        const {currentTheme='future', version} = data;
        this.settings.updateSettings(data, 'init');
        // -----------------------------------------
        text.insertAdjacentHTML(
          'beforeend',
          `<p>
                  <span class="ld-tag">Version:</span>${version} <br>
                  <span class="ld-tag">Time:</span>${time} <br>
                  <span class="ld-tag">Theme:</span>${'future'} <br>
                </p>
                <p class="ld-success">Init done!</p>
                <p>Loading style sheet...</p>`
        );
        // -----------------------------------------
        this.theme.loadStyle(currentTheme)
          .then(_ => {
            text.insertAdjacentHTML(
              'beforeend',
              '<p class="ld-success">Style sheet Loaded</p>'
            );
          })
          .catch(_ => {
            text.insertAdjacentHTML(
              'beforeend',
              '<p class="ld-error">Style sheet Loading failed, Please try again</p>'
            );
          });
      })
      .catch(_ => {
        text.insertAdjacentHTML(
          'beforeend',
          '<p class="ld-error">initialization failed, Please try again</p>'
        );
        return Promise.resolve(null);
      });

    return rel.then((res) => {
      console.log('初始化：', res);
    });
  }
}

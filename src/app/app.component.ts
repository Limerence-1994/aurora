import {Component, AfterViewInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, store: Store<any>) {
    store.pipe(select('settings')).subscribe(r => {
      console.log('设置更新：', r);
    });
  }

  ngAfterViewInit(): void {
    const loading = this.document.querySelector('#ld-container');
    setTimeout(() => loading.classList.add('ld-hidden'), 1000);
  }
}

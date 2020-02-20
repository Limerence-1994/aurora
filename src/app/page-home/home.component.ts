import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NoticeService} from '../@public/integrated/notice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  constructor(public message: NoticeService) { }

  ngOnInit() {}

  info() {
    this.message.open('无论哪种形式，都会返回一个 MatSnackBarRef。', 'close', {
      displayType: 'error',
      duration: 10000
    });
  }
}

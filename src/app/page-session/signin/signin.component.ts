import {Component, OnInit, ViewChild} from '@angular/core';
import {AppModeService} from '../../@public/services';
import {ModeStateEnum} from '../../@models/mode.model';
import {CdkScrollable} from '@angular/cdk/overlay';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild(CdkScrollable) content: CdkScrollable;
  private position = 0;

  constructor(private mode: AppModeService) { }

  ngOnInit() {
    this.mode.update(ModeStateEnum.SIMPLIFY);
  }

  next() {
    this.content.scrollTo({top: this.position += 16 * 1.5 + 16, behavior: 'smooth'});
  }
}

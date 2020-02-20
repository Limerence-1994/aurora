import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ModeState} from '../../@models/mode.model';

@Component({
  selector: 'app-curtain-wall',
  templateUrl: './curtain-wall.component.html',
  styleUrls: ['./curtain-wall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurtainWallComponent implements OnInit {

  @Input() mode: ModeState;

  constructor() { }

  ngOnInit() {
  }

}

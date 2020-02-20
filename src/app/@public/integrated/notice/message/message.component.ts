import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {noticeAnimation} from '../../../../@design/animations';
import {ASC_NOTICE_DATA, MessageData, NoticeConfig} from '../notice.config';
import {NoticeRef} from '../notice.ref';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [noticeAnimation.state],
  encapsulation: ViewEncapsulation.None,
})
export class MessageComponent {

  public animationState: string;
  public data: MessageData;
  public textButton: boolean;
  public iconButton: boolean;

  constructor(
    private noticeRef: NoticeRef<MessageComponent>,
    @Inject(ASC_NOTICE_DATA) public config: NoticeConfig
  ) {
    this.data = config.data;
    this.iconButton = !!this.data.action && typeof this.data.action !== 'string';
    this.textButton = typeof this.data.action === 'string';
  }

  endOfAnimation(e) {
    const {fromState, toState} = e;
    if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
      this.noticeRef.dismiss();
    }
  }

  shutdown(r = false) {
    this.noticeRef.sendUserAction(r);
    this.animationState = 'hidden';
  }
}

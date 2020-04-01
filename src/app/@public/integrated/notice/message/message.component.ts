import {Component, Inject, ViewEncapsulation} from '@angular/core';
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

  /**
   * 动画结束时删除
   * @param fromState 从 a 开始
   * @param toState   到 b 的状态转换
   */
  endOfAnimation({fromState, toState}) {
    if (!fromState && toState === 'hidden') {
      this.noticeRef.dismiss();
    }
  }
  // 结束时通知用户， 并开始动画
  shutdown(choice?: boolean) {
    if (choice !== undefined) {
      this.noticeRef.sendUserAction(choice);
    }
    this.animationState = 'hidden';
  }
}

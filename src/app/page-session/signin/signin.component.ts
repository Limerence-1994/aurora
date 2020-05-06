import {Component, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {AppModeService} from '../../@public/services';
import {ModeStateEnum} from '../../@models/mode.model';
import {CdkScrollable} from '@angular/cdk/overlay';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {convert} from '../../@design/animations';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {PopupService} from '../../@public/services/popup/popup.service';
import {
  faFacebook, faGithub, faGoogle, faQq, faWeixin
} from '@fortawesome/free-brands-svg-icons';


const options = [
  {name: 'oogle', tag: 'G', icon: faGoogle},
  {name: 'eChat', tag: 'W', icon: faWeixin},
  {name: 'Q', tag: 'Q', icon: faQq},
  {name: 'Github', tag: 'H', icon: faGithub},
  {name: 'acebook', tag: 'F', icon: faFacebook},
];

@Component({
  selector: 'app-signin-container',
  template: `
    <div class="signin"></div>`,
  styleUrls: ['./signin.component.scss'],
})
export class SignInContainerComponent implements OnInit, OnDestroy {

  private popupRef;

  constructor(
    private popup: PopupService,
    private mode: AppModeService,
  ) {
  }

  ngOnInit(): void {
    this.mode.update(ModeStateEnum.SIMPLIFY, 'sign in');
    this.popupRef = this.popup.open(SignInComponent);
  }

  ngOnDestroy(): void {
    this.popupRef.close();
  }
}


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [convert(
    {
      start: 'translate3d(100%, 0, 0)',
      end: 'translate3d(0, 0, 0)',
    },
    {time: '350ms'}
  )]
})
export class SignInComponent implements OnDestroy {
  @HostBinding('@component') animate;
  @ViewChild(CdkScrollable) content: CdkScrollable;

  private position = 0;
  icon: IconDefinition = faSignInAlt;
  signInOptions = options;
  step = '';
  account = '';
  password: string;

  constructor(public location: Location) {
  }

  ngOnDestroy(): void {
  }

  checkAccount() {
    const upperValue: string = this.account.toUpperCase();
    switch (upperValue) {
      case 'G':
      case 'GOOGLE':
        console.log('GOOGLE');
        break;
      case 'W':
      case 'WECHAT':
        console.log('微信');
        break;
      case 'Q':
      case 'QQ':
        console.log('QQ');
        break;
      case 'H':
      case 'GITHUB':
        console.log('GITHUB');
        break;
      case 'F':
      case 'FACKBOOK':
        console.log('FACKBOOK');
        break;
      case 'B':
      case 'BACK':
        this.location.back();
        break;
      default:
        this.step = 'password';
        this.nextStep(16 * 3);
    }
  }

  /**
   * 向下滚动
   * @param distance number
   */
  nextStep(distance: number) {
    this.content.scrollTo({
      top: this.position += distance,
      behavior: 'smooth'
    });
  }

  /**
   * 向上滚动
   * @param distance number
   */
  prevStep(distance: number) {
    this.content.scrollTo({
      top: this.position -= distance,
      behavior: 'smooth'
    });
  }
}

import {Component, Input} from '@angular/core';
import {Icon} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.scss']
})
export class AccessCardComponent {
  /** 标题 */
  @Input() title: string;
  /** 宽度 */
  @Input() width: string;
  /** 高度 */
  @Input() height: string;
  constructor() { }
}

@Component({
  selector: 'access-card-head',
  template: `
    <header class="card-head">
      <div class="text"><ng-content></ng-content></div>
      <div class="asc-photo">
        <fa-icon [icon]="icon" class="color-text_error error-icon"></fa-icon>
      </div>
    </header>
  `,
  styleUrls: ['./access-card.component.scss']
})
export class AccessCardHeadComponent {
  @Input() icon: Icon;
  constructor() { }
}

@Component({
  selector: 'access-card-content, div[pcAccessCardContent]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host { flex: 1;font-weight: bold }']
})
export class AccessCardContentComponent {
  constructor() { }
}

@Component({
  selector: 'access-card-footer',
  template: `
    <ng-content></ng-content>
  `
})
export class AccessCardFooterComponent {
  constructor() { }
}

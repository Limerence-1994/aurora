import {Component, Input} from '@angular/core';
import {Icon} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'pc-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.scss']
})
export class AccessCardComponent {
  @Input() title: string;
  constructor() { }
}

@Component({
  selector: 'pc-access-card-head',
  template: `
    <header class="card-head">
      <div><ng-content></ng-content></div>
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
  selector: 'pc-access-card-content, div[pcAccessCardContent]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host { flex: 1;font-weight: bold }']
})
export class AccessCardContentComponent {
  constructor() { }
}

@Component({
  selector: 'pc-access-card-footer',
  template: `
    <ng-content></ng-content>
  `
})
export class AccessCardFooterComponent {
  constructor() { }
}

import {animate, style, transition, trigger} from '@angular/animations';



export const slideIntoLeft = trigger('component', [
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
  ])
]);

export const slideIntoBottom = trigger('component', [
  transition(':enter', [
    style({opacity: 0, transform: 'translate3d(0, 100%, 0)'}),
    animate('200ms', style({ opacity: 1, transform: 'translate3d(0, 0, 0)'})),
  ]),
  transition(':leave', [
    style({opacity: 0, transform: 'translate3d(0, 0, 0)'}),
    animate('200ms', style({ opacity: 1, transform: 'translate3d(100%, 0, 0)'}))
  ])
]);

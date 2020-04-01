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

export const slideInto = trigger('component', [
  transition(':enter', [
    style({opacity: 0, transform: '{{ENTRY_FROM}}'}),
    animate('0.5s ease-in-out', style({ opacity: 1, transform: '{{ENTRY_TO}}'})),
  ], {
    params: {
      ENTRY_FROM: 'translate3d(100%, 0, 0)',
      ENTRY_TO: 'translate3d(0, 0, 0)'
  }}),
  transition(':leave', [
    style({opacity: 0, transform: '{{LEAVE_FROM}}'}),
    animate('0.5s ease-in-out', style({ opacity: 1, transform: '{{LEAVE_TO}}'}))
  ], {
    params: {
      LEAVE_FROM: 'translate3d(0, 0, 0)',
      LEAVE_TO: 'translate3d(100%, 0, 0)'
    }})
]);

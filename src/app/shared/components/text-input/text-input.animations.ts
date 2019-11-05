import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({top: '6px', 'font-size': '12px', height: '12px'})),
    transition('false => true', [
        animate(`150ms ease-in-out`)
    ]),
    transition('true => false', [
        animate(`150ms ease-in-out`)
    ])
]);
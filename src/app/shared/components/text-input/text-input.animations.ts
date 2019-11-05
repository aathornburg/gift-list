import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

const labelHeight = '12px'

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({top: '6px', 'font-size': labelHeight, height: labelHeight})),
    transition('false => true', [
        animate(`150ms ease-in-out`)
    ]),
    transition('true => false', [
        animate(`150ms ease-in-out`)
    ])
]);
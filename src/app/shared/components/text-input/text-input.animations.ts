import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

const labelHeight = '14px'
const heightFromTop = '7px';

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({top: heightFromTop, 'font-size': labelHeight, height: labelHeight, color: '#b6eae5', 'font-weight': 'bold'})),
    transition('false => true', [
        animate(`150ms ease-in-out`)
    ]),
    transition('true => false', [
        animate(`150ms ease-in-out`)
    ])
]);
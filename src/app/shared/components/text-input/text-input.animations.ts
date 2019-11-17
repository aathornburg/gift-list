import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

const labelHeight = '14px'
const heightFromTop = '7px';

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({ top: heightFromTop, 'font-size': labelHeight, height: labelHeight, color: '#2EC4B6' })),
    transition('* <=> *', [
        animate(`150ms ease-in-out`)
    ])
]);

export const shrinkHeight = trigger('shrinkHeight', [
    state('true', style({ height: '50px' })),
    transition('* <=> *', [
        animate('150ms ease-in-out')
    ])
]);
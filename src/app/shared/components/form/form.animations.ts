import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { ColorHelper } from 'src/app/shared/helpers/color-helper';

const labelHeight: string = '14px'
const heightFromTop: string = '7px';
const primaryColor: string = ColorHelper.getColorByVariableName('--ion-color-primary');

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({ top: heightFromTop, 'font-size': labelHeight, height: labelHeight, color: primaryColor })),
    transition('* <=> *', [
        animate(`150ms ease-in-out`)
    ])
]);

const inputShrunkenHeight = '45px';

export const shrinkHeight = trigger('shrinkHeight', [
    state('true', style({ height: inputShrunkenHeight })),
    transition('* <=> *', [
        animate('150ms ease-in-out')
    ])
]);
import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { ColorHelper } from 'src/app/shared/helpers/color-helper';

const labelHeight = 14;
const labelHeightPx: string = `${labelHeight}px`
const verticalCenterTopOffsetPx: string = `-${labelHeight / 2}px`;
const primaryColor: string = ColorHelper.getColorByVariableName('--ion-color-primary');

export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx, color: primaryColor })),
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
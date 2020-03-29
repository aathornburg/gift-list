import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { ColorHelper } from 'src/app/shared/helpers/color-helper';

const labelHeight = 14;
const labelHeightPx: string = `${labelHeight}px`
const verticalCenterTopOffsetPx: string = `-${labelHeight / 2}px`;
const primaryColor: string = ColorHelper.getColorByVariableName('--ion-color-primary');
const primaryColorLight: string = ColorHelper.getColorByVariableName('--ion-color-primary-light');
const errorColor: string = ColorHelper.getColorByVariableName('--ion-color-danger');
const errorColorLight: string = ColorHelper.getColorByVariableName('--ion-color-danger-light');

// Moves label text upward into input border and changes its color according to input validity
export const moveUpShrink = trigger('moveUpShrink', [
    state('validWithValue', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx, color: primaryColor })),
    state('invalidWithValue', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx, color: errorColor })),
    transition('* <=> *', [
        animate(`150ms ease-in-out`)
    ])
]);

// Change border color of host element according to input validity
export const borderColorChange = trigger('borderColorChange', [
    state('validWithValue', style({ 'border-color': primaryColorLight })),
    state('invalidWithValue', style({ 'border-color': errorColorLight })),
    transition('* <=> *', [
        group([
            query('@*', [ animateChild() ]),
            animate(`150ms ease-in-out`)
        ])
    ])
]);
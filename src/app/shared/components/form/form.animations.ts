import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { CSSVariableHelper } from 'src/app/shared/helpers/css-variable-helper';

const labelHeight = 14;
const labelHeightPx: string = `${labelHeight}px`
const verticalCenterTopOffsetPx: string = `-${labelHeight / 2}px`;
const primaryColor: string = CSSVariableHelper.getValue('--ion-color-primary');
const primaryColorLight: string = CSSVariableHelper.getValue('--ion-color-primary-light');
const lightColor: string = CSSVariableHelper.getValue('--ion-color-light');
const errorColor: string = CSSVariableHelper.getValue('--ion-color-danger');
const errorColorLight: string = CSSVariableHelper.getValue('--ion-color-danger-light');
const formInputHeight: string = CSSVariableHelper.getValue('--form-input-height');
const formInputFontSize: string = CSSVariableHelper.getValue('--form-input-font-size');
const formInputLabelHeight: string = CSSVariableHelper.getValue('--form-input-label-height');

// Moves label text upward into input border and changes its color according to input validity
export const moveUpShrinkColorChange = trigger('moveUpShrinkColorChange', [
    state('validWithValue', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx, color: primaryColor })),
    state('invalidWithValue', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx, color: errorColor })),
    state('validWithoutValue', style({ top: '0px', 'font-size': formInputFontSize, height: formInputLabelHeight, color: lightColor})),
    state('invalidWithoutValue', style({ top: '0px', 'font-size': formInputFontSize, height: formInputLabelHeight, color: lightColor })),
    transition('* <=> *', [
        animate(`150ms ease-in-out`)
    ])
]);

// Moves label text upward into input border and changes its color according to input validity
export const moveUpShrink = trigger('moveUpShrink', [
    state('true', style({ top: verticalCenterTopOffsetPx, 'font-size': labelHeightPx, height: labelHeightPx })),
    state('false', style({ height: formInputHeight, 'font-size': formInputFontSize, top: '0px' })),
    transition('true => false', [
        animate(`1000ms ease-in-out`)
    ]),
    transition('false => true', [
        animate(`150s ease-in-out`)
    ])
]);

// Change border color of host element according to input validity
export const borderColorChange = trigger('borderColorChange', [
    state('validWithValue', style({ 'border-color': primaryColorLight })),
    state('invalidWithValue', style({ 'border-color': errorColorLight })),
    state('validWithoutValue', style({ 'border-color': primaryColorLight })),
    state('invalidWithoutValue', style({ 'border-color': errorColorLight })),
    transition('* <=> *', [
        group([
            query('@*', [ animateChild() ], { optional: true }),
            animate(`150ms ease-in-out`)
        ])
    ])
]);
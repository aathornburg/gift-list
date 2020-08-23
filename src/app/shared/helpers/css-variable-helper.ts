export class CSSVariableHelper {

    private static computedStyles: CSSStyleDeclaration = getComputedStyle(document.documentElement);

    public static getValue(variableName: string): string {
        return this.computedStyles.getPropertyValue(variableName);
    }

    public static addPixels(firstPixels: string, secondPixels: string): string {
        return (+firstPixels.replace(/px/gi, '') + +secondPixels.replace(/px/gi, '')) + 'px';
    }

    public static subtractPixels(firstPixels: string, secondPixels: string): string {
        return (+firstPixels.replace(/px/gi, '') - +secondPixels.replace(/px/gi, '')) + 'px';
    }
}
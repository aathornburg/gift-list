export class ColorHelper {

    private static computedStyles: CSSStyleDeclaration = getComputedStyle(document.documentElement);

    public static getColorByVariableName(variableName: string): string {
        return this.computedStyles.getPropertyValue(variableName);
    }
}
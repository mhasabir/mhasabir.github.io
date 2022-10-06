export class DebugHelper {

    //#region static Variables
    public static Enable: boolean = true;
    //#endregion

    //#region Public static Methods
    public static Print(message?: any, ...optionalParams: any[]): void {
        if (this.Enable) {
            if (optionalParams?.length > 0) {
                console.log(message, optionalParams);
            }
            else {
                console.log(message);
            }
        }
    }
    public static PrintNot(message?: any, ...optionalParams: any[]): void {

    }
    //#endregion

    //#region Private static Methods

    //#endregion
}
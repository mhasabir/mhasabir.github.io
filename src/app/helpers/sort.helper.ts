export class SortHelper {
    //#region Private static Variables
    //#endregion

    //#region Public static Methods
    public static String(isAscending: boolean = true): any {
        try {
            return (a: string, b: string) => {
                a = a ? a : ' ';
                b = b ? b : ' ';
                let s;
                switch (isAscending) {
                    case true:
                        s = a ? a.localeCompare(b) : 1;
                        break;
                    case false:
                        s = b ? b.localeCompare(a) : -1;
                        break;
                    default:
                        s = 0;
                        break;
                }
                return s;
            };
        } catch (e) {
            throw e;
        }
    }
    public static Date(isAscending: boolean = true): any {
        return (a: any, b: any) => {
            a = new Date(a);
            b = new Date(b);
            let s;
            switch (isAscending) {
                case true:
                    s = b - a;
                    break;
                case false:
                    s = a - b;
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    public static Number(isAscending: boolean = true): any {
        return (a: number, b: number) => {
            a = a ? a : 0;
            b = b ? b : 0;
            let s;
            switch (isAscending) {
                case true:
                    s = a - b;
                    break;
                case false:
                    s = b - a;
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    public static Boolean(isAscending: boolean = true): any {
        return (a: boolean, b: boolean) => {
            if (a === b) {
                return 0;
            }
            let s;
            switch (isAscending) {
                case true:
                    if (a) {
                        s = 1;
                    } else {
                        s = -1;
                    }
                    break;
                case false:
                    if (a) {
                        s = -1;
                    } else {
                        s = 1;
                    }
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    //#endregion

    //#region Private static Methods

    //#endregion
}
export class SortObjectHelper {

    //#region Private static Variables

    //#endregion

    //#region Public static Methods
    public static String(columnName: string, isAscending: boolean = true): any {
        try {
            return (a: any, b: any) => {
                a = a[columnName] ? a[columnName] : ' ';
                b = b[columnName] ? b[columnName] : ' ';
                let s;
                switch (isAscending) {
                    case true:
                        s = a ? a.localeCompare(b) : 1;
                        break;
                    case false:
                        s = b ? b.localeCompare(a) : -1;
                        break;
                    default:
                        s = 0;
                        break;
                }
                return s;
            };
        } catch (e) {
            throw e;
        }
    }
    public static Date(columnName: string, isAscending: boolean = true): any {
        return (a: any, b: any) => {
            a = new Date(a[columnName]);
            b = new Date(b[columnName]);
            let s;
            switch (isAscending) {
                case true:
                    s = b - a;
                    break;
                case false:
                    s = a - b;
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    public static Number(columnName: string, isAscending: boolean = true): any {
        return (a: any, b: any) => {
            a = a[columnName] ? a[columnName] : 0;
            b = b[columnName] ? b[columnName] : 0;
            let s;
            switch (isAscending) {
                case true:
                    s = a - b;
                    break;
                case false:
                    s = b - a;
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    public static Boolean(columnName: string, isAscending: boolean = true): any {
        return (a: any, b: any) => {
            a = a[columnName];
            b = b[columnName];
            if (a === b) {
                return 0;
            }
            let s;
            switch (isAscending) {
                case true:
                    if (a) {
                        s = 1;
                    } else {
                        s = -1;
                    }
                    break;
                case false:
                    if (a) {
                        s = -1;
                    } else {
                        s = 1;
                    }
                    break;
                default:
                    s = 0;
                    break;
            }
            return s;
        };
    }
    //#endregion

    //#region Private static Methods

    //#endregion
}
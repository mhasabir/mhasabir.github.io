export class ValidationHelper {

    //#region Private static Variables

    //#endregion

    //#region Public static Methods
    public static IsEmail(email: string): boolean {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    public static IsEmailSimple(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }
    public static IsString(value: string): boolean {
        if (value && /\S/.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    public static IsNumber(value: any): boolean {
        if (value && value.trim().length > 0 && !isNaN(value)) {
            return true;
        }
        else {
            return false;
        }
    }
    public static IsEven(number: number): boolean {
        if (number % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    public static IsDate(value: any): boolean {
        if (typeof value.getMonth === 'function') {
            return true;
        }
        else {
            return false;
        }
    }
    public static IsValidDate(value: any): boolean {
        if (!value) {
            return false;
        }
        const newDate: any = new Date(value);
        if (newDate == 'Invalid Date') {
            return false;
        }
        else {
            return true;
        }
    }
    public static IsAllowedDate(value: any): boolean {
        if (this.IsValidDate(value)) {
            const from: Date = new Date(1970, 1, 1);
            const to: Date = new Date(2099, 12, 31);
            const date: Date = new Date(value);
            if ((date > from && date < to)) {
                return true;
            }
            return false;
        }
        return false;
    }
    public static IsValidName(name: string, keywords: string[] = []): boolean {
        if (name) {
            let regExSpecialChar = new RegExp(/[\.\!\`\~\@\#\$\%\^\&\*\)\(\+\=\{\}\[\,\<\>\;\:\?\]\|]/);//Special Character
            //let regExSpecialChar = new RegExp(/[^.~!@#$%^&*()_+-=<>,?:;'"|}{][]]/);//Special Character
            if (name.trim().length === 0) {
                return false;
            }

            keywords = keywords.map(function (x) { return x.toLowerCase(); });
            if (keywords.includes(name.toLowerCase())) {
                return false;
            }

            let regExStartWithText = new RegExp(/^[a-zA-Z0-9]/);
            if (!regExStartWithText.test(name) || regExSpecialChar.test(name)) {
                return false;
            }

            return true;
        }
        else {
            return false;
        }
    }
    public static IsSameNumberArray(firstArray: number[], secondArray: number[]): boolean {
        if (!secondArray || !firstArray) {
            return false;
        }
        else if (secondArray.sort().length !== firstArray.sort().length) {
            return false;
        }
        else if (secondArray.sort().map(String).toString() !== firstArray.sort().map(String).toString()) {
            return false;
        }
        return true;
    }
    //#endregion

    //#region Private static Methods

    //#endregion
}
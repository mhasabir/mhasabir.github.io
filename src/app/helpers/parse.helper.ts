export class ParseHelper {

    //#region Private static Variables

    //#endregion

    //#region Public static Methods
    public static DeepCopy(obj: any): any {
        const objStr: string = JSON.stringify(obj);
        const parsedObj: any = JSON.parse(objStr);
        return parsedObj;
    }
    public static To2DigitInteger(value: any): number {
        let formattedNumber = value.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        return formattedNumber;
    }
    public static SetDropdownValue(object: any, objectValueProperty: string, objectDisplayValueProperty: string, dataSource: any[], dataSourceValueProperty: string = null, dataSourceDisplayValueProperty: string = null): any {
        if (Array.isArray(dataSource)) {
            if (dataSource.length > 0) {
                if (!dataSourceValueProperty) {
                    dataSourceValueProperty = objectValueProperty;
                }
                if (!dataSourceDisplayValueProperty) {
                    dataSourceDisplayValueProperty = objectDisplayValueProperty;
                }
                const selectedObj: any = dataSource.find(x => x[dataSourceValueProperty] === object[objectValueProperty]);
                if (selectedObj) {
                    object[objectValueProperty] = selectedObj[dataSourceValueProperty];
                    object[objectDisplayValueProperty] = selectedObj[dataSourceDisplayValueProperty];
                }
            }
        }
        return object;
    }
    public static SetDropdownValueOrDefault(object: any, objectValueProperty: string, objectDisplayValueProperty: string, dataSource: any[], dataSourceValueProperty: string = null, dataSourceDisplayValueProperty: string = null): any {
        if (Array.isArray(dataSource)) {
            if (dataSource.length > 0) {
                if (!dataSourceValueProperty) {
                    dataSourceValueProperty = objectValueProperty;
                }
                if (!dataSourceDisplayValueProperty) {
                    dataSourceDisplayValueProperty = objectDisplayValueProperty;
                }
                let selectedObj: any = dataSource.find(x => x[dataSourceValueProperty] === object[objectValueProperty]);
                if (!selectedObj) {
                    selectedObj = dataSource[0];
                }
                if (selectedObj) {
                    object[objectValueProperty] = selectedObj[dataSourceValueProperty];
                    object[objectDisplayValueProperty] = selectedObj[dataSourceDisplayValueProperty];
                }
            }
        }
        return object;
    }
    public static RemoveMatchedAndMerge(firstList: any[], secondList: any[], firstListProperty: string, secondListProperty: string = firstListProperty): any[] {
        if (!firstList) {
            firstList = [];
        }
        if (!secondList) {
            secondList = [];
        }
        if (Array.isArray(firstList) && Array.isArray(secondList)) {
            if (firstList.length > 0) {
                firstList.forEach(obj => {
                    secondList = secondList.filter(x => x[secondListProperty] != obj[firstListProperty]);
                });
            }
            firstList = [...firstList, ...secondList];
        }
        return firstList;
    }
    public static DistinctArray(array: any[]): any[] {
        if (!array) {
            array = [];
        }
        if (Array.isArray(array)) {
            if (array.length > 0) {
                array = array.map(item => item).filter((value, index, self) => self.indexOf(value) === index);
            }
        }
        return array;
    }
    public static FirstLine(value: string): string {
        let firstLine: string;
        if (value) {
            const lines: string[] = value.split('\n');
            if (lines?.length > 0) {
                firstLine = lines[0];
            }
        }
        return firstLine;
    }
    public static ToInitials(name: string): string {
        let initialsArray = name.match(/\b\w/g) || [];
        let initials: string = (
            (initialsArray.shift() || "") + (initialsArray.pop() || "")
        ).toUpperCase();
        return initials

    }
    public static NotUndefined(value: any, initialValue: any = null): any {
        return (typeof value !== 'undefined') ? value : initialValue
    }
    public static Extension(fileName: string): string {
        const ext = fileName.split('.').pop();
        return ext.toLowerCase();
    }
    public static FileName(fileName: string): string {
        const name = fileName.split('.').shift();
        return name;
    }
    public static ObjectValueToArray(object: any): any[] {
        let keys: string[] = Object.keys(object);
        let values: any[] = [];
        if (keys?.length > 0) {
            keys.forEach((property: string) => {
                values.push(object[property]);
            });
        }
        return values;
    }
    public static EnumToArray(object: any): { id: number; value: string }[] {
        let keys: string[] = Object.keys(object);
        let values: { id: number; value: string }[] = [];
        if (keys?.length > 0) {
            keys = keys.slice(0, keys.length / 2);
            keys.forEach((property: string) => {
                const value: { id: number; value: string } = {
                    id: +property,
                    value: object[property]
                };
                values.push(value);
            });
        }
        return values;
    }
    //#endregion

    //#region Private static Methods

    //#endregion
}
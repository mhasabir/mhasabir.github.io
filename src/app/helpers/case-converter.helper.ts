export class CaseConverter {
    public static ToTitleCase(object: any): any {
        if (object && typeof object === 'object' && !Array.isArray(object)) {
            return this.CastToTitleCase(object);
        }
        if (object && typeof object === 'object' && Array.isArray(object)) {
            let newObjects: any[] = [];
            object.forEach(element => {
                newObjects.push(this.CastToTitleCase(element));
            });
            return newObjects;
        }
        if (object && typeof object !== 'object' && !Array.isArray(object)) {
            return object;
        }
        if (!object) {
            return null;
        }
    }
    private static CastToTitleCase(object: any): any {
        let newObject: any = {};
        let keys: string[] = Object.keys(object);
        keys.forEach(key => {
            let newKey: string = key.charAt(0).toLowerCase() + key.slice(1);
            newObject[newKey] = this.ToTitleCase(object[key]);
            delete object[key];
        });
        return newObject;
    }
}

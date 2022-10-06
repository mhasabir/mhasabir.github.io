
const USER = 'USER';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const ROLES = 'ROLES';
const USER_PREFERENCE = 'USER_PREFERENCE';
const LOG_OUT = 'LOG_OUT';
const USER_DATE_TIME_FORMAT = 'USER_APP_DATE_TIME_FORMAT';
const USER_DATE_FORMAT = 'USER_DATE_FORMAT';
const USER_TIME_FORMAT = 'USER_TIME_FORMAT';

const LOCALSTORAGE_KEY = {
    USER,
    ACCESS_TOKEN,
    ROLES,
    USER_PREFERENCE,
    USER_TIME_FORMAT,
    USER_DATE_TIME_FORMAT,
    USER_DATE_FORMAT,
    LOG_OUT,
}
export { LOCALSTORAGE_KEY }

const localStorageKeys = () => Object.keys(localStorage);

export class LocalStorageHelper {
    public static getItem(key: string) {
        return localStorage.getItem(key);
    }
    getAllLocalStorage() {
        return localStorageKeys().map(e => {
            return JSON.parse(localStorage.getItem(e));
        });
    }

    /*clearAllLocalStorage () {
        localStorageKeys().map(key => {
            localStorage.setItem(key, '');
        });
    }*/
    /**
     * Clear all localstorage value only
     */
    clearAllLocalStorageValue() {
        localStorageKeys().map(key => {
            localStorage.setItem(key, '');
        });
    }
    /**
     * Clear localstorage value with specific key
     * @param key 
     */
    clearLocalStorageValue(key: string) {
        localStorage.setItem(key, '');
    }
    /**
     * Clear full localstorage(both key and value)
     */
    clearAllLocalStorageKeyAndValue() {
        localStorage.clear();
    }
    /**
     * Clear localstorage both key and value with specific key 
     * @param key 
     */
    clearLocalStorageKeyAndValue(key: string) {
        localStorage.removeItem(key);
    }
}

import { DatePipe } from '@angular/common';
import { LocalStorageHelper, LOCALSTORAGE_KEY } from './local-storage.helper';
// import { HoxroDatetimeFormats } from 'app/models/datetime-format.model';
import { ValidationHelper } from './validation.helper';

export enum DateTypeEnum {
    Start = 1,
    End = 2
}
export interface IDateRange {
    start?: Date;
    end?: Date;
}
export class DateTimeHelper {

    private static DateAndTimeFormatSeparator: string = '|';
    public static get MinDate(): Date {
        return null;//this.All(DateTypeEnum.Start, DateTypeEnum.Start);//null//new Date(1980, 1, 1);
    }
    public static get MaxDate(): Date {
        return null;
    }
    //#region DateTime Format
    public static get AppDateTimeFormat(): string {
        return this.getDateTimeFormatFromLocalStorage();
    }
    //#endregion

    //#region Date Format
    public static get AppDateFormat(): string {
        return this.getDateFormatFromLocalStorage();
    }
    //#endregion

    //#region Time Format
    public static get AppTimeFormat(): string {
        return this.getTimeFormatFromLocalStorage();
    }
    //#endregion

    //#region Syncfusion Locale
    public static get SyncfusionLocale(): string {
        let format: any = this.getLocaleFromDateFormat(this.getDateFormatFromLocalStorage());
        return format ?? 'en-US';
    }
    public static GetSyncfusionLocale(dateFormat: string): string {
        let format: any = this.getLocaleFromDateFormat(dateFormat);
        return format ?? 'en-US';
    }
    //#endregion

    //#region Different Types of Dates
    public static IsEqualDate(firstDate: Date, secondDate: Date): boolean {
        firstDate = new Date(firstDate);
        firstDate.setHours(0, 0, 0, 0);
        secondDate = new Date(secondDate);
        secondDate.setHours(0, 0, 0, 0);
        return firstDate.getTime() === secondDate.getTime() ? true : false;
    }
    public static IsEqualDateTime(firstDate: Date, secondDate: Date): boolean {
        firstDate = new Date(firstDate);
        secondDate = new Date(secondDate);
        return firstDate.getTime() === secondDate.getTime() ? true : false;
    }
    public static Today(dateType: DateTypeEnum): Date {
        const newDate = new Date();
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static Yesterday(dateType: DateTypeEnum): Date {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() - 1);
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static ThisWeek(weekType: DateTypeEnum, dateType: DateTypeEnum): Date {
        const Now = new Date();
        const newDate = new Date(Now.setDate(Now.getDate() - Now.getDay()));
        if (weekType === DateTypeEnum.End) {
            newDate.setDate(newDate.getDate() + 6);
        }
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static LastWeek(weekType: DateTypeEnum, dateType: DateTypeEnum): Date {
        const Now = new Date();
        const newDate = new Date(Now.setDate(Now.getDate() - Now.getDay()));
        newDate.setDate(newDate.getDate() - 7);
        if (weekType === DateTypeEnum.End) {
            newDate.setDate(newDate.getDate() + 6);
        }
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static ThisMonth(monthType: DateTypeEnum, dateType: DateTypeEnum): Date {
        const Now = new Date();
        let newDate = new Date(Now.getFullYear(), Now.getMonth(), 1);
        if (monthType === DateTypeEnum.End) {
            newDate = new Date(Now.getFullYear(), Now.getMonth() + 1, 0);
        }
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static ThisYear(yearType: DateTypeEnum, dateType: DateTypeEnum): Date {
        const Now = new Date();
        let newDate = new Date(Now.getFullYear(), 0, 1);
        if (yearType === DateTypeEnum.End) {
            newDate = new Date(Now.getFullYear(), 12, 31);
        }
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 999);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    public static All(yearType: DateTypeEnum, dateType: DateTypeEnum): Date {
        let newDate = new Date(1980, 0, 1);
        if (yearType === DateTypeEnum.End) {
            newDate = new Date();
        }
        if (dateType === DateTypeEnum.Start) {
            newDate.setHours(0, 0, 0, 0);
            return newDate;
        }
        else if (dateType === DateTypeEnum.End) {
            newDate.setHours(23, 59, 59, 0);
            return newDate;
        }
        else {
            return newDate;
        }
    }
    //#endregion

    //#region Converter
    public static ConvertToAppDateFormat(date: Date): string {
        const datePipe = new DatePipe(this.GetSyncfusionLocale(this.AppDateFormat));
        const dateStr = datePipe.transform(date, this.AppDateFormat);
        return dateStr;
    }
    public static ConvertToAppDateTimeFormat(date: Date): string {
        const datePipe = new DatePipe(this.GetSyncfusionLocale(this.AppDateFormat));
        const dateStr = datePipe.transform(date, this.AppDateTimeFormat);
        return dateStr;
    }
    public static ConvertToAppTimeFormat(date: Date): string {
        const datePipe = new DatePipe(this.GetSyncfusionLocale(this.AppDateFormat));
        const dateStr = datePipe.transform(date, this.AppTimeFormat);
        return dateStr;
    }
    // Convert UTC Date To User's or company's TimeZone Date
    public static GetConvertedTimeZone(date: Date, isDateOnly: boolean = false): Date {
        if (!ValidationHelper.IsDate(date)) {
            date = new Date(date);
        }
        if (isDateOnly) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
        const dateObj: Date = new Date(date);

        // const utcDateObj = new Date(Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(),
        //     dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds()));

        var tzoffset = dateObj.getTimezoneOffset();
        dateObj.setMinutes(dateObj.getMinutes() - tzoffset);

        const convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: this.getUserTimeZoneName() }));

        return convertedDateObj;

        /*      -------------------For Testing---------------------------
                var dateObj = new Date('2022-03-27 00:59:00');
                var tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                var convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-03-27 01:00:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-10-30 00:59:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-10-30 01:00:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
                console.log(convertedDateObj.toString())
                console.log('------------------------------------------------');
                dateObj = new Date('2022-03-13 06:59:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'US/Eastern' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-03-13 07:00:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'US/Eastern' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-11-06 05:59:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'US/Eastern' }));
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-11-06 06:00:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                convertedDateObj = new Date(dateObj.toLocaleString('en-US', { timeZone: 'US/Eastern' }));
                console.log(convertedDateObj.toString())
        */
    }
    // Convert User's Input Date to Server offset date by adding offset hours
    public static ServerTimezoneOffset(date: Date, isDateOnly: boolean = false): Date {
        if (!ValidationHelper.IsDate(date)) {
            date = new Date(date);
        }
        if (isDateOnly) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
        let dateObj: Date = new Date(date);
        dateObj.setMinutes(dateObj.getMinutes() + this.getTimeZoneOffsetInMinutes(dateObj, this.getUserTimeZoneName()));
        return dateObj;
    }
    // Convert User's Input Date to UTC date If date is send to server as string
    public static ConvertToUtcStr(date: Date, isDateOnly: boolean = false): string {
        if (!ValidationHelper.IsDate(date)) {
            date = new Date(date);
        }
        if (isDateOnly) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
        let dateObj: Date = new Date(date);
        dateObj.setMinutes(dateObj.getMinutes() + this.getTimeZoneOffsetInMinutes(dateObj, this.getUserTimeZoneName()));
        const utcStr = new Date(dateObj.toUTCString()).toISOString();
        return utcStr;

        /*      -------------------For Testing---------------------------
        
                function tzOffset(date){
                console.log(date.toString());
                tzoffset = date.getTimezoneOffset();
                date.setMinutes(date.getMinutes() - tzoffset);
                //date = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
                console.log(date.toString());
                var utcDate = new Date(
                    date.toLocaleString('en-US', {
                        timeZone: 'UTC'
                    })
                    );
                var localDate = new Date(
                    date.toLocaleString('en-US', {
                        timeZone: 'Europe/Dublin'
                    })
                    );
                console.log(localDate.toString());
                console.log(utcDate.toString());
                let timeZoneOffsetInMilliseconds =
                    date.getTime() -
                localDate.getTime();
                let timeZoneOffsetInMinutes = timeZoneOffsetInMilliseconds / 1000 / 60;
                console.log(timeZoneOffsetInMinutes.toString());
                return timeZoneOffsetInMinutes;
                }
                var dateObj = new Date('2022-03-27 00:59:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-03-27 01:00:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-10-30 01:59:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-10-30 02:00:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                console.log('------------------------------------------------');
                dateObj = new Date('2022-10-30 07:00:00');
                tzoffset = dateObj.getTimezoneOffset();
                dateObj.setMinutes(dateObj.getMinutes() - tzoffset);
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                console.log('------------------------------------------------');
                function tzOffset1(date){
                timeZoneOffsetInMilliseconds =
                    new Date().getTime() -
                    new Date(
                    new Date().toLocaleString('en-US', {
                        timeZone: 'US/Eastern'
                    })
                    ).getTime();
                timeZoneOffsetInMinutes = timeZoneOffsetInMilliseconds / 1000 / 60;
                //console.log(timeZoneOffsetInMinutes.toString())
                return timeZoneOffsetInMinutes;
                }
                dateObj = new Date('2022-03-13 01:59:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset1(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-03-13 02:00:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset1(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-11-06 01:59:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset1(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())
                dateObj = new Date('2022-11-06 02:00:00');
                dateObj.setMinutes(dateObj.getMinutes() + tzOffset1(dateObj));
                convertedDateObj = new Date(dateObj.toUTCString()).toISOString();
                console.log(convertedDateObj.toString())    
        */
    }
    public static IsoStr(date: Date, isDateOnly: boolean = false, isLastTime: boolean = false): string {
        // let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        let tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
        if (isDateOnly) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if (isLastTime) {
                date.setHours(11, 59, 59);
            }
        }
        var localISOTime = (new Date(date.getTime() - tzoffset)).toISOString();
        return localISOTime;
    }
    public static AmPmStr(format: string): string {
        if (typeof format === 'string' && ValidationHelper.IsString(format)) {
            return format.replace('tt', 'a');
        }
        return format;
    }
    public static ReplaceDateAndTimeFormatSeparator(format: string): string {
        if (typeof format === 'string' && ValidationHelper.IsString(format)) {
            return format.replace(this.DateAndTimeFormatSeparator, ' ');
        }
        return format;
    }
    public static SplitFormat(datetimeFormat: string, returnDateFormat: boolean = true) {
        if (typeof datetimeFormat === 'string' && ValidationHelper.IsString(datetimeFormat)) {
            let separator: string = ' ';
            if (datetimeFormat.includes(this.DateAndTimeFormatSeparator)) {
                separator = this.DateAndTimeFormatSeparator;
            }
            const formats: string[] = datetimeFormat.split(separator);
            if (!returnDateFormat && formats.length > 1) {
                return this.AmPmStr(formats[1]);
            }
            return this.AmPmStr(formats[0]);
        }
        return datetimeFormat;
    }
    public static FormattedStr(date: Date, format: string = 'YYYY-MM-DD'): string {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    //#endregion

    //#region Age Calculation
    public static DateDifference(fromDatetime: Date, format: string, toDatetime: Date = new Date()): string {
        // let nYear = toDatetime.getFullYear() - fromDatetime.getFullYear();
        let dateDiffInDays = Math.abs(Math.ceil(fromDatetime.getTime() - toDatetime.getTime()) / (1000 * 60 * 60 * 24));
        let nYear = parseInt((dateDiffInDays / 365).toString());

        let toDatetime_Month = toDatetime.getFullYear() * 12 + toDatetime.getMonth();
        let fromDatetime_Month = fromDatetime.getFullYear() * 12 + fromDatetime.getMonth();

        let final_str_year = (nYear > 1) ? nYear + ' years' : nYear + ' year';
        if (format === null || format === undefined || format === '') {
            return '';
        }
        if (format === 'YY') {
            return final_str_year;
        }
        if (format === 'YYMM') {
            let monthDiff = toDatetime_Month - fromDatetime_Month;
            let nMonth_without_fraction = parseInt((monthDiff / 12).toString());
            let nMonth_with_fraction = monthDiff / 12;

            let sMonth = parseInt(((nMonth_with_fraction - nMonth_without_fraction) * 12).toString());
            let final_str_month = (sMonth > 1) ? sMonth + ' months' : sMonth + ' month';
            return final_str_year + ' ' + final_str_month;
        }
        return '';
        // let nMonth = parseInt(((dateDiffInDays / 30) % 12).toString());
        // let sYear = (nYear > 1) ? nYear + ' year' : nYear + ' years';
        // let sMonth = (nMonth > 1) ? nMonth + ' month' : nMonth + 'months';
        // return sYear + ' ' + sMonth;
    }
    public static DateDifferenceOnlyYear(fromDatetime: Date, format: string, toDatetime: Date = new Date()): string {
        let dateDiffInDays = Math.abs(Math.ceil(fromDatetime.getTime() - toDatetime.getTime()) / (1000 * 60 * 60 * 24));
        let nYear = parseInt((dateDiffInDays / 365).toString());

        let final_str_year = (nYear > 1) ? nYear + ' years' : nYear + ' year';
        return final_str_year;
    }
    public static DateDifferenceOnlyMonth(fromDatetime: Date, format: string, toDatetime: Date = new Date()): string {
        let toDatetime_Month = toDatetime.getFullYear() * 12 + toDatetime.getMonth();
        let fromDatetime_Month = fromDatetime.getFullYear() * 12 + fromDatetime.getMonth();
        let monthDiff = toDatetime_Month - fromDatetime_Month;
        let nMonth_without_fraction = parseInt((monthDiff / 12).toString());
        let nMonth_with_fraction = monthDiff / 12;

        let sMonth = parseInt(((nMonth_with_fraction - nMonth_without_fraction) * 12).toString());
        let final_str_month = (sMonth > 1) ? sMonth + ' months' : sMonth + ' month';
        return final_str_month;
    }
    //#endregion

    //#region Private static Methods
    private static getTimeZoneOffsetInMinutes(date: Date, timeZone: string): number {
        let timeZoneOffsetInMilliseconds: number =
            date.getTime() -
            new Date(
                date.toLocaleString('en-US', { timeZone: timeZone })
            ).getTime();

        let timeZoneOffsetInMinutes: number = timeZoneOffsetInMilliseconds / 1000 / 60;
        return timeZoneOffsetInMinutes;
    }
    private static getCurrentTimeZoneOffsetInMinutes(timeZone: string): number {
        let timeZoneOffsetInMilliseconds: number =
            new Date().getTime() -
            new Date(
                new Date().toLocaleString('en-US', {
                    timeZone: timeZone
                })
            ).getTime();

        let timeZoneOffsetInMinutes: number = timeZoneOffsetInMilliseconds / 1000 / 60;
        return timeZoneOffsetInMinutes;
    }
    private static getUserTimeZoneName(): string {
        let user: any = LocalStorageHelper.getItem(LOCALSTORAGE_KEY.USER);;
        return user.timeZoneName;
    }
    private static getDateTimeFormatFromLocalStorage(): string {
        return LocalStorageHelper.getItem(LOCALSTORAGE_KEY.USER_DATE_TIME_FORMAT);
    }
    private static getDateFormatFromLocalStorage(): string {
        return LocalStorageHelper.getItem(LOCALSTORAGE_KEY.USER_DATE_FORMAT);
    }
    private static getTimeFormatFromLocalStorage(): string {
        return LocalStorageHelper.getItem(LOCALSTORAGE_KEY.USER_TIME_FORMAT);
    }
    //#endregion

    private static getLocaleFromDateFormat(format: string): string {
        const localeFormats = [
            { locale: 'af-ZA', format: 'yyyy/MM/dd' },
            { locale: 'am-ET', format: 'd/M/yyyy' },
            { locale: 'ar-AE', format: 'dd/MM/yyyy' },
            { locale: 'ar-BH', format: 'dd/MM/yyyy' },
            { locale: 'ar-DZ', format: 'dd-MM-yyyy' },
            { locale: 'ar-EG', format: 'dd/MM/yyyy' },
            { locale: 'ar-IQ', format: 'dd/MM/yyyy' },
            { locale: 'ar-JO', format: 'dd/MM/yyyy' },
            { locale: 'ar-KW', format: 'dd/MM/yyyy' },
            { locale: 'ar-LB', format: 'dd/MM/yyyy' },
            { locale: 'ar-LY', format: 'dd/MM/yyyy' },
            { locale: 'ar-MA', format: 'dd-MM-yyyy' },
            { locale: 'ar-OM', format: 'dd/MM/yyyy' },
            { locale: 'ar-QA', format: 'dd/MM/yyyy' },
            { locale: 'ar-SA', format: 'dd/MM/yy' },
            { locale: 'ar-SY', format: 'dd/MM/yyyy' },
            { locale: 'ar-TN', format: 'dd-MM-yyyy' },
            { locale: 'ar-YE', format: 'dd/MM/yyyy' },
            { locale: 'arn-CL', format: 'dd-MM-yyyy' },
            { locale: 'as-IN', format: 'dd-MM-yyyy' },
            { locale: 'az-Cyrl-AZ', format: 'dd.MM.yyyy' },
            { locale: 'az-Latn-AZ', format: 'dd.MM.yyyy' },
            { locale: 'ba-RU', format: 'dd.MM.yy' },
            { locale: 'be-BY', format: 'dd.MM.yyyy' },
            { locale: 'bg-BG', format: 'dd.M.yyyy' },
            { locale: 'bn-BD', format: 'dd-MM-yy' },
            { locale: 'bn-IN', format: 'dd-MM-yy' },
            { locale: 'bo-CN', format: 'yyyy/M/d' },
            { locale: 'br-FR', format: 'dd/MM/yyyy' },
            { locale: 'bs-Cyrl-BA', format: 'd.M.yyyy' },
            { locale: 'bs-Latn-BA', format: 'd.M.yyyy' },
            { locale: 'ca-ES', format: 'dd/MM/yyyy' },
            { locale: 'co-FR', format: 'dd/MM/yyyy' },
            { locale: 'cs-CZ', format: 'd.M.yyyy' },
            { locale: 'cy-GB', format: 'dd/MM/yyyy' },
            { locale: 'da-DK', format: 'dd-MM-yyyy' },
            { locale: 'de-AT', format: 'dd.MM.yyyy' },
            { locale: 'de-CH', format: 'dd.MM.yyyy' },
            { locale: 'de-DE', format: 'dd.MM.yyyy' },
            { locale: 'de-LI', format: 'dd.MM.yyyy' },
            { locale: 'de-LU', format: 'dd.MM.yyyy' },
            { locale: 'dsb-DE', format: 'd. M. yyyy' },
            { locale: 'dv-MV', format: 'dd/MM/yy' },
            { locale: 'el-GR', format: 'd/M/yyyy' },
            { locale: 'en-029', format: 'MM/dd/yyyy' },
            { locale: 'en-AU', format: 'd/MM/yyyy' },
            { locale: 'en-BZ', format: 'dd/MM/yyyy' },
            { locale: 'en-CA', format: 'dd/MM/yyyy' },
            { locale: 'en-CA', format: 'dd/MM/yyyy' },
            { locale: 'en-CA', format: 'dd/MM/yyyy' },
            { locale: 'en-GB', format: 'dd/MM/yyyy' },
            { locale: 'en-IE', format: 'dd/MM/yyyy' },
            { locale: 'en-IN', format: 'dd-MM-yyyy' },
            { locale: 'en-JM', format: 'dd/MM/yyyy' },
            { locale: 'en-MY', format: 'd/M/yyyy' },
            { locale: 'en-NZ', format: 'd/MM/yyyy' },
            { locale: 'en-PH', format: 'M/d/yyyy' },
            { locale: 'en-SG', format: 'd/M/yyyy' },
            { locale: 'en-TT', format: 'dd/MM/yyyy' },
            { locale: 'en-US', format: 'M/d/yyyy' },
            { locale: 'en-ZA', format: 'yyyy/MM/dd' },
            { locale: 'en-ZW', format: 'M/d/yyyy' },
            { locale: 'es-AR', format: 'dd/MM/yyyy' },
            { locale: 'es-BO', format: 'dd/MM/yyyy' },
            { locale: 'es-CL', format: 'dd-MM-yyyy' },
            { locale: 'es-CO', format: 'dd/MM/yyyy' },
            { locale: 'es-CR', format: 'dd/MM/yyyy' },
            { locale: 'es-DO', format: 'dd/MM/yyyy' },
            { locale: 'es-EC', format: 'dd/MM/yyyy' },
            { locale: 'es-ES', format: 'dd/MM/yyyy' },
            { locale: 'es-GT', format: 'dd/MM/yyyy' },
            { locale: 'es-HN', format: 'dd/MM/yyyy' },
            { locale: 'es-MX', format: 'dd/MM/yyyy' },
            { locale: 'es-NI', format: 'dd/MM/yyyy' },
            { locale: 'es-PA', format: 'MM/dd/yyyy' },
            { locale: 'es-PE', format: 'dd/MM/yyyy' },
            { locale: 'es-PR', format: 'dd/MM/yyyy' },
            { locale: 'es-PY', format: 'dd/MM/yyyy' },
            { locale: 'es-SV', format: 'dd/MM/yyyy' },
            { locale: 'es-US', format: 'M/d/yyyy' },
            { locale: 'es-UY', format: 'dd/MM/yyyy' },
            { locale: 'es-VE', format: 'dd/MM/yyyy' },
            { locale: 'et-EE', format: 'd.MM.yyyy' },
            { locale: 'eu-ES', format: 'yyyy/MM/dd' },
            { locale: 'fa-IR', format: 'MM/dd/yyyy' },
            { locale: 'fi-FI', format: 'd.M.yyyy' },
            { locale: 'fil-PH', format: 'M/d/yyyy' },
            { locale: 'fo-FO', format: 'dd-MM-yyyy' },
            { locale: 'fr-BE', format: 'd/MM/yyyy' },
            { locale: 'fr-CA', format: 'yyyy-MM-dd' },
            { locale: 'fr-CH', format: 'dd.MM.yyyy' },
            { locale: 'fr-FR', format: 'dd/MM/yyyy' },
            { locale: 'fr-LU', format: 'dd/MM/yyyy' },
            { locale: 'fr-MC', format: 'dd/MM/yyyy' },
            { locale: 'fy-NL', format: 'd-M-yyyy' },
            { locale: 'ga-IE', format: 'dd/MM/yyyy' },
            { locale: 'gd-GB', format: 'dd/MM/yyyy' },
            { locale: 'gl-ES', format: 'dd/MM/yy' },
            { locale: 'gsw-FR', format: 'dd/MM/yyyy' },
            { locale: 'gu-IN', format: 'dd-MM-yy' },
            { locale: 'ha-Latn-NG', format: 'd/M/yyyy' },
            { locale: 'he-IL', format: 'dd/MM/yyyy' },
            { locale: 'hi-IN', format: 'dd-MM-yyyy' },
            { locale: 'hr-BA', format: 'd.M.yyyy.' },
            { locale: 'hr-HR', format: 'd.M.yyyy' },
            { locale: 'hsb-DE', format: 'd. M. yyyy' },
            { locale: 'hu-HU', format: 'yyyy. MM. dd.' },
            { locale: 'hy-AM', format: 'dd.MM.yyyy' },
            { locale: 'id-ID', format: 'dd/MM/yyyy' },
            { locale: 'ig-NG', format: 'd/M/yyyy' },
            { locale: 'ii-CN', format: 'yyyy/M/d' },
            { locale: 'is-IS', format: 'd.M.yyyy' },
            { locale: 'it-CH', format: 'dd.MM.yyyy' },
            { locale: 'it-IT', format: 'dd/MM/yyyy' },
            { locale: 'iu-Cans-CA', format: 'd/M/yyyy' },
            { locale: 'iu-Latn-CA', format: 'd/MM/yyyy' },
            { locale: 'ja-JP', format: 'yyyy/MM/dd' },
            { locale: 'ka-GE', format: 'dd.MM.yyyy' },
            { locale: 'kk-KZ', format: 'dd.MM.yyyy' },
            { locale: 'kl-GL', format: 'dd-MM-yyyy' },
            { locale: 'km-KH', format: 'yyyy-MM-dd' },
            { locale: 'kn-IN', format: 'dd-MM-yy' },
            { locale: 'ko-KR', format: 'yyyy. MM. dd' },
            { locale: 'kok-IN', format: 'dd-MM-yyyy' },
            { locale: 'ky-KG', format: 'dd.MM.yy' },
            { locale: 'lb-LU', format: 'dd/MM/yyyy' },
            { locale: 'lo-LA', format: 'dd/MM/yyyy' },
            { locale: 'lt-LT', format: 'yyyy.MM.dd' },
            { locale: 'lv-LV', format: 'yyyy.MM.dd.' },
            { locale: 'mi-NZ', format: 'dd/MM/yyyy' },
            { locale: 'mk-MK', format: 'dd.MM.yyyy' },
            { locale: 'ml-IN', format: 'dd-MM-yy' },
            { locale: 'mn-MN', format: 'yy.MM.dd' },
            { locale: 'mn-Mong-CN', format: 'yyyy/M/d' },
            { locale: 'moh-CA', format: 'M/d/yyyy' },
            { locale: 'mr-IN', format: 'dd-MM-yyyy' },
            { locale: 'ms-BN', format: 'dd/MM/yyyy' },
            { locale: 'ms-MY', format: 'dd/MM/yyyy' },
            { locale: 'mt-MT', format: 'dd/MM/yyyy' },
            { locale: 'nb-NO', format: 'dd.MM.yyyy' },
            { locale: 'ne-NP', format: 'M/d/yyyy' },
            { locale: 'nl-BE', format: 'd/MM/yyyy' },
            { locale: 'nl-NL', format: 'd-M-yyyy' },
            { locale: 'nn-NO', format: 'dd.MM.yyyy' },
            { locale: 'nso-ZA', format: 'yyyy/MM/dd' },
            { locale: 'oc-FR', format: 'dd/MM/yyyy' },
            { locale: 'or-IN', format: 'dd-MM-yy' },
            { locale: 'pa-IN', format: 'dd-MM-yy' },
            { locale: 'pl-PL', format: 'dd.MM.yyyy' },
            { locale: 'prs-AF', format: 'dd/MM/yy' },
            { locale: 'ps-AF', format: 'dd/MM/yy' },
            { locale: 'pt-BR', format: 'd/M/yyyy' },
            { locale: 'pt-PT', format: 'dd-MM-yyyy' },
            { locale: 'qut-GT', format: 'dd/MM/yyyy' },
            { locale: 'quz-BO', format: 'dd/MM/yyyy' },
            { locale: 'quz-EC', format: 'dd/MM/yyyy' },
            { locale: 'quz-PE', format: 'dd/MM/yyyy' },
            { locale: 'rm-CH', format: 'dd/MM/yyyy' },
            { locale: 'ro-RO', format: 'dd.MM.yyyy' },
            { locale: 'ru-RU', format: 'dd.MM.yyyy' },
            { locale: 'rw-RW', format: 'M/d/yyyy' },
            { locale: 'sa-IN', format: 'dd-MM-yyyy' },
            { locale: 'sah-RU', format: 'MM.dd.yyyy' },
            { locale: 'se-FI', format: 'd.M.yyyy' },
            { locale: 'se-NO', format: 'dd.MM.yyyy' },
            { locale: 'se-SE', format: 'yyyy-MM-dd' },
            { locale: 'si-LK', format: 'yyyy-MM-dd' },
            { locale: 'sk-SK', format: 'd. M. yyyy' },
            { locale: 'sl-SI', format: 'd.M.yyyy' },
            { locale: 'sma-NO', format: 'dd.MM.yyyy' },
            { locale: 'sma-SE', format: 'yyyy-MM-dd' },
            { locale: 'smj-NO', format: 'dd.MM.yyyy' },
            { locale: 'smj-SE', format: 'yyyy-MM-dd' },
            { locale: 'smn-FI', format: 'd.M.yyyy' },
            { locale: 'sms-FI', format: 'd.M.yyyy' },
            { locale: 'sq-AL', format: 'yyyy-MM-dd' },
            { locale: 'sr-Cyrl-BA', format: 'd.M.yyyy' },
            { locale: 'sr-Cyrl-CS', format: 'd.M.yyyy' },
            { locale: 'sr-Cyrl-ME', format: 'd.M.yyyy' },
            { locale: 'sr-Cyrl-RS', format: 'd.M.yyyy' },
            { locale: 'sr-Latn-BA', format: 'd.M.yyyy' },
            { locale: 'sr-Latn-CS', format: 'd.M.yyyy' },
            { locale: 'sr-Latn-ME', format: 'd.M.yyyy' },
            { locale: 'sr-Latn-RS', format: 'd.M.yyyy' },
            { locale: 'sv-FI', format: 'd.M.yyyy' },
            { locale: 'sv-SE', format: 'yyyy-MM-dd' },
            { locale: 'sw-KE', format: 'M/d/yyyy' },
            { locale: 'syr-SY', format: 'dd/MM/yyyy' },
            { locale: 'ta-IN', format: 'dd-MM-yyyy' },
            { locale: 'te-IN', format: 'dd-MM-yy' },
            { locale: 'tg-Cyrl-TJ', format: 'dd.MM.yy' },
            { locale: 'th-TH', format: 'd/M/yyyy' },
            { locale: 'tk-TM', format: 'dd.MM.yy' },
            { locale: 'tn-ZA', format: 'yyyy/MM/dd' },
            { locale: 'tr-TR', format: 'dd.MM.yyyy' },
            { locale: 'tt-RU', format: 'dd.MM.yyyy' },
            { locale: 'tzm-Latn-DZ', format: 'dd-MM-yyyy' },
            { locale: 'ug-CN', format: 'yyyy-M-d' },
            { locale: 'uk-UA', format: 'dd.MM.yyyy' },
            { locale: 'ur-PK', format: 'dd/MM/yyyy' },
            { locale: 'uz-Cyrl-UZ', format: 'dd.MM.yyyy' },
            { locale: 'uz-Latn-UZ', format: 'dd/MM yyyy' },
            { locale: 'vi-VN', format: 'dd/MM/yyyy' },
            { locale: 'wo-SN', format: 'dd/MM/yyyy' },
            { locale: 'xh-ZA', format: 'yyyy/MM/dd' },
            { locale: 'yo-NG', format: 'd/M/yyyy' },
            { locale: 'zh-CN', format: 'yyyy/M/d' },
            { locale: 'zh-HK', format: 'd/M/yyyy' },
            { locale: 'zh-MO', format: 'd/M/yyyy' },
            { locale: 'zh-SG', format: 'd/M/yyyy' },
            { locale: 'zh-TW', format: 'yyyy/M/d' },
            { locale: 'zu-ZA', format: 'yyyy/MM/dd' },
        ];

        return localeFormats.find(x => x.format === format)?.locale;
    }
}
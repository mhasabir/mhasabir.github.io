export interface IAutocompleteDropdownConfig {
    id: string;
    primaryKey: string;
    headerText: string;
    placeholder: string;
    appearance: string;
    removeUnderline: boolean;
    iconClass: string;

    allowApiSearching: boolean;
    searchText: string;

    columns: IAutocompleteDropdownColumn[];
    sortSettings: IAutocompleteDropdownSortSetting;
}
export class AutocompleteDropdownConfig implements IAutocompleteDropdownConfig {
    constructor(options?: IAutocompleteDropdownOptionalParams) {
        this.id = Math.floor(Math.random() * 1000000000).toString();
        this.primaryKey = (typeof options?.primaryKey !== 'undefined') ? options.primaryKey : null;
        this.headerText = (typeof options?.headerText !== 'undefined') ? options.headerText : null;
        this.appearance = (typeof options?.appearance !== 'undefined') ? options.appearance : 'outline';//legacy, standard, fill, outline 
        this.removeUnderline = (typeof options?.removeUnderline !== 'undefined') ? options.removeUnderline : false;
        this.iconClass = (typeof options?.iconClass !== 'undefined') ? options.iconClass : 'icons-down';
        this.allowApiSearching = (typeof options?.allowApiSearching !== 'undefined') ? options.allowApiSearching : false;
        this.searchText = (typeof options?.searchText !== 'undefined') ? options.searchText : '';

        this.columns = [];
        if (options?.columns?.length > 0) {
            options.columns.forEach(col => {
                this.columns.push(new AutocompleteDropdownColumn(col));
            });
        }
        this.sortSettings = new AutocompleteDropdownSortSetting(options?.sortSettings);
    }
    id: string;
    primaryKey: string;
    headerText: string;
    placeholder: string;
    appearance: string;
    removeUnderline: boolean;
    iconClass: string;

    allowApiSearching: boolean;
    searchText: string;

    columns: IAutocompleteDropdownColumn[];
    sortSettings: IAutocompleteDropdownSortSetting;
}
export interface IAutocompleteDropdownOptionalParams {
    primaryKey?: string;
    headerText?: string;
    placeholder?: string;
    appearance?: string;
    removeUnderline?: boolean;
    iconClass?: string;

    allowApiSearching?: boolean;
    searchText?: string;

    columns?: IAutocompleteDropdownColumn[];
    sortSettings?: IAutocompleteDropdownSortSetting;
}
export interface IAutocompleteDropdownSortSetting {
    allowSorting: boolean;
    columnName: string;
    dataType: string;
    isAscending: boolean;
}
export class AutocompleteDropdownSortSetting implements IAutocompleteDropdownSortSetting {
    constructor(options?: ISortSettingOptionalParams) {
        this.allowSorting = (typeof options?.allowSorting !== 'undefined') ? options.allowSorting : true;
        this.columnName = (typeof options?.columnName !== 'undefined') ? options.columnName : null;
        this.dataType = (typeof options?.dataType !== 'undefined') ? options.dataType : 'string';
        this.isAscending = (typeof options?.isAscending !== 'undefined') ? options.isAscending : true;
    }
    allowSorting: boolean;
    columnName: string;
    dataType: string;
    isAscending: boolean;
}
export interface ISortSettingOptionalParams {
    allowSorting?: boolean;
    columnName?: string;
    dataType?: string;
    isAscending?: boolean;
}
export interface IAutocompleteDropdownColumn {
    name: string;
    isStaticData?: boolean;
    showInSelection?: boolean;
    showInDropdown?: boolean;
}
export class AutocompleteDropdownColumn implements IAutocompleteDropdownColumn {
    constructor(options?: IColumnOptionalParams) {
        this.name = (typeof options?.name !== 'undefined') ? options.name : null;
        this.isStaticData = (typeof options?.isStaticData !== 'undefined') ? options.isStaticData : false;
        this.showInSelection = (typeof options?.showInSelection !== 'undefined') ? options.showInSelection : true;
        this.showInDropdown = (typeof options?.showInDropdown !== 'undefined') ? options.showInDropdown : true;
    }
    name: string;
    isStaticData?: boolean;
    showInSelection?: boolean;
    showInDropdown?: boolean;
}
export interface IColumnOptionalParams {
    name: string;
    isStaticData?: boolean;
    showInSelection?: boolean;
    showInDropdown?: boolean;
}
// export class AutocompleteDropdownColumn implements IAutocompleteDropdownColumn {
//     constructor() {
//         this.name = null;
//         this.isPrimaryKey = false;
//         this.isStaticData = false;
//         this.showInSelection = true;
//         this.showInDropdown = true;
//     }
//     name: string;
//     isPrimaryKey?: boolean;
//     isStaticData?: boolean;
//     showInSelection?: boolean;
//     showInDropdown?: boolean;
// }
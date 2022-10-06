export namespace TableConfig {

  export interface ITableConfig {
    tableId: string;
    rowHeight: number;
    columns: IColumn[];

    // allowSorting: boolean;
    // sortSettings: SortSettingsModel;

    // allowFiltering: boolean;
    // filterSettings: FilterSettingsModel;

    // allowSearching: boolean;
    // searchSettings: SearchSettingsModel;

    // allowSelection: boolean;
    // selectionSettings: SelectionSettingsModel;

    allowPaging: boolean;
    pageSettings: IPageSettings;

    // allowResizing: boolean;
    // allowReordering: boolean;
    // showColumnChooser: boolean;
    // allowExcelExport: boolean;
    // allowPdfExport: boolean;
    // enableVirtualization: boolean;

    // toolbarItems: ToolbarItems[] | object;
    // gridColumns: ColumnModel[];

    // enableDescription: boolean;
    // enableToolbar: boolean;
    // sortingColumn: string;
    // sortingDirection: string;
    // modelName: string;
    // rowDoubleClickRoute: string;
    // rowDoubleClickRouteLayerType: LayerEnum;
  }
  export class TableConfig implements ITableConfig {
    constructor() {
      this.tableId = Math.floor(Math.random() * 1000000000).toString();
      this.rowHeight = 37;
      this.columns = [];

      // this.sortingColumn = 'createdDate';
      // this.sortingDirection = 'desc';
      // this.allowSorting = true;
      // this.sortSettings = { columns: [{ field: this.sortingColumn, direction: (this.sortingDirection === 'desc') ? 'Descending' : 'Ascending' }], allowUnsort: false };
      // // this.sortSettings = { columns: [{ field: 'createdDate', direction: 'Descending' }], allowUnsort: false };
      // this.allowFiltering = true;
      // this.filterSettings = { type: 'FilterBar', mode: 'Immediate' };
      // this.allowSearching = true;
      // this.searchSettings = { fields: [], operator: 'contains', key: '', ignoreCase: true };
      // this.allowSelection = true;
      // this.selectionSettings = { type: 'Multiple', checkboxMode: 'ResetOnRowClick', mode: 'Row', enableToggle: false, persistSelection: true };
      // this.allowPaging = true;
      this.pageSettings = { pageSize: 20, pageIndex: 0, pageCount: 1, totalCount: 20, pageSizeOptions: [20, 30, 50, 100], showFirstLastButtons: true };
      // this.allowResizing = true;
      // this.allowReordering = true;
      // this.showColumnChooser = true;
      // this.allowExcelExport = true;
      // this.allowPdfExport = true;
      // this.enableVirtualization = true;
      // this.toolbarItems = [];
      // this.gridColumns = [];
      // this.enableDescription = true;
      // this.enableToolbar = true;
      // this.modelName = '';
      // this.rowDoubleClickRouteLayerType = LayerEnum.layer1;
      // this.userPreferenceId = 0;
      // this.moduleKeyId = 0;
      // this.moduleId = 0;
    }
    tableId: string;
    rowHeight: number;
    columns: IColumn[];

    // allowSorting: boolean;
    // sortSettings: SortSettingsModel;

    // allowFiltering: boolean;
    // filterSettings: FilterSettingsModel;

    // allowSearching: boolean;
    // searchSettings: SearchSettingsModel;

    // allowSelection: boolean;
    // selectionSettings: SelectionSettingsModel;

    allowPaging: boolean;
    pageSettings: IPageSettings;

    // allowResizing: boolean;
    // allowReordering: boolean;
    // showColumnChooser: boolean;
    // allowExcelExport: boolean;
    // allowPdfExport: boolean;
    // enableVirtualization: boolean;

    // toolbarItems: ToolbarItems[] | object;
    // gridColumns: ColumnModel[];

    // enableDescription: boolean;
    // enableToolbar: boolean;
    // sortingColumn: string;
    // sortingDirection: string;
    // modelName: string;
    // rowDoubleClickRoute: string;
    // rowDoubleClickRouteLayerType: LayerEnum;
  }

  export interface ITableData {
    rows: any[];
    count: number;
    resetGrid: boolean;
  }
  export enum DataTypeEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date",
    Datetime = "datetime",
    Decimal = "decimal",
  }
  export enum ColumnTypeEnum {
    String = "string",
    Number = "number",
    Currency = "currency",
    Datetime = "datetime",
    Boolean = "boolean",
    Image = 'image',
    Link = 'link',

    Date = "date",
    Decimal = "decimal",
  }
  export enum ActionEnum {
    View = "view",
    Edit = "edit",
    Delete = "delete",
  }
  export interface IActionEvent {
    type: ActionEnum;
    data: any;
  }
  export interface IColumn {
    name: string;
    header: string;
    dataType: DataTypeEnum;
    type: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
    footer?: IFooter;
  }
  export class Column implements IColumn {
    constructor(name: string, options?: IColumnOptionalParams) {
      this.name = name;
      this.header = options?.header ? options.header : name;
      this.dataType = options?.dataType ? options.dataType : DataTypeEnum.String;
      this.type = options?.type ? options.type : ColumnTypeEnum.String;
      this.format = options?.format ? options.format : undefined;

      this.visible = (options?.visible == null) ? true : options.visible;
      this.columnChooser = (options?.columnChooser == null) ? this.visible : options.columnChooser;
      this.isPrimaryKey = (options?.isPrimaryKey == null) ? false : options.isPrimaryKey;

      this.headerTemplate = options?.headerTemplate ? options.headerTemplate : null;
      this.template = options?.template ? options.template : null;
    }
    name: string;
    header: string;
    dataType: DataTypeEnum;
    type: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
    footer?: IFooter;
  }
  interface IColumnOptionalParams {
    header?: string;
    dataType?: DataTypeEnum;
    type?: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    isPrimaryKey?: boolean;
    headerTemplate?: any;
    template?: any;
  }
  export interface IFooter {
    name: string;
    value: any;
    type: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    template?: any;
  }
  export class Footer implements IFooter {
    constructor(name: string, value: any, options?: IFooterOptionalParams) {
      this.name = name;
      this.value = value;
      this.type = options?.type ? options.type : ColumnTypeEnum.String;
      this.format = options?.format ? options.format : undefined;
      this.visible = (options?.visible == null) ? true : options.visible;
      this.columnChooser = (options?.columnChooser == null) ? this.visible : options.columnChooser;
      this.template = options?.template ? options.template : null;
    }
    name: string;
    value: any;
    type: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    template?: any;
  }
  interface IFooterOptionalParams {
    type?: ColumnTypeEnum;
    format?: string;
    columnChooser?: boolean;
    visible?: boolean;
    template?: any;
  }
  export interface IPageSettings {
    pageSize: number;
    pageSizeOptions: number[];
    pageIndex: number;
    pageCount: number;
    totalCount: number;
    showFirstLastButtons: boolean;
  }
  export class PageSettings implements IPageSettings {
    constructor(options?: IPageSettingsOptionalParams) {
      this.pageSize = options?.pageSize ? options.pageSize : 20;
      this.pageSizeOptions = options?.pageSizeOptions ? options.pageSizeOptions : [20, 30, 50, 100];
      this.pageIndex = options?.pageIndex ? options.pageIndex : 0;
      this.totalCount = options?.totalCount ? options.totalCount : 20;
      this.pageCount = this.totalCount / this.pageSize;
      this.showFirstLastButtons = (typeof options?.showFirstLastButtons !== 'undefined') ? options.showFirstLastButtons : true;
    }
    pageSize: number;
    pageSizeOptions: number[];
    pageIndex: number;
    pageCount: number;
    totalCount: number;
    showFirstLastButtons: boolean;
  }
  interface IPageSettingsOptionalParams {
    pageSize?: number;
    pageSizeOptions?: number[];
    pageIndex?: number;
    totalCount?: number;
    showFirstLastButtons?: boolean;
  }
  export interface IRequestBody {
    skip: number;
    pageSize: number;
    sortingColumn?: string;
    sortingOrder?: string;
    searchValue?: string;
  }
  // export interface ITableReload {
  //   isFromBegining?: boolean;
  //   params?: IFindTableValueParam[];
  //   resetGrid?: boolean;
  // }
  // export interface ITableRequestBody {
  //   columns: IFindTableValueColumn[];
  //   from: number;
  //   modelName: string;
  //   pageSize: number;
  //   params: IFindTableValueParam[];
  // }

}

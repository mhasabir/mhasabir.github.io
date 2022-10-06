import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConfig } from '../table.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  formatType: string = 'number';
  displayedColumns: string[] = ['select'];
  dataSource1: PeriodicElement[] = [];
  resultsLength = 1000;
  isLoadingResults = true;
  isRateLimitReached = false;
  clickedRows: any[] = [];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex + 1, event.currentIndex + 1);
  }
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      // this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      // this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  //#region Variables Declaration
  public selectedRows: any[] = [];
  // protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  //#endregion

  //#region Constructor
  constructor() {
    let temp: PeriodicElement[] = [];
    for (let index = 1; index <= 1000; index++) {
      let obj: PeriodicElement = { position: index, name: 'Name - ' + index, weight: 1.0079, symbol: 'H - ' + index }
      temp.push(obj);
    }
    this.dataSource1 = temp;
  }
  //#endregion

  //#region Input & Output
  private _noDataMsg: string = 'No data found!';
  @Input() set noDataMsg(value: string) {
    if (value) {
      this._noDataMsg = value;
    }
  }
  get noDataMsg(): string {
    return this._noDataMsg;
  }
  private _columns: TableConfig.IColumn[] = [];
  @Input() set columns(values: TableConfig.IColumn[]) {
    if (values) {
      this._columns = values;
      this.displayedColumns = [...this.displayedColumns, ...this.columns.map(c => c.name), ...['Actions']];
      console.log('columns............................................................');
    }
  }
  get columns(): TableConfig.IColumn[] {
    return this._columns;
  }
  private _dataSource: any[] = [];
  @Input() set dataSource(value: any[]) {
    if (value) {
      this._dataSource = value;
      console.log('dataSource............................................................');
    }
  }
  get dataSource(): any[] {
    return this._dataSource;
  }
  @Input() set totalCount(value: number) {
    if (value > 0) {
      this.pageSettings.totalCount = value;
    }
  }
  private _searchValue: string = '';
  @Input() set searchValue(value: string) {
    if (value) {
      this._searchValue = value;
    }
  }
  get searchValue(): string {
    return this._searchValue;
  }
  private _actions: TableConfig.ActionEnum[] = [TableConfig.ActionEnum.View, TableConfig.ActionEnum.Edit, TableConfig.ActionEnum.Delete];
  @Input() set actions(values: TableConfig.ActionEnum[]) {
    if (values) {
      this._actions = values;
      if (values.length === 0) {
        this.displayedColumns.splice(this.displayedColumns.indexOf('Actions'), 1);
      }
    }
  }
  get actions(): TableConfig.ActionEnum[] {
    return this._actions;
  }
  private _footers: TableConfig.IFooter[] = [];
  @Input() set footers(values: TableConfig.IFooter[]) {
    if (values) {
      this._footers = values;
      this.footers.forEach(element => {
        let col = this.columns.find(x => x.name === element.name);
        col.footer = element;
      });
    }
  }
  get footers(): TableConfig.IFooter[] {
    return this._footers;
  }
  private _allowPaging: boolean = true;
  @Input() set allowPaging(value: boolean) {
    if (value != null) {
      this._allowPaging = value;
    }
  }
  get allowPaging(): boolean {
    return this._allowPaging;
  }
  private _pageSettings: TableConfig.IPageSettings = new TableConfig.PageSettings();
  @Input() set pageSettings(value: TableConfig.IPageSettings) {
    if (value) {
      this._pageSettings = value;
    }
  }
  get pageSettings(): TableConfig.IPageSettings {
    return this._pageSettings;
  }
  // private _tableConfig: ITableConfig = new TableConfig();
  // @Input() set tableConfig(value: ITableConfig) {
  //   if (value) {
  //     this._tableConfig = value;
  //     console.log('Table Config............................................................');
  //   }
  // }
  // get tableConfig(): ITableConfig {
  //   return this._tableConfig;
  // }
  @Output() getDataSource: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowDeselected: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionClicked: EventEmitter<TableConfig.IActionEvent> = new EventEmitter<TableConfig.IActionEvent>();
  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX
    // .pipe(takeUntil(this.ngUnsubscribe$))
    this.getData();
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {
    // this.ngUnsubscribe$.next();
    // this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public onRowClicked($event: any, row: any): void {
    if ($event) {
      this.selection.toggle(row);
      this.clickedRows.push(row);
    }
    this.selectedRows = this.selection.selected;
    console.log('Selected list', this.selectedRows);
    this.selection.isSelected(row) ? this.rowSelected.emit(row) : this.rowDeselected.emit(row);
  }
  public onActionClicked($event: any, action: TableConfig.ActionEnum, row: any): void {
    if ($event) {
      $event.stopPropagation();
    }
    this.actionClicked.emit({ type: action, data: row });
  }
  public handlePageEvent(event: PageEvent): void {
    this.pageSettings.totalCount = event.length;
    this.pageSettings.pageSize = event.pageSize;
    this.pageSettings.pageIndex = event.pageIndex;
    this.getData();
  }
  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods
  private getData(): void {
    // this.showGridInstanceSpinner = true;
    // this.selectedRecordsCount = 0;
    const requestBody = this.getRequestBody();
    this.getDataSource.emit(requestBody);
  }
  private getRequestBody(): TableConfig.IRequestBody {
    const requestBody: TableConfig.IRequestBody = {
      skip: this.pageSettings.pageIndex * this.pageSettings.pageSize,
      pageSize: this.pageSettings.pageSize,
      sortingColumn: '',
      sortingOrder: '',
      searchValue: this.searchValue
    };
    return requestBody;
  }
  //#endregion
}

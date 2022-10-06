import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { debounceTime, map, startWith, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { IAutocompleteDropdownConfig } from './autocomplete-dropdown.model';
import { SortHelper, SortObjectHelper } from 'src/app/helpers/sort.helper';

@Component({
  selector: 'app-autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styleUrls: ['./autocomplete-dropdown.component.scss']
})
export class AutocompleteDropdownComponent implements OnInit {
  //#region Variables Declaration
  public inputFormControl = new FormControl();
  public filteredData: Observable<string[]>;
  private primaryKeyColumnName: string;
  public isDataSourceObjectType: boolean = false;
  public disableDropdown: boolean = false;

  public allDatas: any[] = [];
  public selectedData: any;
  public inputValueStr: string;
  @ContentChild('template') template: TemplateRef<ElementRef>;
  // protected ngUnsubscribe$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Input & Output
  private _config: IAutocompleteDropdownConfig;
  @Input() set config(value: IAutocompleteDropdownConfig) {
    if (value) {
      this.setPrimaryKeyColumnName(value);
      this._config = value;
    }
    // console.log('AutocompleteConfig............................................................');
  }
  get config(): IAutocompleteDropdownConfig {
    return this._config;
  }
  private _dataSource: any[];
  @Input() set dataSource(value: any[]) {
    if (value) {
      this._dataSource = value;
      // if (value.length === 1) this.disableDropdown = true;
      this.setDataSourceType(value);
      this.allDatas = this.dataSource;
      this.setFilteredData();
    }
    // console.log('dataSource............................................................');
  }
  get dataSource(): any[] {
    return this._dataSource;
  }
  private _value: any;
  @Input() set value(value: any) {
    if (value) {
      this._value = value;
      let selectedData: any;
      if (this.isDataSourceObjectType) {
        let data: any = this.dataSource.find(x => x[this.primaryKeyColumnName]?.toString().toLowerCase() === value.toString().toLowerCase());
        selectedData = data;
      }
      else {
        let data: any = this.dataSource.find(x => x.toString().toLowerCase() === value.toString().toLowerCase());
        selectedData = data;
      }
      if (selectedData) {
        this.setSelectedData(selectedData);
      }
    }
    // console.log('selectedData............................................................');
  }
  get value(): any {
    return this._value;
  }
  @Output() notifyChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataSourceChange: EventEmitter<any> = new EventEmitter<any>();
  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX

  }
  // ngAfterViewInit() {

  // }
  ngOnDestroy() {
    // this.ngUnsubscribe$.next();
    // this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public onSelected(event: MatAutocompleteSelectedEvent): void {
    const data: any = event.option.value;
    this.setSelectedData(data);
  }
  public onClicked($event: any): void {
    if ($event) {
      $event.stopPropagation();
    }
    this.inputFormControl.setValue('');

    // switch (action) {
    //   case 'actionType':
    //     if (this.actionTypeName && this.actionTypeName !== "") {
    //       return;
    //     }
    //     this.actionTypeName = "";
    //     break;
    // }
  }
  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods
  private setPrimaryKeyColumnName(value: IAutocompleteDropdownConfig): void {
    if (value.columns?.length > 0) {
      // let col = value.columns.find(x => x.isPrimaryKey === true);
      // if (!col) {
      //   col = value.columns[0];
      // }
      // this.primaryKeyColumnName = col.name;

      // if (value.sortSettings.allowSorting) {
      //   if (!value.sortSettings.columnName) {
      //     value.sortSettings.columnName = this.primaryKeyColumnName;
      //   }
      //   if (!value.sortSettings.direction) {
      //     value.sortSettings.direction = 'UP';
      //   }
      // }
    }
    this.primaryKeyColumnName = value.primaryKey;
  }
  private setDataSourceType(dataSource: any[]): void {
    if (dataSource?.length > 0) {
      const data: any = dataSource[0];
      const type: string = typeof (data);
      if (type === 'object') {
        this.isDataSourceObjectType = true;
        if (this.config.sortSettings.allowSorting) {
          if (!this.config.sortSettings.columnName) {
            this.config.sortSettings.columnName = this.primaryKeyColumnName;
          }
          this.config.sortSettings.dataType = typeof (data[this.config.sortSettings.columnName]);
        }
      }
    }
  }
  private setSelectedData(data: any): void {
    let inputValue: string = '';
    if (this.config.columns?.length > 0) {
      this.config.columns.forEach(col => {
        if (col.showInSelection) {
          if (col.isStaticData) {
            inputValue += col.name;
          }
          else {
            inputValue += data[col.name];
          }
        }
      });
    }
    this.inputValueStr = inputValue;
    this.selectedData = data;
    this.notifyChange.emit(data);
  }
  private setFilteredData(): void {
    this.filteredData = this.inputFormControl.valueChanges.pipe(
      debounceTime(this.config.allowApiSearching ? 300 : 0),
      startWith(""),
      map((value: any | null) => this.filter(value, this.allDatas)
      ));
  }
  private filter(value: any | null, datas: any[]): any[] {
    let filteredDatas = [];
    if (this.config.allowApiSearching && typeof (value) === 'string' && value.trim().length > 0) {
      this.dataSourceChange.emit(value);
    }
    else {
      filteredDatas = this.filterLocalData(value, datas);
    }
    return filteredDatas;
  }
  private filterLocalData(value: any | null, datas: any[]): any[] {
    let filteredDatas = datas.slice();
    if (value) {
      const type: string = typeof (value);
      if (type === 'string' && value.trim().length > 0) {
        filteredDatas = this.selectedData ? this.filterByValueWithSelectedData(value, datas) : this.filterByValue(value, datas);
      }
      else if (type === 'object') {
        filteredDatas = this.filterByObject(value, datas);
      }
    }
    if (this.config.sortSettings.allowSorting) {
      if (this.config.sortSettings.dataType === 'string') {
        return (this.isDataSourceObjectType) ? filteredDatas.slice().sort(SortObjectHelper.String(this.config.sortSettings.columnName, this.config.sortSettings.isAscending))
          : filteredDatas.slice().sort(SortHelper.String(this.config.sortSettings.isAscending));
      }
      else if (this.config.sortSettings.dataType === 'number') {
        return (this.isDataSourceObjectType) ? filteredDatas.slice().sort(SortObjectHelper.Number(this.config.sortSettings.columnName, this.config.sortSettings.isAscending))
          : filteredDatas.slice().sort(SortHelper.Number(this.config.sortSettings.isAscending));
      }
      else if (this.config.sortSettings.dataType === 'date') {
        return (this.isDataSourceObjectType) ? filteredDatas.slice().sort(SortObjectHelper.Date(this.config.sortSettings.columnName, this.config.sortSettings.isAscending))
          : filteredDatas.slice().sort(SortHelper.Date(this.config.sortSettings.isAscending));
      }
      else if (this.config.sortSettings.dataType === 'boolean') {
        return (this.isDataSourceObjectType) ? filteredDatas.slice().sort(SortObjectHelper.Boolean(this.config.sortSettings.columnName, this.config.sortSettings.isAscending))
          : filteredDatas.slice().sort(SortHelper.Boolean(this.config.sortSettings.isAscending));
      }
      else {
        return filteredDatas.slice();
      }
    }
    else {
      return filteredDatas.slice();
    }
  }
  private filterByObject(object: any, datas: any[]): any[] {
    console.log('_filter By Object------------------------------------------------------------');
    if (this.isDataSourceObjectType) {
      return datas.filter(data => data[this.primaryKeyColumnName]?.toString().toLowerCase() !== object[this.primaryKeyColumnName]?.toString().toLowerCase());
    }
    else {
      return datas.filter(data => data.toString().toLowerCase() !== object.toString().toLowerCase());
    }
  }
  private filterByValue(value: string, datas: any[]): any[] {
    console.log('_filter By Value------------------------------------------------------------');
    if (this.isDataSourceObjectType) {
      let filteredDatas = datas.filter(x =>
        this.config.columns.filter(c => c.isStaticData === false).some(col => {
          if (x[col.name]?.toString().toLowerCase().includes(value.toLowerCase())) {
            return x;
          }
        })
      );
      return filteredDatas;
    }
    else {
      let filteredDatas = datas.filter(x => x?.toString().toLowerCase().includes(value.toLowerCase()));
      return filteredDatas;
    }
  }
  private filterByValueWithSelectedData(value: string, datas: any[]): any[] {
    console.log('_filter By Value------------------------------------------------------------');
    if (this.isDataSourceObjectType) {
      let filteredDatas = datas.filter(x =>
        this.config.columns.filter(c => c.isStaticData === false).some(col => {
          if (x[col.name]?.toString().toLowerCase().includes(value.toLowerCase())
            || this.selectedData[this.primaryKeyColumnName].toString().toLowerCase() === x[this.primaryKeyColumnName].toString().toLowerCase()) {
            return x;
          }
        })
      );
      return filteredDatas;
    }
    else {
      let filteredDatas = datas.filter(x => x?.toString().toLowerCase().includes(value.toLowerCase())
        || this.selectedData.toString().toLowerCase() === x.toString().toLowerCase());
      return filteredDatas;
    }
  }
  //#endregion
}
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TableConfig } from 'src/app/plugins/table/table.model';
import { Campaign } from '../../models/campaign.model';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {
  //#region Variables Declaration
  protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  public columns: TableConfig.IColumn[] = [
    new TableConfig.Column('id', { header: 'S/N', type: TableConfig.ColumnTypeEnum.Number }),
    new TableConfig.Column('code', { header: 'Reg.No', type: TableConfig.ColumnTypeEnum.String }),
    new TableConfig.Column('name', { header: 'Name', type: TableConfig.ColumnTypeEnum.String }),
    new TableConfig.Column('cost', { header: 'Cost', type: TableConfig.ColumnTypeEnum.Currency }),
    new TableConfig.Column('description', { header: 'Description', type: TableConfig.ColumnTypeEnum.String }),
    new TableConfig.Column('fee', { header: 'Fee', type: TableConfig.ColumnTypeEnum.Currency, format: '"BDT":"symbol"' }),
    new TableConfig.Column('startDate', { header: 'Date', type: TableConfig.ColumnTypeEnum.Datetime, format: 'dd/MM/yyyy' }),
    // new TableConfig.Column('url', { header: 'Image', type: TableConfig.ColumnTypeEnum.Image }),
    new TableConfig.Column('isActive', { header: 'Is Active', type: TableConfig.ColumnTypeEnum.Boolean, format: 'checkbox' }),
    new TableConfig.Column('successRatio', { header: 'Success Ratio', type: TableConfig.ColumnTypeEnum.Number, format: '1.2-2' }),
    new TableConfig.Column('url', { header: 'Image Location', type: TableConfig.ColumnTypeEnum.Link }),
  ];
  public dataSource: any[] = [

  ];
  public totalCount: number = 0;
  public footers: TableConfig.IFooter[] = [];
  //#endregion

  //#region Constructor
  constructor(private _campaignService: CampaignService) {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public getDataSource(requestBody: TableConfig.IRequestBody): void {
    this.getCampaignPaginationDatas(requestBody);
  }
  public onActionClicked($event: TableConfig.IActionEvent): void {
    console.log($event);
  }
  public onRowSelected(data: Campaign): void {
    console.log('onRowSelected', data);
  }
  public onRowDeselected(data: Campaign): void {
    console.log('onRowDeselected', data);
  }
  //#endregion

  //#region Api Methods
  private getCampaignDatas(): void {
    this._campaignService.get().pipe(takeUntil(this.ngUnsubscribe$)).subscribe(res => {
      this.dataSource = res;
      this.footers = [
        new TableConfig.Footer('id', 100000, { format: '1.2-2' }),
        new TableConfig.Footer('cost', 1000.77),
      ];
      this.totalCount = 99999;
    });
  }
  private getCampaignPaginationDatas(requestBody: TableConfig.IRequestBody): void {
    this._campaignService.getPaginationData(requestBody).pipe(takeUntil(this.ngUnsubscribe$)).subscribe(res => {
      this.dataSource = res;
      this.footers = [
        new TableConfig.Footer('id', 100000, { format: '1.2-2' }),
        new TableConfig.Footer('cost', 1000.77),
      ];
      this.totalCount = 99999;
    });
  }
  //#endregion

  //#region Private Methods

  //#endregion
}

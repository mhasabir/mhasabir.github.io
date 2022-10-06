import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campaign, ICampaign } from '../../models/campaign.model';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {
  //#region Variables Declaration
  protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  public campaign: ICampaign = new Campaign();
  public submitted = false;
  //#endregion

  //#region Constructor
  constructor(
    private _campaignService: CampaignService
  ) {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    this.getCampaign(2);
  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events

  //#endregion

  //#region Api Methods
  private getCampaign(campaignId: number): void {
    this._campaignService.getById(campaignId).pipe(takeUntil(this.ngUnsubscribe$)).subscribe((res: ICampaign) => {
      if (res) {
        this.campaign = res;
      }
    }, (err => {
      console.log('action cannot perform, something went wrong!');
    }));
  }
  //#endregion

  //#region Private Methods

  //#endregion
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campaign, ICampaign } from '../../models/campaign.model';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
  //#region Variables Declaration
  protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  public campaignForm: FormGroup;
  public campaign: ICampaign = new Campaign();
  public submitted = false;
  //#endregion

  //#region Constructor
  constructor(
    private fb: FormBuilder,
    private _campaignService: CampaignService
  ) {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    this.buildForm();
    this.setProperties();
  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public get bForm() {
    return this.campaignForm.controls;
  }
  public save(): void {
    this.submitted = true;
    if (this.campaignForm.invalid) {
      this.submitted = false;
      Object.keys(this.campaignForm.controls).forEach(field => {
        const control = this.campaignForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    this.createCampaign(this.campaign);
  }
  //#endregion

  //#region Api Methods
  private createCampaign(campaign: ICampaign): void {
    this._campaignService.post(campaign).pipe(takeUntil(this.ngUnsubscribe$)).subscribe((res: ICampaign) => {
      if (res) {
        console.log(res);
      }
    }, (err => {
      console.log('action cannot perform, something went wrong!');
    }));
  }
  //#endregion

  //#region Private Methods
  private buildForm() {
    // this.campaignForm = this.fb.group({
    //   varcharData: [
    //     this.campaign?.varcharData,
    //     [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
    //   ],
    //   emailData: [
    //     this.campaign?.emailData,
    //     [Validators.required, Validators.email],
    //   ],
    //   dateData: [
    //     this.campaign?.dateData,
    //     [Validators.required],
    //   ],
    //   bitData: [
    //     this.campaign?.bitData,
    //     [Validators.required, Validators.minLength(6)],
    //   ],
    //   decimalData: [
    //     this.campaign?.decimalData,
    //     [Validators.required, Validators.minLength(6)],
    //   ],
    //   floatData: [
    //     this.campaign?.floatData,
    //     [Validators.required, Validators.minLength(6)],
    //   ],
    //   dropdownId: [
    //     this.campaign?.dropdownId,
    //     [Validators.required],
    //   ],
    // });
  }
  private setProperties() {
    // this.campaignForm.get('varcharData')?.valueChanges.subscribe(val => {
    //   this.campaign.varcharData = val;
    // });
    // this.campaignForm.get('emailData')?.statusChanges.subscribe(val => {
    //   this.campaign.emailData = val;
    // });
    // this.campaignForm.get('dateData')?.statusChanges.subscribe(val => {
    //   this.campaign.dateData = val;
    // });
    // this.campaignForm.get('bitData')?.statusChanges.subscribe(val => {
    //   this.campaign.bitData = val;
    // });
    // this.campaignForm.get('decimalData')?.statusChanges.subscribe(val => {
    //   this.campaign.decimalData = val;
    // });
    // this.campaignForm.get('floatData')?.statusChanges.subscribe(val => {
    //   this.campaign.floatData = val;
    // });
    // this.campaignForm.get('dropdownId')?.statusChanges.subscribe(val => {
    //   this.campaign.dropdownId = val;
    // });
  }
  //#endregion
}

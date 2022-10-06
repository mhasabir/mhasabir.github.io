import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { UpdateCampaignComponent } from './components/update-campaign/update-campaign.component';
import { ViewCampaignComponent } from './components/view-campaign/view-campaign.component';
import { DeleteCampaignComponent } from './components/delete-campaign/delete-campaign.component';
import { ListCampaignComponent } from './components/list-campaign/list-campaign.component';
import { CampaignService } from './services/campaign.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'src/app/plugins/table/table.module';


@NgModule({
  declarations: [
    CampaignComponent,
    CreateCampaignComponent,
    UpdateCampaignComponent,
    ViewCampaignComponent,
    DeleteCampaignComponent,
    ListCampaignComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CampaignRoutingModule,
    TableModule
  ],
  providers: [CampaignService],
})
export class CampaignModule { }

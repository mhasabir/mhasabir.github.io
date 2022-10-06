import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { DeleteCampaignComponent } from './components/delete-campaign/delete-campaign.component';
import { ListCampaignComponent } from './components/list-campaign/list-campaign.component';
import { UpdateCampaignComponent } from './components/update-campaign/update-campaign.component';
import { ViewCampaignComponent } from './components/view-campaign/view-campaign.component';
import { CampaignComponent } from './campaign.component';

const routes: Routes = [
  {
    path: "", component: CampaignComponent,
    children: [
      {path:'', component: ListCampaignComponent},
      {path:'create', component: CreateCampaignComponent},
      {path:'update', component: UpdateCampaignComponent},
      {path:'view', component: ViewCampaignComponent},
      {path:'delete', component: DeleteCampaignComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

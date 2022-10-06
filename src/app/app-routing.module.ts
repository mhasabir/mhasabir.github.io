import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './modules/core/components/system/system.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      {
        path: "app", component: SystemComponent,
        children: [
          {
            path: "campaign",
            loadChildren: () => import("./modules/feature/campaign/campaign.module").then(m => m.CampaignModule),
          },
          {
            path: "simple-maps",
            loadChildren: () => import("./modules/feature/simple-maps/simple-maps.module").then(m => m.SimpleMapsModule),
          },
          {
            path: "plugins",
            loadChildren: () => import("./plugins/plugins.module").then(m => m.PluginsModule),
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

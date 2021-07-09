import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [

{
  path:'',component:HomeComponent
},


{
path : 'services',component:ServicesComponent
},
{
  path: 'tools',component:ToolsComponent
},
{
  path:'portfolio',component:PortfolioComponent
},
{
  path:'about',component:AboutComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

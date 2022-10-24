import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MoreComponent} from './more/more.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfessionalsComponent} from './professionals/professionals.component';
import {TrusteesComponent} from './trustees/trustees.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'trustees',
    component: TrusteesComponent
  },
  {
    path: 'professionals',
    component: DashboardComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

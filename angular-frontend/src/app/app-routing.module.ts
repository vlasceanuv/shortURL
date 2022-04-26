import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShortURLComponent } from './create-shortURL/create-shortURL.component';
import { ShortURLDetailsComponent as ShortURLDetailsComponent } from './shortURL-details/shortURL-details.component';
import {ShortURLVisitComponent} from './short-urlvisit/short-urlvisit.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';
const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'create-shortURL', component: CreateShortURLComponent},
  {path: 'shortURL-details/:id', component: ShortURLDetailsComponent},
  {path: ':id', component: ShortURLVisitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }

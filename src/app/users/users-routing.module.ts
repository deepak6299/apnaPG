import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgInfoComponent } from './components/pg-info/pg-info.component';
import { SharedModule } from '../shared/shared.module';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { PgMoreInfoComponent } from './components/pg-more-info/pg-more-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:'pg-info',component:PgInfoComponent
  },
  {
    path:'user-home',component:UserHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'pg-more-info/:id',component:PgMoreInfoComponent
  },{
    path:'payment',component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,SharedModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TradeAmmendComponent } from './tradeammend/tradeammend.component';
import { UserDeactivationComponent } from './userdeactivation/userdeactivation.component'

const routes: Routes = [
    {path:'', component: AppComponent},
    {path:'/tradeammend', component: TradeAmmendComponent},
    {path:'/userdeact', component: UserDeactivationComponent}
    
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  declarations:[
      AppComponent,
      TradeAmmendComponent,
      UserDeactivationComponent
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent,TradeAmmendComponent,UserDeactivationComponent];
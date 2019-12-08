import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { TicketComponent } from './ticket/ticket.component';
import { QDataService } from './services/Qdata.service';
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  { path : '', component: SimulatorComponent},
  { path: 'ticket/:id', component: TicketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

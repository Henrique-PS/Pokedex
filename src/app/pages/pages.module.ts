import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules Routing
import { RoutingModule } from './routing.module';

// Module
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  exports: [
    SharedModule
  ],  
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

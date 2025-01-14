import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamleadRoutingModule } from './teamlead-routing.module';
import { TeamleadComponent } from './teamlead.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PosttaskComponent } from './components/posttask/posttask.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';


@NgModule({
  declarations: [
    TeamleadComponent,
    DashboardComponent,
    PosttaskComponent
  ],
  imports: [
    CommonModule,
    TeamleadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterailModule,
  ]
})
export class TeamleadModule { }

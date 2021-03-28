import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '@app/shared/buttons'; // , ControlsModule, IndicatorsModule, PopupsModule



@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule
  ]
})
export class SharedModule { }

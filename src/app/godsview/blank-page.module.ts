import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
    }),
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
    }),
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }

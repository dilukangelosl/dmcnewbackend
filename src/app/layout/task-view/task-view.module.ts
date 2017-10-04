import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskService} from '../../shared/services/task/task.service';
import { TaskViewRoutingModule } from './task-view-routing.module';
import { TaskViewComponent } from './task-view.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { GalleryModule ,GalleryConfig} from 'ng-gallery';

export const galleryConfig : GalleryConfig = {
  
}
@NgModule({
  imports: [
    CommonModule,
    GalleryModule.forRoot(galleryConfig),
    TaskViewRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
    }),
  ],
  providers:[TaskService],
  declarations: [TaskViewComponent]
})
export class TaskViewModule { }

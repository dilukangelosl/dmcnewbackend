import { Component, OnInit } from '@angular/core';
import {TaskService} from '../shared/services/task/task.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    providers:[TaskService],
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    title: string = 'My first AGM project';
    lat: number = 6.927079;
    lng: number = 79.861243;
    zoom:number = 9;
    tasks:any [];
    pendingTaks:any = [];

    constructor(public services:TaskService, public router:Router) {
        this.services.getGodsallTasks().subscribe(res => {
            this.tasks= res ;
           this.pendingTaks = this.services.getAllPendingTasks(this.tasks);
           console.log(this.pendingTaks);
        });
    }

    ngOnInit() {
    }

    show(task){
        
        this.router.navigate(['/task-view', {task: task.$key,god:true}]);
    }
}

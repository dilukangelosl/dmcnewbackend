import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TaskService} from '../../shared/services/task/task.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    providers:[TaskService],
    animations: [routerTransition()],
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    Agents:any = [];
   loading:boolean = true;
   tasks:any = [];
   agentID:any = "all" ;
   taskObeserveable:any = null;
    constructor(public taskService :TaskService, public router:Router){
        this.taskService.getAllagents().subscribe(res => {
            this.Agents = res;

        })
        this.taskObeserveable = this.taskService.getGodsallTasks().subscribe(res => {
            this.tasks = res.reverse();
            this.loading = false;
        })

    }
    
    formatDate(d){
        return moment(d).format('DD-MMM-YYYY')
    }

    viewtasks(){
        this.loading = true ;
        this.tasks = [];
        if(this.taskObeserveable != null ){
            this.taskObeserveable.unsubscribe();
        }
        
        if(this.agentID == "all"){
            this.taskObeserveable = this.taskService.getGodsallTasks().subscribe(res => {
                this.tasks = res.reverse();
                this.loading = false;
            })
        }else{
            this.taskObeserveable = this.taskService.getAllTaskbyAgentID(this.agentID).subscribe(res => {
                this.tasks = res.reverse();
              this.loading = false;
            })
        }
       
    }

    viewtask(task){
        this.router.navigate(['/task-view', {task: task.$key,god:true}]);
    }

    ngOnInit() {
    }

    
}

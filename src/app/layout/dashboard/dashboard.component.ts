import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TaskService} from '../../shared/services/task/task.service';
import {FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';
import {Router} from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
   
    public allTasks:any = [];
    public completedTasks :any = [];
    public pendingTasks :any = [];
    audio:any ;
    constructor(public taskService:TaskService, public router:Router) {

        this.audio = new Audio();
        this.audio.src = "./assets/sounds/alarm.mp3";
        this.audio.load();
      
        let item:FirebaseListObservable<any> =  this.taskService.getAllTasks();
        item.subscribe(res => {
            console.log(res);
           this.allTasks = res;
           this.allTasks.reverse();
            this.completedTasks = this.taskService.getAllCompletedTasks(this.allTasks);
            this.pendingTasks = this.taskService.getAllPendingTasks(this.allTasks);
        })

        this.taskService.getAlertObservable().subscribe(res => {
           

           
            this.audio.play();
            alert("Pending Tasks Avaiable");
        })
    }

    ngOnInit() {
    }

    makearray(obj){
       this.allTasks = [];
        console.log("makking array");
        let arr = [];

        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                
                this.allTasks.push(obj[key]);
              }
        }
        
    }

    filter($ev){
        console.log($ev);   
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    getDifference(date){
        var dif = moment().diff(date,"m");
        let difference = "";

        var hours = Math.round(dif/60);
        var days = Math.round(hours/24);
        if(Math.round(dif) < 60){
            difference = dif + " Mins";
        }else if ( hours < 24 ){
            difference = Math.round((dif/60)) + " Hours";
        }

        else if ( days < 30 ){
            difference = days + " Days";
        }else{
            difference = "Months";
        }
       return  difference;
    }

    show(task){
        
        this.router.navigate(['/task-view', {task: task.$key,god:false}]);
    }

    
}

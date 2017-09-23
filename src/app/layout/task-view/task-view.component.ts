import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import {TaskService} from '../../shared/services/task/task.service';
import { routerTransition } from '../../router.animations';
import {  FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';
@Component({
    selector: 'app-blank-page',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.scss'],
    animations: [routerTransition()]
})
export class TaskViewComponent implements OnInit {
    taskId:any;
    task:any = null;
    agentId:any;
    title: string = 'My first AGM project';
    lat: number = 6.927079;
    lng: number = 79.861243;
    zoom:number = 16;
    victim:any = null;
    loaded:boolean = false;
    message:any;
    chat:FirebaseListObservable<any> ;
    status:boolean = true;
    statusmessage:any = null;
    constructor(private route: ActivatedRoute, private router:Router, private taskservice:TaskService) {
        let i = JSON.parse(localStorage.getItem("user"));
        this.agentId = i.uid;
    }

    ngOnInit() {
        this.route.params.subscribe(res => {
            this.taskId = res.task;
            this.getTask();
            this.getChat();
        })
    }


    getChat(){
       this.chat =  this.taskservice.getChat(this.taskId);
    }

    sendchatMessage(message){
       

        if(this.task.status =! "Closed"){
            this.chat.push({
                sender:0,
                message:message,
                time: moment.now().toString()
            }).then((res) =>{
                this.message = "";
            })
        }
    }


closestatus(message){
    console.log(message);
if(message == null ){
    alert("Please enter Response Message");
}
else{
  

    this.taskservice.closeTask(this.taskId,message).then(res => {
        this.status = true;
        this.statusmessage =null;
    })
}
}

    getTask(){
        this.taskservice.getTask(this.taskId).subscribe(res => {
            this.task = res;
            console.log(res);
            if(this.task.agent != this.agentId){
                alert("Insufficient Permissions");
            }
            else{
                if(res.status != "Closed"){
                    console.log("setting status to false");
                    this.status = false;
                }
                this.taskservice.getVictimDetails(this.task.userid).then((user) => {
                    this.victim = user;
                        this.loaded = true;
                        
                })


                this.lat = this.task.latlng.lat;
                this.lng = this.task.latlng.lng;
                console.log(this.task.agent == this.agentId);
            }
        })
    }
}

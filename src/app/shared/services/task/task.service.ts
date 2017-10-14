import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import  * as moment from 'moment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TaskService {
  private subject = new Subject<any>();
  agentId: any;
  alertcheck = 0 ;
  constructor(
    private router: Router,
    private afDB: AngularFireDatabase,
    ) {
      let i = JSON.parse(localStorage.getItem("user"));
      this.agentId = i.uid;

  }

  setAlertCheck(check){
    this.alertcheck = check;
  }

  sendAlert(tasks){
    this.subject.next({ tasks: tasks });
  }

  getAlertObservable(): Observable<any> {
    return this.subject.asObservable();
}

  getAllTasks() {
    return this.afDB.list("/disaster/",{
      query: {
        orderByChild: "agent",
        equalTo:this.agentId
      } }
    )
  }

  getAllTaskbyAgentID(id){
    return this.afDB.list("/disaster/",{
      query: {
        orderByChild: "agent",
        equalTo:id
      } }
    )
  }

  getGodsallTasks(){
    return this.afDB.list("/disaster/");
  }


  closeTask(taskId,message){
    return new Promise((resolve,reject) =>{
      let i:FirebaseObjectObservable<any> =this.afDB.object('/disaster/'+taskId);
      i.update({status:"Closed",responseMessage:message,statusdetails: "Closed on " + moment().toString()}).then((res) => {
        resolve(true);
      }).catch(err => {
        reject(err);
      })
    })
  }


  getAllagents(){
     return this.afDB.list("/agents/");
  }
  getAllCompletedTasks(tasks:any[]){
      
      return tasks.filter((task) => task.status === "Closed");
  }

  getAllPendingTasks(tasks:any[]){
    let mytasks = tasks.filter((task) => task.status === "Pending");
    let v = false ;
    for(var i = 0 ; i < mytasks.length;i++){
      let d =  moment().diff(mytasks[i].reportdate,"d");
      if(d == 0){
        v = true ;
      }
    }
    if(tasks.length > this.alertcheck){
      this.sendAlert(tasks.length);
      this.alertcheck = tasks.length;
    }
  


    return mytasks;
}

getTask(id){
  return this.afDB.object('disaster/'+id);
}


getVictimDetails(id){
  return new Promise((resolve,reject) => {
    this.afDB.object('users/'+id).subscribe((res) => {
      resolve(res);
    })
  })
}

getChat(taskid){
  return this.afDB.list('disaster/'+taskid+'/chat');
}
}

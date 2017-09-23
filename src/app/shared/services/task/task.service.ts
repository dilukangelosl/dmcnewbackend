import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import  * as moment from 'moment';


@Injectable()
export class TaskService {

  agentId: any;
  constructor(
    private router: Router,
    private afDB: AngularFireDatabase,
    ) {
      let i = JSON.parse(localStorage.getItem("user"));
      this.agentId = i.uid;

  }

  getAllTasks() {
    return this.afDB.list("/disaster/",{
      query: {
        orderByChild: "agent",
        equalTo:this.agentId
      } }
    )
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
  getAllCompletedTasks(tasks:any[]){
      
      return tasks.filter((task) => task.status === "Closed");
  }

  getAllPendingTasks(tasks:any[]){
    
    return tasks.filter((task) => task.status === "Pending");
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

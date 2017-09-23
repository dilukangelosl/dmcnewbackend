import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class AuthService {

  constructor(
      public af: AngularFireAuth,
      private router: Router,
    private afDB: AngularFireDatabase) {




  }



  login(email,password){
   

    return new Promise((resolve,reject) => {
      this.af.auth.signInWithEmailAndPassword(email,password).then((res => {
        //console.log(res);
        let item:FirebaseObjectObservable<any> =this.getuserdetails(res.uid);
       item.subscribe((agent) => {
          item.update({status:"online"});
          let newagent = {
            uid:res.uid,
            details:agent
          }
          localStorage.setItem("user",JSON.stringify(newagent));
          this.setLogginSession(true);
          resolve("Login Success");
         

        })
      })).catch((err)=>{
        reject(err);
      })
    })
  }


  getuserdetails(uid){
   return this.afDB.object("/agents/"+uid);
  }

  logout(){
    let uid = this.getuseruid();
    let item:FirebaseObjectObservable<any> =this.getuserdetails(uid);
    item.update({status:"offline"});
    this.setLogginSession(false);
     this.af.auth.signOut();
     this.router.navigate(['./login']);
  }

  setLogginSession(state:boolean){
      if(state){
        localStorage.setItem("isLogged","true");
      }else{
        localStorage.removeItem("isLogged");
      }
  }

  getLoginState(){
    if(localStorage.getItem("isLogged")){
      return true;
    }
    return false;
  }

  getuseruid(){
    let i  = JSON.parse(localStorage.getItem("user"));
    return i.uid;
  }

}

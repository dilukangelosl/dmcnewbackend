import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user:any = {
        email:null,
        password:null
    }
    loader:boolean = false;
    alert:any = {
        show:false,
        type:"",
        message:""
    }
    constructor(public router: Router,private authservice:AuthService) {

    }

    ngOnInit() {
    }

   

    login(){
        
           if(this.user.email != null || this.user.password != null){
            this.loader = true;
                this.authservice.login(this.user.email,this.user.password).then((res) => {
                        //console.log(res);
                        this.loader = false;
                        this.alert.show = true ;
                        this.alert.type="success";
                        this.alert.message = "Login Success";
                        this.router.navigate(['./dashboard']);
                }).catch((err) => {
                    this.loader = false;
                    this.alert.show = true ;
                    this.alert.type="warning";
                    this.alert.message = err.message;
                })
           }else{
               alert("Please Enter Email and Password");
           }
    }

    closeAlert(){
        this.alert.show = false;
    }

}

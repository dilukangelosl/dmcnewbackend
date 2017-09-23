import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {AuthService} from '../shared/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import {AlertComponent,ProgressbarComponent } from '../layout/bs-component/components';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    providers:[AuthService],
    declarations: [LoginComponent,ProgressbarComponent,AlertComponent]
})
export class LoginModule {
}

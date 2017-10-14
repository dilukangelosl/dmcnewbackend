import { Component , HostListener} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from './shared/services/auth/auth.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[AuthService]
})
export class AppComponent {
    constructor(private translate: TranslateService, public authService:AuthService) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|it|fa/) ? browserLang : 'en');
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeunloadHandler(event) {
      this.authService.logout();
    }
}

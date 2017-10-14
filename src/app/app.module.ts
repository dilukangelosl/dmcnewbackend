import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AgmCoreModule } from '@agm/core';
import { GalleryModule ,GalleryConfig} from 'ng-gallery';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

export const galleryConfig : GalleryConfig = {
   
  }

export const firebaseConfig = {
    apiKey: "AIzaSyCc4h9Ovb4aCbUpyNcBNEUUUHtqciNLneI",
    authDomain: "disastermanagement-ee84a.firebaseapp.com",
    databaseURL: "https://disastermanagement-ee84a.firebaseio.com",
    projectId: "disastermanagement-ee84a",
    storageBucket: "disastermanagement-ee84a.appspot.com",
    messagingSenderId: "895647762366"
};



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        GalleryModule.forRoot(galleryConfig),
        AngularFireModule.initializeApp(firebaseConfig),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
          }),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard,
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}

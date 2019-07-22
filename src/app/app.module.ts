import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAQUAz5Ackw-PxR1YRz-cfouGziFnOmFb4",
  authDomain: "example-e89e4.firebaseapp.com",
  databaseURL: "https://example-e89e4.firebaseio.com",
  projectId: "example-e89e4",
  storageBucket: "",
  messagingSenderId: "303921299638",
  appId: "1:303921299638:web:78c3bbbb7cefbdd4"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

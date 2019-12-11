import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx'

import { SuperTabsModule } from '@ionic-super-tabs/angular'

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SuperTabsModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

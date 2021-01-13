import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [
      BrowserModule,
      HttpClientModule, 
      IonicModule.forRoot(), 
      AppRoutingModule,
      IonicStorageModule.forRoot(),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseX
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

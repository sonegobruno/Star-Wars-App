import { AnalyticsService } from './service/AnalyticsService/analytics.service';
import { Component } from '@angular/core';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private appMinimize: AppMinimize,
    private location: Location,
    private googlePlus: GooglePlus,
    private analyticsService: AnalyticsService
  ) {
    this.initializeApp();
    this.platform.backButton.subscribeWithPriority(10, () => {
      try {
        const currentPageApp = this.router.url;

        switch (currentPageApp) {
          case '/home':
            console.log('Minimiza App');
            this.appMinimize.minimize();
            break;
          
          case '/films':
            console.log('desloga do App');
            this.googlePlus.logout().then(response => {
              console.log(response)
              this.router.navigateByUrl('');
            }).catch(err => {
              console.log(err);
            })  
            break;
          default:
            console.log('default case')
            this.location.back();
            break;
        }
      } catch (error) {
        console.error('Error back-button', error);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  analyticsEnabled = true;

  constructor(
    private fb: FirebaseX,
    private router: Router
  ) {
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd),
    ).subscribe((e: RouterEvent) => {
      console.log('router:', e.url);
      this.setScreenName(e.url)
    })
   }

  async setUser(user_id: string) {
    const response = await this.fb.setUserId(user_id);
    console.log('Set USER ID -> ', response);
  }

  async setProperty() {
    const response = await this.fb.setUserProperty('idade', '26');
    console.log('Set Property -> ', response);
  }

  async event() {
    const response = await this.fb.logEvent('signup', { method: 'email'});
    console.log('Set logEvent -> ', response);
  }

  async setScreenName(screenName) {
    const response = await this.fb.setScreenName(screenName);
    console.log('Set Screen -> ', response);
  }
}

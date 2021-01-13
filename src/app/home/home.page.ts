import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private googlePlus: GooglePlus,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {

  }

  login() {
    this.googlePlus.login({})
    .then(res => {
      this.storage.set('login', res).then(response => {
      this.router.navigateByUrl('/films');
    });
  })
  .catch(err => console.error(err));
  }
}

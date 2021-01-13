import { Component, OnInit } from '@angular/core';
import { Film } from '../models/Film-model';
import { StarwarsService } from '../service/starwars-service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { AnalyticsService } from '../service/AnalyticsService/analytics.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Film[];

  constructor(
    private api: StarwarsService, 
    private loadingController: LoadingController,
    private router: Router,
    private googlePlus: GooglePlus,
    private storage: Storage,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.getAllFilm();
    this.storage.get('login').then(response => {
      console.log('Login',response);
      const user_id = response.userId;
      this.analyticsService.setUser(user_id);
    });
  }

  async getAllFilm() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
    });
    await loading.present();

    const response = await this.api.getAllFilm();
    this.films = response;

    loading.dismiss();
  }

  public navigateToDescription(id: number) {
    let indexFilm = this.films.findIndex(film => film.episode_id === id);
    this.router.navigateByUrl(`description/${(indexFilm + 1)}`);
  }

  public logout() {
    this.googlePlus.logout().then(response => {
      console.log(response)
      this.router.navigateByUrl('');
    }).catch(err => {
      console.log(err);
    })  
  }
}

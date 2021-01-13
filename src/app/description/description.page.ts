import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StarwarsService } from '../service/starwars-service';
import { Film } from '../models/Film-model';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  film: Film;

  constructor(
    private api: StarwarsService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const { id } = params;
      this.getFilm(id); 
    });
  }

  async getFilm(id: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

    const response = await this.api.getFilm(id);
    this.film = response;

    loading.dismiss();
  }

  public async navigateToCharacters() {
    const people = Object.assign({
      people: this.film.characters
    });
    await this.storage.set('people', people);
    this.router.navigateByUrl('people');
  }

  public async navigateToPlanets() {
    const planets = Object.assign({
      planets: this.film.planets
    });
    await this.storage.set('planets', planets);
    this.router.navigateByUrl('planets');
  }

  public async navigateToStarships() {
    const starships = Object.assign({
      starships: this.film.starships
    });
    await this.storage.set('starships', starships);
    this.router.navigateByUrl('starships');
  }

  public async navigateToVehicles() {
    const vehicles = Object.assign({
      vehicles: this.film.vehicles
    });
    await this.storage.set('vehicles', vehicles);
    this.router.navigateByUrl('vehicles');
  }

  public async navigateToSpecies() {
    const species = Object.assign({
      species: this.film.species
    });
    await this.storage.set('species', species);
    this.router.navigateByUrl('species');
  }
}

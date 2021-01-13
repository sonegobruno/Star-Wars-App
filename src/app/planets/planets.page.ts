import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars-service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets: any = [];

  constructor(
    private api: StarwarsService, 
    private storage: Storage,
    private location: Location
  ) {}

  ngOnInit() {
    this.storage.get('planets').then(response => {
      const planetsUrl = response.planets
      planetsUrl.forEach(url =>{
        this.getPlanetsByUrl(url);
      })
    })
  }

  async getPlanetsByUrl(url) {
    const response = await this.api.getPlanetsByUrl(url);
    this.planets.push(response);
  }

  public goBack() {
    this.location.back();
  }
}

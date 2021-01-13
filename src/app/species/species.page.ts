import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars-service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {
  species: any = [];

  constructor(
    private api: StarwarsService, 
    private storage: Storage,
    private location: Location
  ) {}

  ngOnInit() {
    this.storage.get('species').then(response => {
      const speciesUrl = response.species
      speciesUrl.forEach(url =>{
        this.getSpeciesByUrl(url);
      })
    })
  }

  async getSpeciesByUrl(url) {
    const response = await this.api.getSpecieByUrl(url);
    this.species.push(response);
  }

  public goBack() {
    this.location.back();
  }
}

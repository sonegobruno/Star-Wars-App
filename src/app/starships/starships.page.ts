import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars-service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  starships: any = [];

  constructor(
    private api: StarwarsService, 
    private storage: Storage,
    private location: Location
  ) {}

  ngOnInit() {
    this.storage.get('starships').then(response => {
      const starshipsUrl = response.starships
      starshipsUrl.forEach(url =>{
        this.getStarshipsByUrl(url);
      })
    })
  }

  async getStarshipsByUrl(url) {
    const response = await this.api.getStarshipsByUrl(url);
    this.starships.push(response);
  }

  public goBack() {
    this.location.back();
  }
}

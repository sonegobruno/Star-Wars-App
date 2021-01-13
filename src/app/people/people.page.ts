import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars-service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { People } from '../models/People-model';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  peoples: People[] = [];

  constructor(
    private api: StarwarsService, 
    private storage: Storage,
    private location: Location,
  ) {}

  ngOnInit() {
    this.storage.get('people').then(response => {
      const peopleUrl = response.people
      peopleUrl.forEach(url =>{
        this.getPeopleByUrl(url);
      })
    })
  }

  async getPeopleByUrl(url) {
    const response = await this.api.getPeopleByUrl(url);
    this.peoples.push(response);
  }

  public goBack() {
    this.location.back();
  }
}


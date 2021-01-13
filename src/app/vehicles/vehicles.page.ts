import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars-service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  vehicles: any = [];

  constructor(
    private api: StarwarsService, 
    private storage: Storage,
    private location: Location
  ) {}

  ngOnInit() {
    this.storage.get('vehicles').then(response => {
      const vehiclesUrl = response.vehicles
      vehiclesUrl.forEach(url =>{
        this.getVehiclesByUrl(url);
      })
    })
  }

  async getVehiclesByUrl(url) {
    const response = await this.api.getVehicleByUrl(url);
    this.vehicles.push(response);
  }

  public goBack() {
    this.location.back();
  }
}

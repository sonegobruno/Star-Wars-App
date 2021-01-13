import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/Film-model';
import { People } from '../models/People-model';
import { Planets } from '../models/Planets-model';
import { Starships } from '../models/Starships-model';
import { Vehicle } from '../models/Vehicle-model';
import { Specie } from '../models/Specie-model';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://swapi.dev/api';
   }

  public async getAllFilm(): Promise<Film[]> {
    return new Promise((resolve, reject) => {

      this.http.get(`${this.urlApi}/films`).subscribe((films: any) => {
        resolve(films.results);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getFilm(id: string): Promise<Film> {
    return new Promise((resolve, reject) => {

      this.http.get(`${this.urlApi}/films/${id}`).subscribe((films: any) => {
        resolve(films);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getPeopleByUrl(url: string): Promise<People> {
    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((peoples: any) => {
        resolve(peoples);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getPlanetsByUrl(url: string): Promise<Planets> {
    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((planets: any) => {
        resolve(planets);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getStarshipsByUrl(url: string): Promise<Starships> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((starships: any) => {
        resolve(starships);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getVehicleByUrl(url: string): Promise<Vehicle> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((vehicles: any) => {
        resolve(vehicles);
      }, (err: any) => {
        reject(err);
      });
    })
  }

  public async getSpecieByUrl(url: string): Promise<Specie> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((specie: any) => {
        resolve(specie);
      }, (err: any) => {
        reject(err);
      });
    })
  }

}

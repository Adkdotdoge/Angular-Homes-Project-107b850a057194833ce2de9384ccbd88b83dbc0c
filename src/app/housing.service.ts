import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
    url= 'https://angular-homes-project-107b850a057194833ce2de9384ccbd88b83dbc0c.vercel.app/api/data';
 
  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName:string, lastName:string, email:string){
    console.log(firstName,lastName, email);
  }
}

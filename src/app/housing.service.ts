import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { environment } from '../app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private url = 'https://angular-homes-project-107b850a057194833ce2de9384ccbd88b83dbc0c.vercel.app/api/data';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url); // url = 'http://localhost:3000/locations'
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonData = await response.json();
  
      // ✅ Directly return the array
      return jsonData ?? [];
  
    } catch (error) {
      console.error("Error fetching housing locations:", error);
      return [];
    }
  }
  

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(this.url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonData = await response.json();
  
      // ✅ Find the correct object by `id`
      return jsonData.find((location: HousingLocation) => location.id === id);
      
    } catch (error) {
      console.error("Error fetching housing location by ID:", error);
      return undefined;
    }
  }
  

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application submitted: ${firstName} ${lastName}, Email: ${email}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TestCenters {
  testCenters: {
    address: string;
    city: string;
    state: string;
    zipcode: number;
    latitude: string;
    longitude: string;
    name: string;
    phone_number: string;
    appointment_required: boolean;
    drive_thru_site: boolean;
  }[];
  coords: {
    latitude: number;
    longitude: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TestingLocationsService {
  constructor(private http: HttpClient) {}

  search(zip: string) {
    return this.http.get<TestCenters>(
      `https://api.get-tested-covid19.org/api/v1/public/test-centers/zip/${zip}`
    );
  }
}

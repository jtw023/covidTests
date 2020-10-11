import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestingLocationsService } from './testing-locations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latLong: any = [];
  coords: { latitude: number; longitude: number };
  searchSubscription: Subscription;

  constructor(private locations: TestingLocationsService) {}

  onZip(zipCode: string) {
    this.searchSubscription = this.locations.search(zipCode).subscribe(
      (res) => {
        if (res.testCenters.length === 0) {
          return alert(
            'Could not find any testing locations for your zip code.'
          );
        }
        for (const testCenter of res.testCenters) {
          this.latLong.push({
            name: testCenter.name,
            phoneNumber: testCenter.phone_number,
            address: testCenter.address,
            appointmentRequired: testCenter.appointment_required,
            city: testCenter.city,
            state: testCenter.state,
            zipCode: testCenter.zipcode,
            lng: testCenter.longitude,
            lat: testCenter.latitude,
          });
        }
        this.coords = res.coords;
      },
      (err) => {
        return alert('Could not find any testing locations for your zip code.');
      }
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe;
  }
}

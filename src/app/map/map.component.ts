import { Component, Input, IterableDiffers } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';

interface Coords {
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() latLong = [];
  @Input() coords: Coords;
  iterableDiffer: any;
  height = '65vh';
  width = '100%';
  zoom = 4;
  center = { lat: 39.381266, lng: -97.922211 };
  parseFloat = [];

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.latLong);
    const latLong = this.latLong;
    if (changes) {
      for (let marker of latLong) {
        this.parseFloat.push({
          lng: parseFloat(marker.lng),
          lat: parseFloat(marker.lat),
          address: marker.address,
          appointmentRequired: marker.appointmentRequired,
          city: marker.city,
          name: marker.name,
          phoneNumber: marker.phoneNumber,
          state: marker.state,
          zipCode: marker.zipCode,
        });
      }
      this.center = {
        lat: this.coords.latitude,
        lng: this.coords.longitude,
      };
      this.zoom = 10;
    }
  }

  onClick(
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: number,
    phoneNumber: string,
    appointmentRequired: boolean
  ) {
    alert(`name: ${name}
address: ${address}, ${city} ${state}, ${zipCode}
phone number: ${phoneNumber}
appointment required? ${appointmentRequired}`);
  }
}

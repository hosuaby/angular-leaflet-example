import {Component, OnInit} from '@angular/core';
import L from 'leaflet';
import * as _ from 'lodash';
import {BouncingMarker, MarkerExt} from 'leaflet.smooth_marker_bouncing'

const parisArea = [[48.824384, 2.284298], [48.872054, 2.409782]];

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    const map = L.map('map').setView([48.847547, 2.351074], 14);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(map);

    for (let i = 0; i < 20; i++) {
      const lat = _.random(parisArea[0][0], parisArea[1][0]);
      const lng = _.random(parisArea[0][1], parisArea[1][1]);

      (L.marker([lat, lng]) as BouncingMarker)
        .setBouncingOptions({
          bounceHeight: 20
        })
        .on('click', (m: any) => {
          (m.target as BouncingMarker).toggleBouncing();
        })
        .on('bounceend', () => {
          console.log('<<< STOP BOUNCING >>>');
        })
        .addTo(map);
    }

    map.on('click', () => {
      (L.Marker as MarkerExt).stopAllBouncingMarkers();
    });
  }
}

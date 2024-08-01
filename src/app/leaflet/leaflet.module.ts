import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './components/map/map.component';
import L from 'leaflet';
import SmoothMarkerBouncing from 'leaflet.smooth_marker_bouncing';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/images/marker-icon-2x.png',
  iconUrl: 'assets/images/marker-icon.png',
  shadowUrl: 'assets/images/marker-shadow.png',
});

SmoothMarkerBouncing(L);

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MapComponent
  ]
})
export class LeafletModule { }

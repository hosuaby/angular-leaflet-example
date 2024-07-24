import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './components/map/map.component';
import L from 'leaflet';
import SmoothMarkerBouncing from 'leaflet.smooth_marker_bouncing';

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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeafletModule} from './leaflet/leaflet.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeafletModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-leaflet-example';
}

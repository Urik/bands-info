import { Component } from '@angular/core';
import { BandService } from './services/band.service';
import { Artist } from './models/Artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bands';
  artist: Artist = null;

  constructor(private bandService: BandService, private router: Router) {}

  searchBand(bandName) {
    this.router.navigate([`/band/${bandName}`])
    this.bandService.getBand(bandName).subscribe((artist) => {
      this.artist = artist;
    });
  }
}

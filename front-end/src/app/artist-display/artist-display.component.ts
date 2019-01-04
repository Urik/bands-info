import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Artist } from '../models/Artist';

@Component({
  selector: 'artist-display',
  templateUrl: './artist-display.component.html',
  styleUrls: ['./artist-display.component.scss']
})
export class ArtistDisplayComponent implements OnInit, OnChanges {
  @Input() artist: Artist;

  isTextExpanded = false;
  _imageLoaded = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.artist) {
      this.isTextExpanded = false;
    }
  }

  expandText() {
    this.isTextExpanded = true;
  }

  imageLoaded() {
    this._imageLoaded = true;
  }
}

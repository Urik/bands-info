import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BandService } from '../services/band.service';

@Component({
  selector: 'artist-display-view',
  templateUrl: './artist-display-view.component.html',
  styleUrls: ['./artist-display-view.component.css']
})
export class ArtistDisplayViewComponent implements OnInit {
  band$ = null;
  constructor(private route: ActivatedRoute, private bandService: BandService) {}

  ngOnInit() {
    this.band$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.bandService.getBand(params.get('bandName')))
    )
  }
}

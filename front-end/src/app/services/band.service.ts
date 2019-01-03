import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist, RawImage, Image, Bio } from '../models/Artist';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private httpClient: HttpClient) { }

  public getBand(bandName: string): Observable<Artist> {
    return this.httpClient.get(`/api/band/${encodeURIComponent(bandName)}`)
      .pipe(
        map(rawBand => this.buildArtist(rawBand['artist'], false)),
        catchError(err => {
          console.log(err);
          return of(err);
        })
      );
  }

  private buildArtist(rawArtist: Object, loadBio): Artist {
    let similarArtists = [];
    if (rawArtist['similar'] && rawArtist['similar']['artist']) {
      similarArtists = rawArtist['similar']['artist'].map(rawArtist => this.buildArtist(rawArtist, true));
    }
    const images: RawImage[] = rawArtist['image'];
    const biggestImage = this.getLargestRawImage(images);
    const parsedImage: Image = !biggestImage ? 
      null: 
      {
        url: biggestImage["#text"]
      };
    const observableBio = loadBio ?
      this.getArtistBio(rawArtist['name']) :
      null;
    return new Artist(rawArtist['name'], rawArtist['url'], similarArtists, parsedImage, rawArtist['bio'], observableBio);
  }

  private getArtistBio(artistName): Observable<Bio> {
    return this.httpClient.get(`/api/band/${encodeURIComponent(artistName)}`).pipe(
      map(rawArtist => rawArtist['artist']['bio']),
      catchError(err => {
        console.log(err)
        return of({});
      })
    );
  }

  private getLargestRawImage(images: RawImage[]): RawImage | null {
    const reversedImages = images.reverse();
    const potentialBiggestImage = reversedImages.find(rawImage => rawImage.size !== '');
    const biggestImage = potentialBiggestImage || reversedImages[0];
    return biggestImage;
  }
}

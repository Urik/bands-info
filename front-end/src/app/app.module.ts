import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { BandsSearchModule } from './bands-search/bands-search.module';
import { ArtistDisplayComponent } from './artist-display/artist-display.component';
import { ExpandableTextModule } from './expandable-text/expandable-text.module';
import { TextEllipserModule } from './text-ellipser/text-ellipser.module';
import { AppRoutingModule } from './app-routing.module';
import { ArtistDisplayViewComponent } from './artist-display-view/artist-display-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ArtistDisplayComponent,
    ArtistDisplayViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BandsSearchModule,
    HttpClientModule,
    ExpandableTextModule,
    TextEllipserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

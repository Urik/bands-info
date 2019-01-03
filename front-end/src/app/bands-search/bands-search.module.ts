import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicBandSearchComponent } from './basic-band-search/basic-band-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BasicBandSearchComponent
  ],
  exports: [
    BasicBandSearchComponent
  ]
})
export class BandsSearchModule { }

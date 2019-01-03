import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableTextComponent } from './expandable-text.component';
import { TextEllipserModule } from '../text-ellipser/text-ellipser.module';

@NgModule({
  imports: [
    CommonModule,
    TextEllipserModule
  ],
  declarations: [
    ExpandableTextComponent
  ],
  exports: [
    ExpandableTextComponent
  ]
})
export class ExpandableTextModule { }

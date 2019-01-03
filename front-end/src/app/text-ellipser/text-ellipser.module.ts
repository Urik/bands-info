import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEllipserPipe } from './text-ellipser.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextEllipserPipe],
  exports: [TextEllipserPipe]
})
export class TextEllipserModule { }

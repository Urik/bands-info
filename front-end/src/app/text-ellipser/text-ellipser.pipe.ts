import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipser'
})
export class TextEllipserPipe implements PipeTransform {

  transform(value: string, maxWords: number): string {
    const words = value.split(' ');
    if (words.length <= maxWords) {
      return value;
    }

    const textPart = words.slice(0, maxWords);
    return textPart.join(' ') + '...';
  }

}

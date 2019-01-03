import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'basic-band-search',
  templateUrl: './basic-band-search.component.html',
  styleUrls: ['./basic-band-search.component.scss']
})
export class BasicBandSearchComponent {
  @Input() bandName: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  onSubmit(theForm) {
    if (this.bandNameIsValid()) {
      this.search.emit(this.bandName);
    }
  }

  bandNameIsValid() {
    return this.bandName && this.bandName.length > 0;
  }
}

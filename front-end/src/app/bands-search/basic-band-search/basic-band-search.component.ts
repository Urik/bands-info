import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'basic-band-search',
  templateUrl: './basic-band-search.component.html',
  styleUrls: ['./basic-band-search.component.scss']
})
export class BasicBandSearchComponent implements OnInit, OnChanges {
  @Input() bandName: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.bandName) {
      console.log(changes.bandName.currentValue);
    }
  }

  onSubmit() {
    this.search.emit(this.bandName);
  }
}

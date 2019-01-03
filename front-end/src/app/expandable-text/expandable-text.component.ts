import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'expandable-text',
  templateUrl: './expandable-text.component.html',
  styleUrls: ['./expandable-text.component.scss']
})
export class ExpandableTextComponent implements OnInit, OnChanges {
  @Input() maxWords: number = 10;
  @Input() content: string = '';
  @Input() isExpanded: boolean = false;
  @Output() onExpand = new EventEmitter<void>();

  wordCount = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.content) {
      this.wordCount = this.content.split(' ').length;
    }
  }

  expandContent() {
    this.onExpand.emit();
  }
}

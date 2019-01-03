import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTextComponent } from './expandable-text.component';

describe('ExpandableTextComponent', () => {
  let component: ExpandableTextComponent;
  let fixture: ComponentFixture<ExpandableTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

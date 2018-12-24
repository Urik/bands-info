import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBandSearchComponent } from './basic-band-search.component';

describe('BasicBandSearchComponent', () => {
  let component: BasicBandSearchComponent;
  let fixture: ComponentFixture<BasicBandSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBandSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBandSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDisplayViewComponent } from './artist-display-view.component';

describe('ArtistDisplayViewComponent', () => {
  let component: ArtistDisplayViewComponent;
  let fixture: ComponentFixture<ArtistDisplayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDisplayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDisplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

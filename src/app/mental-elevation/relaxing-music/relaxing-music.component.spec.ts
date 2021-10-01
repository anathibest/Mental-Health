import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxingMusicComponent } from './relaxing-music.component';

describe('RelaxingMusicComponent', () => {
  let component: RelaxingMusicComponent;
  let fixture: ComponentFixture<RelaxingMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxingMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxingMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveConsultantComponent } from './live-consultant.component';

describe('LiveConsultantComponent', () => {
  let component: LiveConsultantComponent;
  let fixture: ComponentFixture<LiveConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

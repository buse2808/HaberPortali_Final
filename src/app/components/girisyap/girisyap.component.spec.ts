import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisyapComponent } from './girisyap.component';

describe('GirisyapComponent', () => {
  let component: GirisyapComponent;
  let fixture: ComponentFixture<GirisyapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirisyapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisyapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

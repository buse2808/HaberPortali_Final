import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberkategoriComponent } from './haberkategori.component';

describe('HaberkategoriComponent', () => {
  let component: HaberkategoriComponent;
  let fixture: ComponentFixture<HaberkategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaberkategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberkategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

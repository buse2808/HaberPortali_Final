import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticiComponent } from './yonetici.component';

describe('YoneticiComponent', () => {
  let component: YoneticiComponent;
  let fixture: ComponentFixture<YoneticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

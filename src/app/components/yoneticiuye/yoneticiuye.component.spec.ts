import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticiuyeComponent } from './yoneticiuye.component';

describe('YoneticiuyeComponent', () => {
  let component: YoneticiuyeComponent;
  let fixture: ComponentFixture<YoneticiuyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticiuyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticiuyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

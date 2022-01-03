import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticiuyeislemComponent } from './yoneticiuyeislem.component';

describe('YoneticiuyeislemComponent', () => {
  let component: YoneticiuyeislemComponent;
  let fixture: ComponentFixture<YoneticiuyeislemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticiuyeislemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticiuyeislemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

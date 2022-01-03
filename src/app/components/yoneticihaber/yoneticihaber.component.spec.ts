import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticihaberComponent } from './yoneticihaber.component';

describe('YoneticihaberComponent', () => {
  let component: YoneticihaberComponent;
  let fixture: ComponentFixture<YoneticihaberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticihaberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticihaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

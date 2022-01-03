import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticihaberislemComponent } from './yoneticihaberislem.component';

describe('YoneticihaberislemComponent', () => {
  let component: YoneticihaberislemComponent;
  let fixture: ComponentFixture<YoneticihaberislemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticihaberislemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticihaberislemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticikategoriComponent } from './yoneticikategori.component';

describe('YoneticikategoriComponent', () => {
  let component: YoneticikategoriComponent;
  let fixture: ComponentFixture<YoneticikategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticikategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticikategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

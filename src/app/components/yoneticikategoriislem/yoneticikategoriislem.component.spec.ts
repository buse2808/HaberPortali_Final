import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneticikategoriislemComponent } from './yoneticikategoriislem.component';

describe('YoneticikategoriislemComponent', () => {
  let component: YoneticikategoriislemComponent;
  let fixture: ComponentFixture<YoneticikategoriislemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneticikategoriislemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticikategoriislemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainWallComponent } from './curtain-wall.component';

describe('CurtainWallComponent', () => {
  let component: CurtainWallComponent;
  let fixture: ComponentFixture<CurtainWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

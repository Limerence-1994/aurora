import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevLogComponent } from './dev-log.component';

describe('DevLogComponent', () => {
  let component: DevLogComponent;
  let fixture: ComponentFixture<DevLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

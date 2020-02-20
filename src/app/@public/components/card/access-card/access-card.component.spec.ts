import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCardComponent } from './access-card.component';

describe('AccessCardComponent', () => {
  let component: AccessCardComponent;
  let fixture: ComponentFixture<AccessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

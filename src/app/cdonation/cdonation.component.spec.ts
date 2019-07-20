import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDonationComponent } from './cdonation.component';

describe('CDonationComponent', () => {
  let component: CDonationComponent;
  let fixture: ComponentFixture<CDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

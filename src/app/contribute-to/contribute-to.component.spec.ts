import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeToComponent } from './contribute-to.component';

describe('ContributeToComponent', () => {
  let component: ContributeToComponent;
  let fixture: ComponentFixture<ContributeToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GVideosComponent } from './gvideos.component';

describe('GVideosComponent', () => {
  let component: GVideosComponent;
  let fixture: ComponentFixture<GVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

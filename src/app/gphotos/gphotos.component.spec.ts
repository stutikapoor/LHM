import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPhotosComponent } from './gphotos.component';

describe('GPhotosComponent', () => {
  let component: GPhotosComponent;
  let fixture: ComponentFixture<GPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

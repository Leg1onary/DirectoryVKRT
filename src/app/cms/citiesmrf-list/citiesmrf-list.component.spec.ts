import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesmrfListComponent } from './citiesmrf-list.component';

describe('CitiesmrfListComponent', () => {
  let component: CitiesmrfListComponent;
  let fixture: ComponentFixture<CitiesmrfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesmrfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesmrfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

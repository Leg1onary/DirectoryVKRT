import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsHelementComponent } from './cms-helement.component';

describe('CmsHelementComponent', () => {
  let component: CmsHelementComponent;
  let fixture: ComponentFixture<CmsHelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsHelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsHelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

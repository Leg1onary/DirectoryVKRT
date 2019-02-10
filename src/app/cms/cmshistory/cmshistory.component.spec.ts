import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmshistoryComponent } from './cmshistory.component';

describe('CmshistoryComponent', () => {
  let component: CmshistoryComponent;
  let fixture: ComponentFixture<CmshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

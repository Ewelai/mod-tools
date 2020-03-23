import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseTextViewComponent } from './diagnose-text-view.component';

describe('DiagnoseTextViewComponent', () => {
  let component: DiagnoseTextViewComponent;
  let fixture: ComponentFixture<DiagnoseTextViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseTextViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseTextViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

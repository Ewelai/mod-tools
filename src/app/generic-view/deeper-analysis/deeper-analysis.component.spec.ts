import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperAnalysisComponent } from './deeper-analysis.component';

describe('DeeperAnalysisComponent', () => {
  let component: DeeperAnalysisComponent;
  let fixture: ComponentFixture<DeeperAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeperAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeperAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

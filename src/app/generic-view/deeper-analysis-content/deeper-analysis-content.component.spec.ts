import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperAnalysisContentComponent } from './deeper-analysis-content.component';

describe('DeeperAnalysisContentComponent', () => {
  let component: DeeperAnalysisContentComponent;
  let fixture: ComponentFixture<DeeperAnalysisContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeperAnalysisContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeperAnalysisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

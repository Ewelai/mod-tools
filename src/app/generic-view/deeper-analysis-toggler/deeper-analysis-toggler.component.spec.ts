import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperAnalysisTogglerComponent } from './deeper-analysis-toggler.component';

describe('DeeperAnalysisTogglerComponent', () => {
  let component: DeeperAnalysisTogglerComponent;
  let fixture: ComponentFixture<DeeperAnalysisTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeperAnalysisTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeperAnalysisTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

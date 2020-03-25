import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPredictionComponent } from './ai-prediction.component';

describe('AiPredictionComponent', () => {
  let component: AiPredictionComponent;
  let fixture: ComponentFixture<AiPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

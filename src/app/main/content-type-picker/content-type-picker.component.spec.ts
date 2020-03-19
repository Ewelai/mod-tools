import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTypePickerComponent } from './content-type-picker.component';

describe('ContentTypePickerComponent', () => {
  let component: ContentTypePickerComponent;
  let fixture: ComponentFixture<ContentTypePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTypePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

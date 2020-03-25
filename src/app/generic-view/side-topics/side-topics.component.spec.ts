import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTopicsComponent } from './side-topics.component';

describe('SideTopicsComponent', () => {
  let component: SideTopicsComponent;
  let fixture: ComponentFixture<SideTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

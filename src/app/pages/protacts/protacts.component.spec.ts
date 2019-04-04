import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtactsComponent } from './protacts.component';

describe('ProtactsComponent', () => {
  let component: ProtactsComponent;
  let fixture: ComponentFixture<ProtactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

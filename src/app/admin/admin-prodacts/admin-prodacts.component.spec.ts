import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdactsComponent } from './admin-prodacts.component';

describe('AdminProdactsComponent', () => {
  let component: AdminProdactsComponent;
  let fixture: ComponentFixture<AdminProdactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

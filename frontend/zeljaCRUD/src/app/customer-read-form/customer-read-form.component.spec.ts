import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReadFormComponent } from './customer-read-form.component';

describe('CustomerReadFormComponent', () => {
  let component: CustomerReadFormComponent;
  let fixture: ComponentFixture<CustomerReadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerReadFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerReadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResAzizaComponent } from './add-res-aziza.component';

describe('AddResAzizaComponent', () => {
  let component: AddResAzizaComponent;
  let fixture: ComponentFixture<AddResAzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResAzizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResAzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

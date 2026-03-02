import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResAzizaComponent } from './update-res-aziza.component';

describe('UpdateResAzizaComponent', () => {
  let component: UpdateResAzizaComponent;
  let fixture: ComponentFixture<UpdateResAzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateResAzizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateResAzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

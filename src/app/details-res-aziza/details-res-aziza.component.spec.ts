import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResAzizaComponent } from './details-res-aziza.component';

describe('DetailsResAzizaComponent', () => {
  let component: DetailsResAzizaComponent;
  let fixture: ComponentFixture<DetailsResAzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsResAzizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsResAzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

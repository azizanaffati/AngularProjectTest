import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResAzizaComponent } from './list-res-aziza.component';

describe('ListResAzizaComponent', () => {
  let component: ListResAzizaComponent;
  let fixture: ComponentFixture<ListResAzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResAzizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResAzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

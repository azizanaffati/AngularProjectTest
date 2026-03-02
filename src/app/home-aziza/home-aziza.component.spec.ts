import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAzizaComponent } from './home-aziza.component';

describe('HomeAzizaComponent', () => {
  let component: HomeAzizaComponent;
  let fixture: ComponentFixture<HomeAzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAzizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

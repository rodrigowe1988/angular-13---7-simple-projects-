import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoodComponentsComponent } from './all-food-components.component';

describe('AllFoodComponentsComponent', () => {
  let component: AllFoodComponentsComponent;
  let fixture: ComponentFixture<AllFoodComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoodComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFoodComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

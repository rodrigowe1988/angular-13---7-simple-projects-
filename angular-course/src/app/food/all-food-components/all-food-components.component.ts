import { Component, OnInit } from '@angular/core';

import { FoodAddComponent } from '../food-add/food-add.component';
import { FoodListComponent } from '../food-list/food-list.component';

@Component({
  selector: 'app-all-food-components',
  templateUrl: './all-food-components.component.html',
  styleUrls: ['./all-food-components.component.scss']
})
export class AllFoodComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

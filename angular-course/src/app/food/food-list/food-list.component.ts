import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';
import { Food } from '../Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<Food> | any;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => this.foodList = res,
      //(error) => error
    );

    this.foodListService.emitEvent.subscribe((res) =>
      alert(`Olha, você adicionou o elemento => ${res}`)
    );
  }
}

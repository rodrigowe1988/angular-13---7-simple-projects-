import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';
import { Food } from '../Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<Food> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => console.log(error),
    });

    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Você adicionou o elemento => ${res.nome}`);
      return this.foodList.push(res);
    });
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error: error => console.log(error)
    })
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe({
      next: res => console.log(res),
      error: error => error
    })
  }
}

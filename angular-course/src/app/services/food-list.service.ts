import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = [
    'pizza',
    'lasanha',
    'prato feito',
    'galinhada',
  ];

  public emitEvent = new EventEmitter();

  constructor() {}

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string): void {
    this.foodListAlert(value);
    this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}

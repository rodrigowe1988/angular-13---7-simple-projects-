import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../food/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private url: string = 'http://localhost:3000';

  public emitEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  public foodList(): Observable<Food> {
    return this.http.get<Food>(`${this.url}/food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string): void {
    this.foodListAlert(value);
    //this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}

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

  public foodList(): Observable<Array<Food>> {
    return this.http.get<Array<Food>>(`${this.url}/food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAlert(value: Food) {
    return this.emitEvent.emit(value);
  }

  public foodListAdd(value: string): Observable<Food> {
    return this.http.post<Food>(`${this.url}/food`, { nome: value }).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListEdit(value: string, id: number): Observable<Food> {
    return this.http.put<Food>(`${this.url}/food/${id}`, { nome: value }).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListDelete(id: number): Observable<Food> {
    return this.http.delete<Food>(`${this.url}/food/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

}

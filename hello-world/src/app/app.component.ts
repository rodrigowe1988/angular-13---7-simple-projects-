import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,

} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-title *ngIf="destroy"></app-title>
    {{ value }}
    <button (click)="addNumber()">Add</button>
    <button (click)="destroyComponent()">Destroy Component</button>
    <router-outlet></router-outlet> `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public value: number = 0;
  public destroy: boolean = true;
  constructor() {}

  public addNumber(): number {
    return (this.value = this.value + 1);
  }

  public destroyComponent(): void {
    this.destroy = false;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}

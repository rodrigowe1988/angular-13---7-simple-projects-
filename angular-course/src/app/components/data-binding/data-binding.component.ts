import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  test: string = 'this is an Interpolation';
  name: string = 'Rodrigo';
  age: number = 34;
  checkedDisabled: boolean = true;
  imgUrl: string =
    'https://angular.io/assets/images/logos/angular/shield-large.svg';
  angularicon: string = 'Angular icon';
  button: string = 'Alert';
  positionX: number = 0;
  positionY: number = 0;
  classes: string[] = ['green', 'yellow', 'red'];
  divClass: number = 0;

  constructor() {}

  ngOnInit(): void {}

  alertInfo(value: MouseEvent): void {
    alert('this is an alert message!');
    console.log(value);
    this.button = 'Alert pressed';
  }

  mouseMoveTest(value: MouseEvent) {
    this.positionX = value.x;
    this.positionY = value.y;
    if (this.positionY <= 680) {
      this.divClass = 0;
    }
    if (this.positionY > 680) {
      this.divClass = 1;
    } if (this.positionY > 740) {
      this.divClass = 2;
    }
  }
}

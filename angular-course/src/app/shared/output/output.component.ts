import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public sendData = new EventEmitter();

  public items: Array<{ name: string; age: number }> = [
    { name: 'Rodrigo', age: 34 },
    { name: 'Rogério', age: 28 },
    { name: 'Luana', age: 28 },
  ];
  constructor() {}

  ngOnInit(): void {}

  public getData(event: number) {
    this.sendData.emit(this.items[event]);
  }
}

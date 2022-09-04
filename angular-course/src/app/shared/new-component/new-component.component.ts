import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss'],
})
export class NewComponentComponent implements OnInit {
  name: string = 'Rodrigo Weber';
  public value: number = 42;

  constructor() {}

  ngOnInit(): void {}
}

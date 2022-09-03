import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Welcome to Angular';

  constructor() {}

  ngOnDestroy(): void {
    console.log('The component has been destroyed!');
  }
  ngOnInit(): void {
    console.log('ngOnInit test');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges test');
  }
}

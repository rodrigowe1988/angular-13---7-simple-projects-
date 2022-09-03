import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Welcome to Angular';

  imageUrl: string = '';

  disabledButton: boolean = true;

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

  changeFight(): void {
    this.imageUrl =
      'https://psxbrasil.com.br/wp-content/uploads/2021/05/Demon-Slayer-Game_05-20-21.jpg';
  }

  changePeace(): void {
    this.imageUrl = 'https://popularanime.com.br/wp-content/uploads/2021/12/Demon-Slayer-Tanjiro-1.webp'
  }
}

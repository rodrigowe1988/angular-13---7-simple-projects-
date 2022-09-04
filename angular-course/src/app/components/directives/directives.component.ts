import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  shaCondition: boolean = true;
  condition: boolean = true;
  imgUrl: string =
    'https://www.pngkey.com/png/full/268-2683340_cosplay-egl-league-of-legends-shaco-png.png';
  conditionClick: boolean = true;
  buttonName: string = 'Press Q';
  items: Array<{ name: string; age: number }> = [
    { name: 'Rodrigo', age: 34 },
    { name: 'Rogério', age: 28 },
    { name: 'Luana', age: 28 },
  ];
  name: string = '';
  value: boolean = true;
  fontSize: number = 16;
  newName: string = '';
  list: Array<{ name: string }> = [
    { name: 'Rodrigo' },
    { name: 'Rogério' },
    { name: 'Luana' },
  ];
  ngTemplateName: string = '';
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.value = !this.value;
    }, 3000);
  }

  public shacoOnClick() {
    this.shaCondition = !this.shaCondition;
  }

  public handleOnClick() {
    this.conditionClick = !this.conditionClick;
  }

  handleOnClickAdd(): void {
    this.items.push({ name: 'Nay', age: 31 });
  }

  public onClickEventItems(e: MouseEvent): void {
    console.log(e);
  }

  public removeItem(event: number) {
    this.items.splice(event, 1);
  }

  handleUpSize(): number {
    return (this.fontSize = this.fontSize + 2);
  }

  handleDownSize(): number {
    return (this.fontSize = this.fontSize - 2);
  }

  saveElement() {
    this.list.push({ name: this.newName });
    this.newName = '';
  }

  saveElementTemplate() {
    this.list.push({ name: this.ngTemplateName });
    this.newName = '';
  }
}

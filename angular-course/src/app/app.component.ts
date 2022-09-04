import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';

  public getData!: {name: string, age: number} | undefined;

  public setData(event: any) {
    this.getData = event;
  }
}

import { Component } from '@angular/core';
import { totalAmountOfCats } from '@juge/type-api';

@Component({
  selector: 'juge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cats = totalAmountOfCats;
}

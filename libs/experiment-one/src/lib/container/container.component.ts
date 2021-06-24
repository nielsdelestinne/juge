import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp1-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  data = [
    { name: 'Jim', familyName: 'Kazinski', birthYear: 1990 },
    { name: 'Jim', familyName: 'Kazinski', birthYear: 1990 },
    { name: 'Jim', familyName: 'Kazinski', birthYear: 1990 },
  ];
}

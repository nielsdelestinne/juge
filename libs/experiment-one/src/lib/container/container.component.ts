import { Component } from '@angular/core';
import { ApiService } from '@juge/data-access-api';

@Component({
  selector: 'exp1-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  cats$ = this.apiService.findAllCats_notOptimzed()

  constructor(private apiService: ApiService) {
  }
}

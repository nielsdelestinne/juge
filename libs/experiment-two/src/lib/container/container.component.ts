import { Component } from '@angular/core';
import { ApiService } from '@juge/data-access-api';
import { FormControl, FormGroup } from '@angular/forms';
import { Order, Pageable } from '@juge/type-api';

@Component({
  selector: 'juge-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  pageableForm: FormGroup = new FormGroup({
    page: new FormControl(0),
    size: new FormControl(25),
    orderBy: new FormControl('name'),
    order: new FormControl(Order.ASC),
  });

  cats$ = this.apiService.findAllCats_pageable(this.pageableForm.value as Pageable)

  constructor(private apiService: ApiService) {
  }

  onScrolledToBottom() {
    this.pageableForm.get('page')?.patchValue(this.pageableForm.get('page')?.value + 1)
    this.cats$ = this.apiService.findAllCats_pageable(this.pageableForm.value as Pageable);
  }
}

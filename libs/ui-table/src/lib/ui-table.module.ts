import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { LazyLoadingTableComponent } from './lazy-loading-table/lazy-loading-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SimpleTableComponent,
    LazyLoadingTableComponent
  ],
  exports: [SimpleTableComponent, LazyLoadingTableComponent]
})
export class UiTableModule {}

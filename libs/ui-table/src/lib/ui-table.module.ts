import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { LazyLoadingTableComponent } from './lazy-loading-table/lazy-loading-table.component';
import { LazyLoadingEagerDownloadingTableComponent } from './lazy-loading-eager-downloading-table/lazy-loading-eager-downloading-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    SimpleTableComponent,
    LazyLoadingTableComponent,
    LazyLoadingEagerDownloadingTableComponent
  ],
  exports: [SimpleTableComponent, LazyLoadingTableComponent, LazyLoadingEagerDownloadingTableComponent]
})
export class UiTableModule {}

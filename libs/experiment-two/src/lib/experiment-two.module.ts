import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UiTableModule } from '@juge/ui-table';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {path: '', component: ContainerComponent}
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiTableModule, ReactiveFormsModule],
  declarations: [
    ContainerComponent
  ],
})
export class ExperimentTwoModule {}

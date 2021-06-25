import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'experiment1',
    loadChildren: () => import('@juge/experiment-one').then((esModule) => esModule.ExperimentOneModule),
  },
  {
    path: 'experiment2',
    loadChildren: () => import('@juge/experiment-two').then((esModule) => esModule.ExperimentTwoModule),
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class ShellModule {}

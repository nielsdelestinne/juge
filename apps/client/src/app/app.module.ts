import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellModule } from '@juge/shell';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, HttpClientModule, ShellModule],
  providers: [
    {provide: 'apiRoot', useValue: environment.apiRoot}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

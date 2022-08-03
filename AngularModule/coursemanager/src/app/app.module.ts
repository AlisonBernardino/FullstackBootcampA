import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LanguageModule } from './languages/Language.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { error404Component } from './error404/error404.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, error404Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    LanguageModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'languages',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: error404Component,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

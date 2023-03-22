import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubPageComponentComponent } from './page-content/sub-page-component/sub-page-component.component';
import { TempComponentComponent } from './temp-component/temp-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    SubPageComponentComponent,
    TempComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

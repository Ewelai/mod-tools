import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';
import { ThemeModule, lightTheme, darkTheme } from './theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiDataService } from './shared-components/api-data/api-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    SubnavModule,
    BreadcrumbModule,
    HttpClientModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: ApiDataService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

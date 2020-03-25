import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { ApiButtonComponent } from './api-button/api-button.component';
import { AdminButtonComponent } from './admin-button/admin-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';

@NgModule({
  declarations: [
    HelpComponent,
    SubNavigationComponent,
    ApiButtonComponent,
    AdminButtonComponent,
    RefreshButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ],
  exports: [
    SubNavigationComponent,
    RefreshButtonComponent
  ]
})
export class SubnavModule { }

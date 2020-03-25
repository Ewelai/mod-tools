import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { DiagnoseTextViewComponent } from './diagnose-text-view/diagnose-text-view.component';
import { SideTopicsComponent } from './side-topics/side-topics.component';
import { AiPredictionComponent } from './side-topics/ai-prediction/ai-prediction.component';
import { TopicsComponent } from './side-topics/topics/topics.component';


@NgModule({
  declarations: [GenericViewComponent, DiagnoseTextViewComponent, SideTopicsComponent, AiPredictionComponent, TopicsComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ]
})
export class GenericViewModule { }

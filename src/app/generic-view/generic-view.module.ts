import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MainModule } from 'src/app/main/main.module';
import { SubnavModule } from 'src/app/subnav/subnav.module';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ThemeModule, lightTheme, darkTheme } from '../theme';
import { DiagnoseTextViewComponent } from './diagnose-text-view/diagnose-text-view.component';
import { SideTopicsComponent } from './side-topics/side-topics.component';
import { AiPredictionComponent } from './side-topics/ai-prediction/ai-prediction.component';
import { TopicsComponent } from './side-topics/topics/topics.component';
import { DeeperAnalysisTogglerComponent } from './deeper-analysis-toggler/deeper-analysis-toggler.component';
import { DeeperAnalysisContentComponent } from './deeper-analysis-content/deeper-analysis-content.component';


@NgModule({
  declarations: [
    GenericViewComponent,
    DiagnoseTextViewComponent,
    SideTopicsComponent,
    AiPredictionComponent,
    TopicsComponent,
    DeeperAnalysisTogglerComponent,
    DeeperAnalysisContentComponent
  ],
  imports: [
    MainModule,
    SubnavModule,
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ]
})
export class GenericViewModule { }

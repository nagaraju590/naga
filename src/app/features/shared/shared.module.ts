import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
// import { AuthenticatedMenuComponent } from './components/authenticated-menu/authenticated-menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SafeHtml } from './pipes/safe-html.pipe';
import { MicrositesCommonComponentsModule } from '@caliber/microsites-common-components';
import { UnauthorizedContainerComponent } from './containers/unauthorized-container/unauthorized-container.component';
import { LeftNavManagerComponent } from './components/left-nav-manager/left-nav-manager.component';
import { LeftNavManagerService } from './services/left-nav-manager.service';
// import { FormsModule } from '@angular/forms';

import {
  NgbDatepickerModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SkillComponent } from './components/skill/skill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SkillComponent,
    LayoutComponent,
    LogoutComponent,
    SafeHtml,
    UnauthorizedContainerComponent,
    LeftNavManagerComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SkillComponent,
    LayoutComponent,
    SafeHtml,
    UnauthorizedContainerComponent,
    LeftNavManagerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MicrositesCommonComponentsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [LeftNavManagerService],
})
export class SharedModule {}

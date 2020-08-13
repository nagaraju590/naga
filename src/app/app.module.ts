import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';
import { environment } from 'src/environments/environment';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './features/shared/token.interceptor';
import { H2oDigitalAccessGuard } from './app.h2o-digital-access.guard';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationModule } from '@caliber/configuration';
import { MANAGER_DASHBOARD_CONFIG } from './app.constants';
import { MicrositeRouterModule } from '@caliber/microsite-router';
import { MicrositesCommonComponentsModule } from '@caliber/microsites-common-components';
import { OktaConfigProviderService } from './features/shared/services/okta-config-provider.service';
import { AppInsightsService } from './features/shared/services/app-insights.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    OktaAuthModule,
    FormsModule,
    NgbModule,
    ModalModule.forRoot(),
    ConfigurationModule.forRoot(MANAGER_DASHBOARD_CONFIG),
    MicrositeRouterModule.forChild([]),
    MicrositesCommonComponentsModule,
  ],
  providers: [
    H2oDigitalAccessGuard,
    {
      provide: OKTA_CONFIG,
      useClass: OktaConfigProviderService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (service: AppInsightsService) => () => service.init(),
      deps: [AppInsightsService],
      multi: true
    },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}



import { Routes } from '@angular/router';
import { LayoutComponent } from './features/shared/components/layout/layout.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LogoutComponent } from './features/shared/components/logout/logout.component';
import { H2oDigitalAccessGuard } from './app.h2o-digital-access.guard';
import { UnauthorizedContainerComponent } from './features/shared/containers/unauthorized-container/unauthorized-container.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [OktaAuthGuard, H2oDigitalAccessGuard],
    children: [
      {
        path: '',
        component: LayoutComponent,
        loadChildren: './features/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'dev',
        loadChildren: './features/dev/dev.module#DevModule',
      },
    ],
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedContainerComponent,
  },

  {
    path: 'logout',
    component: LogoutComponent,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

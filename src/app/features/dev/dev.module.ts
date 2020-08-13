import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { AuthTokenComponent } from './components/auth-token/auth-token.component';
import { RouterModule } from '@angular/router';
import { routes } from './dev.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthTokenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DevModule {}

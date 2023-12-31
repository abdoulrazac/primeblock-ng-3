import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    BlockViewerModule
  ],
  declarations: [
    NotificationComponent
  ],
  providers: [MessageService]
})
export class NotificationModule {}

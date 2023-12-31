import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    BlockViewerModule,
    ButtonModule,
    AccordionModule,
    RippleModule
  ],
  declarations: [
    FeatureComponent
  ]
})
export class FeatureModule {}
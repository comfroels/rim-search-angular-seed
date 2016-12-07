import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RimSearchComponent } from './rim-search.component';
import { RimSearchRoutingModule } from './rim-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RimSearchService } from '../shared/rim-search/index';

@NgModule({
  imports: [CommonModule, RimSearchRoutingModule, SharedModule],
  declarations: [RimSearchComponent],
  exports: [RimSearchComponent],
  providers: [RimSearchService]
})
export class RimSearchModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RimSearchComponent } from './rim-search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RimSearchComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RimSearchRoutingModule { }

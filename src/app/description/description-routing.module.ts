import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { DescriptionPage } from './description.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DescriptionPageRoutingModule {}

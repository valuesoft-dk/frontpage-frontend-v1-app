import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkueproveSearchResultComponent } from '../skueprove-search-result/skueprove-search-result.component';
import { SkueproveEditComponent } from '../skueprove-edit/skueprove-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'skueprover',
    pathMatch: 'full'
  },
  // { path: 'search', component: SkueproveSearchResultComponent },
  {
    path: 'skueprover',
    children: [
      {
        path: '',
        component: SkueproveSearchResultComponent
      },
      {
        path: ':rno/edit',
        component: SkueproveEditComponent
      },      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

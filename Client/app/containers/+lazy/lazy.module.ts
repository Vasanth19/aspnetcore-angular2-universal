import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' },
        { path: 'tracks', component: LazyComponent },
        { path: 'albums', component: LazyComponent }
    ])
  ]
})
export class LazyModule {

}


//Lazy module testing - https://plnkr.co/edit/KdqKLokuAXcp5qecLslH?p=preview
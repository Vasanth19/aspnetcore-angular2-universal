import { Component } from '@angular/core';

@Component({
  selector: 'lazy-view',
  template: `
    <h1>Lazy-Loaded Component!</h1>
    <blockquote>
      Fun fact: This was lazy-loaded :)
      Check your Network tab!
     </blockquote>
    <p>
  <a [routerLink]="['tracks']">Tracks</a> |
  <a [routerLink]="['albums']">Albums</a>
</p>
<router-outlet></router-outlet>
  `
})
export class LazyComponent { }

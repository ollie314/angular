import {Component} from '@angular/core';
import {HeroesComponent} from './heroes';

@Component({
  standalone: true,
  selector: 'sg-app',
  template: '<toh-heroes></toh-heroes>',
  imports: [HeroesComponent],
})
export class AppComponent {}

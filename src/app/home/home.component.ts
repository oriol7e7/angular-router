import { Component } from '@angular/core';
import { Hero } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

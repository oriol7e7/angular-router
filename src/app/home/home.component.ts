import { Component } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { Information } from '../information/information.component';
import { Footer } from '../footer/footer.component';
import { Gamemodes } from '../gamemodes/gamemodes.component';
import { Contact } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [Hero, Information, Footer, Gamemodes, Contact],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

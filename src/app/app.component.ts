import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

@Component({
  imports: [Header, RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {}

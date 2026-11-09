import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navigation-list',
  styleUrl: './navigation-list.component.css',
  templateUrl: './navigation-list.component.html',
})
export class NavigationList {
  public toggleDark() {
    document.documentElement.classList.toggle('dark');
    console.log('clicked');
  }
}

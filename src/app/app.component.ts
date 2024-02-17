import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokedex';

  switchTheme() {
    const bodyClass = document.body.classList;
    const darkModeClass = 'dark-mode';

    bodyClass.toggle(darkModeClass);

    localStorage.setItem(
      'theme-mode',
      `${bodyClass.contains(darkModeClass) ? 'dark' : 'light'}`
    );
  }

  constructor() {
    console.log(123);
  }

  get isDark() {
    return document.body.classList.contains('dark-mode');
  }
}

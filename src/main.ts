import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

console.log(document.getElementById('load'));

const imgEl = document.getElementById('load') as HTMLImageElement;
imgEl.src = `./assets/images/loades/${Math.floor(Math.random() * 23) + 1}.gif`;
imgEl.hidden = false;

bootstrapApplication(AppComponent, appConfig)
  .then(() => {})
  .catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
console.log('hello');

platformBrowserDynamic().bootstrapModule(AppModule);

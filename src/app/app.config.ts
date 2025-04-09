import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      CommonModule,
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};

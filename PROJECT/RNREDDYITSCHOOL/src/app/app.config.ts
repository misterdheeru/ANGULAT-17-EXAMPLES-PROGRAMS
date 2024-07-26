import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CourseReduser } from './STATE-MANAGEMENT/REDUCERS/courseCards.Reduser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideEffects() ,importProvidersFrom(StoreModule.forRoot({
    COURSES: CourseReduser
 }))]
};

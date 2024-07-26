import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { STUDENTSEFFECT } from './STATE-MANAGMENT/EFFECTS/students.Effects';
import { STUDENTSREDUSER } from './STATE-MANAGMENT/REDUCERS/students.Reducer';
 

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideEffects(), importProvidersFrom(StoreModule.forRoot({
    Students: STUDENTSREDUSER
 })) , importProvidersFrom(EffectsModule.forRoot([STUDENTSEFFECT])) , provideHttpClient()]
};

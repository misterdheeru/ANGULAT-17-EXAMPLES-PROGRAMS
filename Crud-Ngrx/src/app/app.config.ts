import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { studentsRedusers } from './STATE-MANAGEMENT/REDUSER/students.Reduser';
import { StudentEffects } from './STATE-MANAGEMENT/EFFECTS/students.Effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideEffects() ,importProvidersFrom(StoreModule.forRoot({
    STUDENTS:studentsRedusers
   })) , importProvidersFrom(EffectsModule.forRoot([StudentEffects])) , provideHttpClient()]
};

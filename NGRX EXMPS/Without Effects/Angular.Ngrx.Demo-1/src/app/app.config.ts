import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { EmployeeReduser } from './STATE-MANAGEMENT/REDUCERS/employees.Reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(),importProvidersFrom(StoreModule.forRoot({
    Employee: EmployeeReduser
 }))]

};

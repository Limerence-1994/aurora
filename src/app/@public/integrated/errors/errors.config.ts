import { InjectionToken } from '@angular/core';

export class ErrorsConfig {
  code: number;
  info: string;
}

export const ERRORS_DATA = new InjectionToken<ErrorsConfig>('ERRORS_DATA');


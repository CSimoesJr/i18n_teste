import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PoI18nConfig, PoI18nModule, PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoUiI18nLibModule } from 'po-ui-i18n-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const defaultContext = 'general';
const browserLanguage = navigator.language || 'pt';
const i18nConfig: PoI18nConfig = {
  default: {
    language: browserLanguage,
    context: defaultContext,
    cache: false,
  },
  contexts: {
    general: {
      en: {
        teste: 'Texto do en-us App Final',
        str0003: 'App text',
      },
      pt: {
        teste: 'Texto do pt App Final',
        str0003: 'sttr 0003 PT',
      },
    },
    teste: {
      en: {
        teste: 'Texto do en-us App Final',
        str0003: 'App text',
      },
    },
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoI18nModule.config(i18nConfig),
    PoTemplatesModule,
    PoUiI18nLibModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoI18nModule, PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ProtheusLibTHFModule } from '@framesp/protheus-lib-thf';

const i18nConfig: any = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': {
        teste: 'Texto do app',
        str0004: 'Texto do app'
      }
    }
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    ProtheusLibTHFModule,
    PoI18nModule.config(i18nConfig)
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

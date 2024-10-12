import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  TransferState,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  withComponentInputBinding,
  withNavigationErrorHandler,
} from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideFileRouter(withComponentInputBinding()),
    provideAnimations(),
    provideFileRouter(
      withComponentInputBinding(),
      withNavigationErrorHandler(console.error)
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'ar',
        loader: {
          provide: TranslateLoader,

          // useFactory: translateBrowserLoaderFactory,
          useFactory: createTranslateLoader,
          deps: [HttpClient, TransferState],
          // deps: [HttpClient],
        },
      })
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor])
    ),
    // provideClientHydration(withI18nSupport()),
    provideContent(withMarkdownRenderer()),
  ],
};

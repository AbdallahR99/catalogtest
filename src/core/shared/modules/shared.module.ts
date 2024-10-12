import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgOptimizedImage,
  NgStyle,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export const SHARED_MODULES = [
  TranslateModule,
  RouterLink,
  NgStyle,
  NgOptimizedImage,
  NgFor,
  NgIf,
  AsyncPipe,
];

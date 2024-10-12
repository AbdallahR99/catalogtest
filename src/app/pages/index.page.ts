import { injectContentFiles } from '@analogjs/content';
import { Component, signal } from '@angular/core';
import { Category } from 'src/core/models/repository/category.model';
import { SHARED_MODULES } from 'src/core/shared/modules/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SHARED_MODULES],
  template: `
    <section class="categories mt-8 max-md:mx-4">
      <div
        class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-center "
      >
        @for (category of categories; track category.attributes.id) {
        <a
          [routerLink]="[
            isEn
              ? '/' + category.attributes.slugEn
              : '/' + category.attributes.slugAr
          ]"
        >
          <div
            class="category-card drop-shadow-sm bg-white shadow-lg hover:shadow-2xl h-full hover:-translate-y-4 hover:cursor-pointer transition-all rounded-lg overflow-hidden"
          >
            <img
              [src]="category.attributes.iconUrl"
              [alt]="category.attributes.titleEn"
              class="h-12 object-contain mx-auto mt-3"
            />
            <div class="p-4">
              <h2 class="text-2xl font-bold">
                {{
                  isEn
                    ? category.attributes.titleEn
                    : category.attributes.titleAr
                }}
              </h2>
              <p class="mt-2 text-gray-600">
                {{
                  isEn
                    ? category.attributes.descriptionEn
                    : category.attributes.descriptionAr
                }}
              </p>
              <span
                class="block mt-2 text-sm font-semibold text-primary hover:underline"
                >{{ 'View more' | translate }}</span
              >
            </div>
          </div>
        </a>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs > * {
        color: #fff;
      }

      @media (prefers-color-scheme: light) {
        .read-the-docs > * {
          color: #213547;
        }
      }
    `,
  ],
})
export default class HomeComponent {
  readonly categories = injectContentFiles<Category>(
    (contentFile) =>
      contentFile.filename.includes('/catalog/') &&
      contentFile.attributes.lang === 'en'
  ).sort((a, b) => a.attributes.order - b.attributes.order);
  get isEn(): boolean {
    return true;
  }
}

import { Component, inject, Input } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
} from '@angular/router';

import {
  injectContent,
  injectContentFiles,
  MarkdownComponent,
} from '@analogjs/content';
import { SHARED_MODULES } from 'src/core/shared/modules/shared.module';
import { Category } from 'src/core/models/repository/category.model';
// export interface ServiceAttributes {
//   title: string;
//   titleEn: string;
//   slug: string;
//   slugEn: string;
//   description: string;
//   descriptionEn: string;
//   coverImage: string;
// }
// export const routeMeta: RouteMeta = {
//   // title: 'TEsseest',
//   meta: catalogRouteMeta,
// };

// export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
//   const postAttributes = injectActivePostAttributes(route);

//   return [
//     {
//       name: 'description',
//       content: postAttributes.description,
//     },
//     {
//       name: 'author',
//       content: 'Analog Team',
//     },
//     {
//       property: 'og:title',
//       content: postAttributes.title,
//     },
//     {
//       property: 'og:description',
//       content: postAttributes.description,
//     },
//     {
//       property: 'og:image',
//       content: postAttributes.coverImage,
//     },
//   ];
// };

@Component({
  standalone: true,
  imports: [SHARED_MODULES, MarkdownComponent],
  template: ` <ng-container *ngIf="catalogPost$ | async as post">
    <h1>{{ post.attributes.title }}</h1>
    <analog-markdown [content]="post.content"></analog-markdown>
  </ng-container>`,
})
export default class CatalogPage {
  route = inject(ActivatedRoute);

  activatedRoute = inject(ActivatedRoute);

  readonly catalogPost = injectContentFiles<Category>(
    (contentFile) =>
      contentFile.filename.includes('/catalog/') &&
      contentFile.attributes.slug === this.route.snapshot.params['slug']
  )[0];
  catalogPost$;
  constructor() {
    const path = this.catalogPost.filename
      .replace('/src/content/', '')
      .replace('.md', '');
    this.catalogPost$ = injectContent<Category>({ customFilename: path });
    console.log(this.catalogPost$);
    console.log(this.activatedRoute, 'activatedRoute');
  }
}

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
    /**
     * Works!
     */
    // this.catalogPost$ = injectContent<Category>({
    //   subdirectory: 'catalog',
    //   param: 'slug',
    // });

    /**
     * Doesn't work!
     */
    this.catalogPost$ = injectContent<Category>(
      { customFilename: path },
      `No Content Found ${path}`
    );
    console.log(this.catalogPost$);
    console.log(this.activatedRoute, 'activatedRoute');
  }
}

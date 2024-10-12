/**
 *
 * @interface Base
 */

import { Guid } from 'guid-ts';

export abstract class BaseId {
  public id: Guid = Guid.empty();
}

export abstract class Base extends BaseId {
  public createdBy: string | null = null;
  public updatedBy: string | null = null;
  public deletedBy: string | null = null;
  public isDeleted: boolean = false;
  public createdDate: Date | string = new Date();
  public updatedDate: Date | string = new Date();
  public deletedDate: Date | string = new Date();
  constructor(public jsonData?: Base) {
    super();
    if (jsonData) {
      Object.assign(this, jsonData);
    }
  }
}

/**
 * For SEO and Friendly URL
 * for example:
 *  slug: النجم-لخدمات-المنازل
 *  slugEn: al-najm-for-home-services
 *
 * Very useful for SEO and Friendly URL
 */
export interface IUrlSlug {
  slug: string;
  slugEn: string;
}

export abstract class BaseUrlSlug extends Base implements IUrlSlug {
  public slug: string = '';
  public slugEn: string = '';
  constructor() {
    super();
  }
}

export interface ISeoMeta extends IUrlSlug {
  metaTitle: string;
  metaTitleEn: string;
  metaDescription: string;
  metaDescriptionEn: string;
  metaKeywords: string;
  metaKeywordsEn: string;
  metaImageUrl: string;
}

export class BaseSeo extends Base implements ISeoMeta {
  // SEO stuff
  public slug: string = '';
  public slugAr: string = '';
  public slugEn: string = '';
  public metaTitle: string = '';
  public metaTitleEn: string = '';
  public metaDescription: string = '';
  public metaDescriptionEn: string = '';
  public metaKeywords: string = '';
  public metaKeywordsAr: string = '';
  public metaKeywordsEn: string = '';
  public metaImageUrl: string = '';

  constructor(data?: Partial<BaseSeo>) {
    super();
    Object.assign(this, data);
  }
}

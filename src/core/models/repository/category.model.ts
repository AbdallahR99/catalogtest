import { BaseSeo } from '../base.model';

export class Category extends BaseSeo {
  // public name: string = '';
  // public nameAr: string = '';
  // public nameEn: string = '';
  public title: string = '';
  public titleAr: string = '';
  public titleEn: string = '';

  public description: string = '';
  public descriptionAr: string = '';
  public descriptionEn: string = '';
  public iconUrl: string = '';
  public lang: string = '';
  public order: number = 0;

  constructor(jsonData: Partial<Category>) {
    super();
    Object.assign(this, jsonData);
  }
}

import * as cheerio from 'cheerio';
import { IScrapy } from '../common/interfaces';

export class CheerioWrap implements IScrapy {
  private readonly _elements: string;

  constructor(elements: string) {
    this._elements = elements;
  }

  public scraping = (): cheerio.Root => {
    return cheerio.load(this._elements);
  };
}

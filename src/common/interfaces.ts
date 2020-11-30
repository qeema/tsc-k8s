export type ElementType = cheerio.Root;

export interface IFetch {
  fetch: () => Promise<string>;
}

export interface IScrapy {
  //scraping: () => Promise<ElementType>;
  scraping: () => ElementType;
}

export interface ISite {
  exec: () => Promise<void>;
}

import { CheerioWrap } from './common/cheerioWrapper';
import { IScrapy } from './common/interfaces';
import { FetchWrap } from './wrapper/fetchWrapper';

export class Main {
  private url = '';

  constructor(url: string) {
    this.url = url;
  }

  public exec = async (): Promise<void> => {
    const fetchObj = new FetchWrap(this.url);
    const response = await fetchObj.fetch();
    const cheerio = new CheerioWrap(response);
    const $ = cheerio.scraping();
    console.log('Ip address is here!!!!!!!!!!');
    console.log($('.outIp').text());
  };
}

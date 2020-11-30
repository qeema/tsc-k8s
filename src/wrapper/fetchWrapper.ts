import axios from 'axios';
import { IFetch } from '../common/interfaces';

export class FetchWrap implements IFetch {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  public fetch = async (): Promise<string> => {
    const response = await axios({
      method: 'get',
      url: this._url,
    });

    return response.data as string;
  };
}

import { apiConfig } from "./constants";

//declaration of a new class for api configuration
class Api {
  private _url: string;

  constructor ( url: string )    {
    this._url = url;
  } 

  //method for checking response
  _getRes(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  getCards() {
    return fetch(`${this._url}/?count=6`)
      .then(this._getRes);
  }  
}

export const api = new Api(apiConfig);
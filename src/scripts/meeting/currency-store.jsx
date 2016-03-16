export default class CurrencyStore {

  constructor() {
    this.currencies = [
     {
       "key": "AED",
       "name": "United Arab Emirates Dirham"
     },
     {
       "key": "AFN",
       "name": "Afghan Afghani"
     }
   ]
  }

  getCurrencies() {
    return this.currencies;
  }

}

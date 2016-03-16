class CurrencyStore {

  constructor() {
    this.currencies = currencies.sort((c1, c2) => c1.name < c2.name ? -1 : 1);
  }

  getCurrencies() {
    return this.currencies;
  }

}

var currencies = [
    {
        "key": "AED",
        "name": "United Arab Emirates Dirham"
    },
    {
        "key": "AFN",
        "name": "Afghan Afghani"
    },
    {
        "key": "ALL",
        "name": "Albanian Lek"
    },
    {
        "key": "AMD",
        "name": "Armenian Dram"
    },
    {
        "key": "ANG",
        "name": "Netherlands Antillean Guilder"
    },
    {
        "key": "AOA",
        "name": "Angolan Kwanza"
    },
    {
        "key": "ARS",
        "name": "Argentine Peso"
    },
    {
        "key": "AUD",
        "name": "Australian Dollar"
    },
    {
        "key": "AWG",
        "name": "Aruban Florin"
    },
    {
        "key": "AZN",
        "name": "Azerbaijani Manat"
    },
    {
        "key": "BAM",
        "name": "Bosnia-Herzegovina Convertible Mark"
    },
    {
        "key": "BBD",
        "name": "Barbadian Dollar"
    },
    {
        "key": "BDT",
        "name": "Bangladeshi Taka"
    },
    {
        "key": "BGN",
        "name": "Bulgarian Lev"
    },
    {
        "key": "BHD",
        "name": "Bahraini Dinar"
    },
    {
        "key": "BIF",
        "name": "Burundian Franc"
    },
    {
        "key": "BMD",
        "name": "Bermudan Dollar"
    },
    {
        "key": "BND",
        "name": "Brunei Dollar"
    },
    {
        "key": "BOB",
        "name": "Bolivian Boliviano"
    },
    {
        "key": "BRL",
        "name": "Brazilian Real"
    },
    {
        "key": "BSD",
        "name": "Bahamian Dollar"
    },
    {
        "key": "BTC",
        "name": "Bitcoin"
    },
    {
        "key": "BTN",
        "name": "Bhutanese Ngultrum"
    },
    {
        "key": "BWP",
        "name": "Botswanan Pula"
    },
    {
        "key": "BYR",
        "name": "Belarusian Ruble"
    },
    {
        "key": "BZD",
        "name": "Belize Dollar"
    },
    {
        "key": "CAD",
        "name": "Canadian Dollar"
    },
    {
        "key": "CDF",
        "name": "Congolese Franc"
    },
    {
        "key": "CHF",
        "name": "Swiss Franc"
    },
    {
        "key": "CLF",
        "name": "Chilean Unit of Account (UF)"
    },
    {
        "key": "CLP",
        "name": "Chilean Peso"
    },
    {
        "key": "CNY",
        "name": "Chinese Yuan"
    },
    {
        "key": "COP",
        "name": "Colombian Peso"
    },
    {
        "key": "CRC",
        "name": "Costa Rican Colón"
    },
    {
        "key": "CUP",
        "name": "Cuban Peso"
    },
    {
        "key": "CVE",
        "name": "Cape Verdean Escudo"
    },
    {
        "key": "CZK",
        "name": "Czech Republic Koruna"
    },
    {
        "key": "DJF",
        "name": "Djiboutian Franc"
    },
    {
        "key": "DKK",
        "name": "Danish Krone"
    },
    {
        "key": "DOP",
        "name": "Dominican Peso"
    },
    {
        "key": "DZD",
        "name": "Algerian Dinar"
    },
    {
        "key": "EEK",
        "name": "Estonian Kroon"
    },
    {
        "key": "EGP",
        "name": "Egyptian Pound"
    },
    {
        "key": "ERN",
        "name": "Eritrean Nakfa"
    },
    {
        "key": "ETB",
        "name": "Ethiopian Birr"
    },
    {
        "key": "EUR",
        "name": "Euro"
    },
    {
        "key": "FJD",
        "name": "Fijian Dollar"
    },
    {
        "key": "FKP",
        "name": "Falkland Islands Pound"
    },
    {
        "key": "GBP",
        "name": "British Pound Sterling"
    },
    {
        "key": "GEL",
        "name": "Georgian Lari"
    },
    {
        "key": "GHS",
        "name": "Ghanaian Cedi"
    },
    {
        "key": "GIP",
        "name": "Gibraltar Pound"
    },
    {
        "key": "GMD",
        "name": "Gambian Dalasi"
    },
    {
        "key": "GNF",
        "name": "Guinean Franc"
    },
    {
        "key": "GTQ",
        "name": "Guatemalan Quetzal"
    },
    {
        "key": "GYD",
        "name": "Guyanaese Dollar"
    },
    {
        "key": "HKD",
        "name": "Hong Kong Dollar"
    },
    {
        "key": "HNL",
        "name": "Honduran Lempira"
    },
    {
        "key": "HRK",
        "name": "Croatian Kuna"
    },
    {
        "key": "HTG",
        "name": "Haitian Gourde"
    },
    {
        "key": "HUF",
        "name": "Hungarian Forint"
    },
    {
        "key": "IDR",
        "name": "Indonesian Rupiah"
    },
    {
        "key": "ILS",
        "name": "Israeli New Sheqel"
    },
    {
        "key": "INR",
        "name": "Indian Rupee"
    },
    {
        "key": "IQD",
        "name": "Iraqi Dinar"
    },
    {
        "key": "IRR",
        "name": "Iranian Rial"
    },
    {
        "key": "ISK",
        "name": "Icelandic Króna"
    },
    {
        "key": "JEP",
        "name": "Jersey Pound"
    },
    {
        "key": "JMD",
        "name": "Jamaican Dollar"
    },
    {
        "key": "JOD",
        "name": "Jordanian Dinar"
    },
    {
        "key": "JPY",
        "name": "Japanese Yen"
    },
    {
        "key": "KES",
        "name": "Kenyan Shilling"
    },
    {
        "key": "KGS",
        "name": "Kyrgystani Som"
    },
    {
        "key": "KHR",
        "name": "Cambodian Riel"
    },
    {
        "key": "KMF",
        "name": "Comorian Franc"
    },
    {
        "key": "KPW",
        "name": "North Korean Won"
    },
    {
        "key": "KRW",
        "name": "South Korean Won"
    },
    {
        "key": "KWD",
        "name": "Kuwaiti Dinar"
    },
    {
        "key": "KYD",
        "name": "Cayman Islands Dollar"
    },
    {
        "key": "KZT",
        "name": "Kazakhstani Tenge"
    },
    {
        "key": "LAK",
        "name": "Laotian Kip"
    },
    {
        "key": "LBP",
        "name": "Lebanese Pound"
    },
    {
        "key": "LKR",
        "name": "Sri Lankan Rupee"
    },
    {
        "key": "LRD",
        "name": "Liberian Dollar"
    },
    {
        "key": "LSL",
        "name": "Lesotho Loti"
    },
    {
        "key": "LTL",
        "name": "Lithuanian Litas"
    },
    {
        "key": "LVL",
        "name": "Latvian Lats"
    },
    {
        "key": "LYD",
        "name": "Libyan Dinar"
    },
    {
        "key": "MAD",
        "name": "Moroccan Dirham"
    },
    {
        "key": "MDL",
        "name": "Moldovan Leu"
    },
    {
        "key": "MGA",
        "name": "Malagasy Ariary"
    },
    {
        "key": "MKD",
        "name": "Macedonian Denar"
    },
    {
        "key": "MMK",
        "name": "Myanma Kyat"
    },
    {
        "key": "MNT",
        "name": "Mongolian Tugrik"
    },
    {
        "key": "MOP",
        "name": "Macanese Pataca"
    },
    {
        "key": "MRO",
        "name": "Mauritanian Ouguiya"
    },
    {
        "key": "MTL",
        "name": "Maltese Lira"
    },
    {
        "key": "MUR",
        "name": "Mauritian Rupee"
    },
    {
        "key": "MVR",
        "name": "Maldivian Rufiyaa"
    },
    {
        "key": "MWK",
        "name": "Malawian Kwacha"
    },
    {
        "key": "MXN",
        "name": "Mexican Peso"
    },
    {
        "key": "MYR",
        "name": "Malaysian Ringgit"
    },
    {
        "key": "MZN",
        "name": "Mozambican Metical"
    },
    {
        "key": "NAD",
        "name": "Namibian Dollar"
    },
    {
        "key": "NGN",
        "name": "Nigerian Naira"
    },
    {
        "key": "NIO",
        "name": "Nicaraguan Córdoba"
    },
    {
        "key": "NOK",
        "name": "Norwegian Krone"
    },
    {
        "key": "NPR",
        "name": "Nepalese Rupee"
    },
    {
        "key": "NZD",
        "name": "New Zealand Dollar"
    },
    {
        "key": "OMR",
        "name": "Omani Rial"
    },
    {
        "key": "PAB",
        "name": "Panamanian Balboa"
    },
    {
        "key": "PEN",
        "name": "Peruvian Nuevo Sol"
    },
    {
        "key": "PGK",
        "name": "Papua New Guinean Kina"
    },
    {
        "key": "PHP",
        "name": "Philippine Peso"
    },
    {
        "key": "PKR",
        "name": "Pakistani Rupee"
    },
    {
        "key": "PLN",
        "name": "Polish Zloty"
    },
    {
        "key": "PYG",
        "name": "Paraguayan Guarani"
    },
    {
        "key": "QAR",
        "name": "Qatari Rial"
    },
    {
        "key": "RON",
        "name": "Romanian Leu"
    },
    {
        "key": "RSD",
        "name": "Serbian Dinar"
    },
    {
        "key": "RUB",
        "name": "Russian Ruble"
    },
    {
        "key": "RWF",
        "name": "Rwandan Franc"
    },
    {
        "key": "SAR",
        "name": "Saudi Riyal"
    },
    {
        "key": "SBD",
        "name": "Solomon Islands Dollar"
    },
    {
        "key": "SCR",
        "name": "Seychellois Rupee"
    },
    {
        "key": "SDG",
        "name": "Sudanese Pound"
    },
    {
        "key": "SEK",
        "name": "Swedish Krona"
    },
    {
        "key": "SGD",
        "name": "Singapore Dollar"
    },
    {
        "key": "SHP",
        "name": "Saint Helena Pound"
    },
    {
        "key": "SLL",
        "name": "Sierra Leonean Leone"
    },
    {
        "key": "SOS",
        "name": "Somali Shilling"
    },
    {
        "key": "SRD",
        "name": "Surinamese Dollar"
    },
    {
        "key": "STD",
        "name": "São Tomé and Príncipe Dobra"
    },
    {
        "key": "SVC",
        "name": "Salvadoran Colón"
    },
    {
        "key": "SYP",
        "name": "Syrian Pound"
    },
    {
        "key": "SZL",
        "name": "Swazi Lilangeni"
    },
    {
        "key": "THB",
        "name": "Thai Baht"
    },
    {
        "key": "TJS",
        "name": "Tajikistani Somoni"
    },
    {
        "key": "TMT",
        "name": "Turkmenistani Manat"
    },
    {
        "key": "TND",
        "name": "Tunisian Dinar"
    },
    {
        "key": "TOP",
        "name": "Tongan Paʻanga"
    },
    {
        "key": "TRY",
        "name": "Turkish Lira"
    },
    {
        "key": "TTD",
        "name": "Trinidad and Tobago Dollar"
    },
    {
        "key": "TWD",
        "name": "New Taiwan Dollar"
    },
    {
        "key": "TZS",
        "name": "Tanzanian Shilling"
    },
    {
        "key": "UAH",
        "name": "Ukrainian Hryvnia"
    },
    {
        "key": "UGX",
        "name": "Ugandan Shilling"
    },
    {
        "key": "USD",
        "name": "United States Dollar"
    },
    {
        "key": "UYU",
        "name": "Uruguayan Peso"
    },
    {
        "key": "UZS",
        "name": "Uzbekistan Som"
    },
    {
        "key": "VEF",
        "name": "Venezuelan Bolívar Fuerte"
    },
    {
        "key": "VND",
        "name": "Vietnamese Dong"
    },
    {
        "key": "VUV",
        "name": "Vanuatu Vatu"
    },
    {
        "key": "WST",
        "name": "Samoan Tala"
    },
    {
        "key": "XAF",
        "name": "CFA Franc BEAC"
    },
    {
        "key": "XAG",
        "name": "Silver (troy ounce)"
    },
    {
        "key": "XAU",
        "name": "Gold (troy ounce)"
    },
    {
        "key": "XCD",
        "name": "East Caribbean Dollar"
    },
    {
        "key": "XDR",
        "name": "Special Drawing Rights"
    },
    {
        "key": "XOF",
        "name": "CFA Franc BCEAO"
    },
    {
        "key": "XPF",
        "name": "CFP Franc"
    },
    {
        "key": "YER",
        "name": "Yemeni Rial"
    },
    {
        "key": "ZAR",
        "name": "South African Rand"
    },
    {
        "key": "ZMK",
        "name": "Zambian Kwacha (pre-2013)"
    },
    {
        "key": "ZMW",
        "name": "Zambian Kwacha"
    },
    {
        "key": "ZWD",
        "name": "Zimbabwean Dollar"
    }
];

export default new CurrencyStore();

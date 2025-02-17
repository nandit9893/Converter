const currencyData = [
  { country: "United States", code: "USD", rate: 1 },
  { country: "United Arab Emirates", code: "AED", rate: 3.6725 },
  { country: "Afghanistan", code: "AFN", rate: 66.747 },
  { country: "Albania", code: "ALL", rate: 91.3568 },
  { country: "Armenia", code: "AMD", rate: 387.4389 },
  { country: "Netherlands Antillean Guilder", code: "ANG", rate: 1.79 },
  { country: "Angola", code: "AOA", rate: 918.7449 },
  { country: "Argentina", code: "ARS", rate: 985.92 },
  { country: "Australia", code: "AUD", rate: 1.5065 },
  { country: "Aruba", code: "AWG", rate: 1.79 },
  { country: "Azerbaijan", code: "AZN", rate: 1.7008 },
  { country: "Bosnia and Herzegovina", code: "BAM", rate: 1.814 },
  { country: "Barbados", code: "BBD", rate: 2 },
  { country: "Bangladesh", code: "BDT", rate: 119.466 },
  { country: "Bulgaria", code: "BGN", rate: 1.8142 },
  { country: "Bahrain", code: "BHD", rate: 0.376 },
  { country: "Burundi", code: "BIF", rate: 2904.6033 },
  { country: "Bermuda", code: "BMD", rate: 1 },
  { country: "Brunei", code: "BND", rate: 1.3224 },
  { country: "Bolivia", code: "BOB", rate: 6.9143 },
  { country: "Brazil", code: "BRL", rate: 5.698 },
  { country: "Bahamas", code: "BSD", rate: 1 },
  { country: "Bhutan", code: "BTN", rate: 84.1078 },
  { country: "Botswana", code: "BWP", rate: 13.3714 },
  { country: "Belarus", code: "BYN", rate: 3.2885 },
  { country: "Belize", code: "BZD", rate: 2 },
  { country: "Canada", code: "CAD", rate: 1.3836 },
  { country: "Congo (Democratic Republic)", code: "CDF", rate: 2834.9958 },
  { country: "Switzerland", code: "CHF", rate: 0.8667 },
  { country: "Chile", code: "CLP", rate: 949.145 },
  { country: "China", code: "CNY", rate: 7.1324 },
  { country: "Colombia", code: "COP", rate: 4260.5178 },
  { country: "Costa Rica", code: "CRC", rate: 515.0261 },
  { country: "Cuba", code: "CUP", rate: 24 },
  { country: "Cape Verde", code: "CVE", rate: 102.2671 },
  { country: "Czech Republic", code: "CZK", rate: 23.4099 },
  { country: "Djibouti", code: "DJF", rate: 177.721 },
  { country: "Denmark", code: "DKK", rate: 6.919 },
  { country: "Dominican Republic", code: "DOP", rate: 60.2243 },
  { country: "Algeria", code: "DZD", rate: 133.3165 },
  { country: "Egypt", code: "EGP", rate: 48.7188 },
  { country: "Eritrea", code: "ERN", rate: 15 },
  { country: "Ethiopia", code: "ETB", rate: 120.3913 },
  { country: "Eurozone", code: "EUR", rate: 0.9275 },
  { country: "Fiji", code: "FJD", rate: 2.2361 },
  { country: "Falkland Islands", code: "FKP", rate: 0.7732 },
  { country: "Faroe Islands", code: "FOK", rate: 6.9189 },
  { country: "United Kingdom", code: "GBP", rate: 0.7732 },
  { country: "Georgia", code: "GEL", rate: 2.7336 },
  { country: "Guernsey", code: "GGP", rate: 0.7732 },
  { country: "Ghana", code: "GHS", rate: 16.1326 },
  { country: "Gibraltar", code: "GIP", rate: 0.7732 },
  { country: "Gambia", code: "GMD", rate: 70.774 },
  { country: "Guinea", code: "GNF", rate: 8646.2201 },
  { country: "Guatemala", code: "GTQ", rate: 7.7242 },
  { country: "Guyana", code: "GYD", rate: 208.7014 },
  { country: "Hong Kong", code: "HKD", rate: 7.7706 },
  { country: "Honduras", code: "HNL", rate: 25.1386 },
  { country: "Croatia", code: "HRK", rate: 6.988 },
  { country: "Haiti", code: "HTG", rate: 131.531 },
  { country: "Hungary", code: "HUF", rate: 373.5312 },
  { country: "Indonesia", code: "IDR", rate: 15631.0052 },
  { country: "Israel", code: "ILS", rate: 3.7978 },
  { country: "Isle of Man", code: "IMP", rate: 0.7732 },
  { country: "India", code: "INR", rate: 84.1063 },
  { country: "Iraq", code: "IQD", rate: 1307.5845 },
  { country: "Iran", code: "IRR", rate: 41949.3465 },
  { country: "Iceland", code: "ISK", rate: 138.3526 },
  { country: "Jersey", code: "JEP", rate: 0.7732 },
  { country: "Jamaica", code: "JMD", rate: 158.6558 },
  { country: "Jordan", code: "JOD", rate: 0.709 },
  { country: "Japan", code: "JPY", rate: 152.653 },
  { country: "Kenya", code: "KES", rate: 128.8935 },
  { country: "Kyrgyzstan", code: "KGS", rate: 85.4426 },
  { country: "Cambodia", code: "KHR", rate: 4068.3358 },
  { country: "Kiribati", code: "KID", rate: 1.5065 },
  { country: "Comoros", code: "KMF", rate: 456.2838 },
  { country: "South Korea", code: "KRW", rate: 1381.5731 },
  { country: "Kuwait", code: "KWD", rate: 0.3064 },
  { country: "Cayman Islands", code: "KYD", rate: 0.8333 },
  { country: "Kazakhstan", code: "KZT", rate: 485.1403 },
  { country: "Laos", code: "LAK", rate: 21930.3221 },
  { country: "Lebanon", code: "LBP", rate: 89500 },
  { country: "Sri Lanka", code: "LKR", rate: 292.9738 },
  { country: "Liberia", code: "LRD", rate: 192.3377 },
  { country: "Lesotho", code: "LSL", rate: 17.7737 },
  { country: "Libya", code: "LYD", rate: 4.8094 },
  { country: "Morocco", code: "MAD", rate: 9.9081 },
  { country: "Moldova", code: "MDL", rate: 17.9042 },
  { country: "Madagascar", code: "MGA", rate: 4600.5931 },
  { country: "North Macedonia", code: "MKD", rate: 56.8259 },
  { country: "Myanmar", code: "MMK", rate: 2097.76 },
  { country: "Mongolia", code: "MNT", rate: 3490.0507 },
  { country: "Macau", code: "MOP", rate: 8.0847 },
  { country: "Mauritania", code: "MRU", rate: 37.5537 },
  { country: "Malta", code: "MTL", rate: 0.8274 },
  { country: "Mauritius", code: "MUR", rate: 45.3088 },
  { country: "Maldives", code: "MVR", rate: 15.5096 },
  { country: "Malawi", code: "MWK", rate: 1127.9387 },
  { country: "Mexico", code: "MXN", rate: 18.1604 },
  { country: "Malaysia", code: "MYR", rate: 4.8135 },
  { country: "Mozambique", code: "MZN", rate: 63.955 },
  { country: "Namibia", code: "NAD", rate: 17.7721 },
  { country: "Nigeria", code: "NGN", rate: 773.6988 },
  { country: "Nicaragua", code: "NIO", rate: 36.5379 },
  { country: "Norway", code: "NOK", rate: 10.7555 },
  { country: "Nepal", code: "NPR", rate: 134.5726 },
  { country: "New Zealand", code: "NZD", rate: 1.6777 },
  { country: "Oman", code: "OMR", rate: 0.3845 },
  { country: "Panama", code: "PAB", rate: 1 },
  { country: "Peru", code: "PEN", rate: 3.7252 },
  { country: "Papua New Guinea", code: "PGK", rate: 3.7208 },
  { country: "Philippines", code: "PHP", rate: 56.77 },
  { country: "Pakistan", code: "PKR", rate: 278.133 },
  { country: "Poland", code: "PLN", rate: 4.2855 },
  { country: "Paraguay", code: "PYG", rate: 7349.363 },
  { country: "Qatar", code: "QAR", rate: 3.64 },
  { country: "Romania", code: "RON", rate: 4.6189 },
  { country: "Serbia", code: "RSD", rate: 108.4298 },
  { country: "Russia", code: "RUB", rate: 97.3564 },
  { country: "Rwanda", code: "RWF", rate: 1222.4064 },
  { country: "Saudi Arabia", code: "SAR", rate: 3.7501 },
  { country: "Solomon Islands", code: "SBD", rate: 8.4598 },
  { country: "Seychelles", code: "SCR", rate: 13.173 },
  { country: "Sudan", code: "SDG", rate: 600.612 },
  { country: "Sweden", code: "SEK", rate: 10.9654 },
  { country: "Singapore", code: "SGD", rate: 1.3225 },
  { country: "Saint Helena", code: "SHP", rate: 0.7732 },
  { country: "Sierra Leone", code: "SLL", rate: 19445.6749 },
  { country: "Somalia", code: "SOS", rate: 568.6852 },
  { country: "Suriname", code: "SRD", rate: 38.0731 },
  { country: "São Tomé and Príncipe", code: "STN", rate: 23.5119 },
  { country: "El Salvador", code: "SVC", rate: 8.7522 },
  { country: "Syria", code: "SYP", rate: 13513.1147 },
  { country: "Eswatini", code: "SZL", rate: 17.7729 },
  { country: "Thailand", code: "THB", rate: 36.2259 },
  { country: "Tajikistan", code: "TJS", rate: 11.07 },
  { country: "Tokelau", code: "TKT", rate: 1.5065 },
  { country: "Turkmenistan", code: "TMT", rate: 3.5 },
  { country: "Tonga", code: "TOP", rate: 2.355 },
  { country: "Trinidad and Tobago", code: "TTD", rate: 6.7423 },
  { country: "Tunisia", code: "TND", rate: 3.199 },
  { country: "Turkey", code: "TRY", rate: 28.2698 },
  { country: "Tuvalu", code: "TVD", rate: 1.5065 },
  { country: "Taiwan", code: "TWD", rate: 32.3758 },
  { country: "Tanzania", code: "TZS", rate: 2507.356 },
  { country: "Ukraine", code: "UAH", rate: 37.0172 },
  { country: "Uganda", code: "UGX", rate: 3782.3481 },
  { country: "Uruguay", code: "UYU", rate: 39.8252 },
  { country: "Uzbekistan", code: "UZS", rate: 12103.8658 },
  { country: "Venezuela", code: "VES", rate: 37.0264 },
  { country: "Vietnam", code: "VND", rate: 24545.8559 },
  { country: "Vanuatu", code: "VUV", rate: 120.7392 },
  { country: "Samoa", code: "WST", rate: 2.7937 },
  { country: "Yemen", code: "YER", rate: 250.2996 },
  { country: "South Africa", code: "ZAR", rate: 17.7731 },
  { country: "Zambia", code: "ZMW", rate: 21.1705 },
  { country: "Zimbabwe", code: "ZWL", rate: 333.3713 },
];

export default currencyData;
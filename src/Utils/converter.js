import axios from "axios";
const QUANTITY_API_KEY = import.meta.env.VITE_API_KEY;
const CURRENCY_API_KEY = import.meta.env.VITE_CURRENCY_KEY;
const findResult = async (value, quantity, inputUnit, outputUnit) => {
  if (quantity === "area") {
    inputUnit = inputUnit.replace("²", "2");
    outputUnit = outputUnit.replace("²", "2");
  } else if (quantity === "volume") {
    inputUnit = inputUnit.replace("³", "3");
    outputUnit = outputUnit.replace("³", "3");
  }
  const options = {
    method: "GET",
    url: `https://measurement-unit-converter.p.rapidapi.com/${quantity}`,
    params: {
      value: value,
      from: inputUnit,
      to: outputUnit,
    },
    headers: {
      "x-rapidapi-key": QUANTITY_API_KEY,
      "x-rapidapi-host": "measurement-unit-converter.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.value;
  } catch (error) {
    return null;
  }
};

const findWeight = async (value, inputUnit, outputUnit) => {
  const options = {
    method: "GET",
    url: "https://uniflex-unit-converter.p.rapidapi.com/convert-weight",
    params: {
      value: value,
      from: inputUnit,
      to: outputUnit,
    },
    headers: {
      "x-rapidapi-key": "13d25a2b30msh7fee03c3bfa6d4bp1470f4jsn1bd2174291c0",
      "x-rapidapi-host": "uniflex-unit-converter.p.rapidapi.com",
      "Cache-Control": "no-cache",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.convertTo.number;
  } catch (error) {
    return null;
  }
};

const convertLanguage = async (fromText, inputLanguage, outputLanguage) => {
  const url = `https://api.mymemory.translated.net/get`;
  const params = {
    q: fromText,
    langpair: `${inputLanguage}|${outputLanguage}`,
  };
  try {
    const response = await axios.get(url, { params });
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Error in convertLanguage:", error);
    return null;
  }
};

const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  const url = `https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/latest/${fromCurrency}`;
  try {
    const response = await axios.get(url);
    const rates = response.data.conversion_rates; 
    
    if (rates[toCurrency]) {
      const conversionRate = rates[toCurrency];
      const convertedAmount = amount * conversionRate;
      return parseFloat(convertedAmount.toFixed(2)); 
    } else {
      return null; 
    }
  } catch (error) {
    console.error("Error in convertCurrency:", error);
    return null; 
  }
};

export { findResult, findWeight, convertLanguage, convertCurrency };

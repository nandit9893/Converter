import React, { useContext, useState } from "react";
import "./Home.css";
import { ConverterContext } from "../../Context/ConverterContext";
import quantities from "../../Utils/units.js";
import languages from "../../Utils/languages.js";
import exchange from "../../assets/exchange.jpg";
import currencyData from "../../Utils/currency.js";
import { findResult, findWeight, convertLanguage, convertCurrency } from "../../Utils/converter.js";

const Home = () => {
  const { converterState, setConverterState } = useContext(ConverterContext);
  const [inputUnit, setInputUnit] = useState("");
  const [outputUnit, setOutputUnit] = useState("");
  const [data, setData] = useState({ text: "" });
  const [result, setResult] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("en-GB");
  const [outputLanguage, setOutputLanguage] = useState("hi-IN");
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event) => {
    setConverterState(event.target.value);
    setInputUnit("");
    setOutputUnit("");
    setData({ text: "" });
  };

  const getUnits = () => {
    if (converterState === "currency") {
      return currencyData; 
    }
    const selectedQuantity = quantities.find((q) => q.quantity === converterState);
    return selectedQuantity ? selectedQuantity.units : [];
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
  };

  const handleInputLanguageChange = (event) => {
    setInputLanguage(event.target.value);
  };

  const handleOutputLanguageChange = (event) => {
    setOutputLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (converterState === "language") {
      const response = await convertLanguage(fromText, inputLanguage, outputLanguage);
      setToText(response);
    } else if (converterState === "weight") {
      const response = await findWeight(data.text, inputUnit, outputUnit);
      setResult(response);
    } else if (converterState === "currency") {
      const response = await convertCurrency(data.text, inputUnit, outputUnit);
      setResult(response);
    } else {
      const response = await findResult(data.text, converterState, inputUnit, outputUnit);
      setResult(response);
    }
  };

  const handleExchange = () => {
    let tempText = fromText;
    setFromText(toText);
    setToText(tempText);
    let tempLanguage = inputLanguage;
    setInputLanguage(outputLanguage);
    setOutputLanguage(tempLanguage);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setConverterState("");
    setInputUnit("");
    setOutputUnit("");
    setData({ text: "" });
    setResult("");
  };

  const handleInputText = (event) => {
    setFromText(event.target.value);
  };

  const copyText = () => {
    navigator.clipboard.writeText(fromText);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(toText);
  };

  const handleTextArea = () => {
    setFromText("");
    setToText("");
  };

  return (
    <div className="home">
      <div className="home-header">
        <p>What do you want to convert?</p>
        <select name="conversion-options" id="conversion-select" value={converterState} onChange={handleSelectChange}>
          <option value="">None</option>
          <option value="length">Length</option>
          <option value="area">Area</option>
          <option value="volume">Volume</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
          <option value="speed">Speed</option>
          <option value="pressure">Pressure</option>
          <option value="power">Power</option>
          <option value="language">Language</option>
          <option value="currency">Currency</option>
        </select>
      </div>
      <div className="input-home">
        {
          converterState !== "language" ? 
          (
            <div className="convert-parameter">
              <div className="input">
                <p>From</p>
                <select name="input-units" id="input-units" value={inputUnit} onChange={handleInputUnitChange}>
                  <option value="">None</option>
                  {
                    converterState === "currency" ? 
                    (
                      currencyData.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.country}
                        </option>
                      ))
                    ) 
                    : 
                    (
                      getUnits().map((unit) => (
                        <option key={unit.id} value={unit.unit}>
                          {unit.unit}
                        </option>
                      ))
                    )
                  }
                </select>
              </div>
              <div className="output">
                <p>To</p>
                <select name="output-units" id="output-units" value={outputUnit} onChange={handleOutputUnitChange}>
                  <option value="">None</option>
                  {
                    converterState === "currency" ? 
                    (
                      currencyData.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.country}
                        </option>
                      ))
                    ) 
                    : 
                    (
                      getUnits().map((unit) => (
                        <option key={unit.id} value={unit.unit}>
                          {unit.unit}
                        </option>
                      ))
                    )
                  }
                </select>
              </div>
            </div>
          ) 
          : 
          (
            <div className="convert-parameter">
              <div className="input">
                <p>From</p>
                <select name="input-units" id="input-units" value={inputLanguage} onChange={handleInputLanguageChange}>
                  {
                    Object.entries(languages).map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))
                  }
                </select>
              </div>
              <img src={exchange} alt="" className="image-exchange" onClick={handleExchange} />
              <div className="output">
                <p>To</p>
                <select name="output-units" id="output-units" value={outputLanguage} onChange={handleOutputLanguageChange}>
                  {
                    Object.entries(languages).map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
          )
        }
        {
          converterState === "language" ? 
          (
            <div className="languages-converter">
              <div className="text-area">
                <textarea name="from" id="from" rows="10" placeholder="Enter text" value={fromText} onChange={handleInputText}></textarea>
                <textarea name="to" id="to" rows="10" value={toText} readOnly></textarea>
              </div>
              <div className="language-button">
                <button onClick={copyText}><p>Copy Text</p></button>
                <button onClick={handleTextArea}><p>Clear Text Area</p></button>
                <button onClick={copyResult}><p>Copy Result</p></button>
              </div>
            </div>
          ) 
          : 
          (
            <input type="text" placeholder="Enter the input" name="text" value={data.text} onChange={inputHandler} />
          )
        }
        <div className="button">
          <button onClick={handleSubmit}><p>Submit</p></button>
          <button onClick={handleReset}><p>Reset</p></button>
        </div>
      </div>
      {
        result ? 
        (
          <div className="result-home"><p>{result} {outputUnit}</p></div>
        ) 
        : 
        null
      }
    </div>
  );
};

export default Home;

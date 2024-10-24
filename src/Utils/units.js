const length = [
  { id: 1, unit: "m" },
  { id: 2, unit: "cm" },
  { id: 3, unit: "mm" },
  { id: 4, unit: "km" },
  { id: 5, unit: "in" },
  { id: 6, unit: "ft" },
  { id: 7, unit: "yd" },
  { id: 8, unit: "mi" },
  { id: 9, unit: "nm" },
  { id: 10, unit: "μm" },
  { id: 11, unit: "nmi" },
  { id: 12, unit: "light-year" },
  { id: 13, unit: "angstrom" },
];

const area = [
  { id: 1, unit: "m²" },
  { id: 2, unit: "cm²" },
  { id: 3, unit: "mm²" },
  { id: 4, unit: "km²" },
  { id: 5, unit: "ha" },
  { id: 6, unit: "ac" },
  { id: 7, unit: "ft²" },
  { id: 8, unit: "in²" },
  { id: 9, unit: "yd²" },
  { id: 10, unit: "mi²" },
  { id: 11, unit: "are" },
  { id: 12, unit: "barn" },
  { id: 13, unit: "nm²" },
  { id: 14, unit: "μm²" },
];

const volume = [
  { id: 1, unit: "m³" },
  { id: 2, unit: "cm³" },
  { id: 3, unit: "ml" },
  { id: 4, unit: "cl" },
  { id: 5, unit: "dl" },
  { id: 6, unit: "l" },
  { id: 7, unit: "kl" },
  { id: 8, unit: "Ml" },
  { id: 9, unit: "Gl" },
  { id: 10, unit: "km³" },
  { id: 11, unit: "krm" },
  { id: 12, unit: "tsk" },
  { id: 13, unit: "msk" },
  { id: 14, unit: "kkp" },
  { id: 15, unit: "glas" },
  { id: 16, unit: "kanna" },
  { id: 17, unit: "tsp" },
  { id: 18, unit: "Tbs" },
  { id: 19, unit: "in³" },
  { id: 20, unit: "fl oz" },
  { id: 21, unit: "cup" },
  { id: 22, unit: "pt" },
  { id: 23, unit: "qt" },
  { id: 24, unit: "gal" },
  { id: 25, unit: "ft³" },
  { id: 26, unit: "yd³" },
];

const weight = [
  { id: 1, unit: "kg" },
  { id: 2, unit: "g" },
  { id: 3, unit: "mg" },
  { id: 4, unit: "μg" },
  { id: 5, unit: "cg" },
  { id: 6, unit: "dg" },
  { id: 7, unit: "dag" },
  { id: 8, unit: "hg" },
  { id: 9, unit: "t" },
  { id: 10, unit: "Mg" },
  { id: 11, unit: "Gg" },
  { id: 12, unit: "Tg" },
  { id: 13, unit: "Pg" },
  { id: 14, unit: "Eg" },
  { id: 15, unit: "Zg" },
  { id: 16, unit: "Yg" },
];

const temperature = [
  { id: 1, unit: "C" },
  { id: 2, unit: "F" },
  { id: 3, unit: "K" },
];

const speed = [
  { id: 1, unit: "m/s" },
  { id: 2, unit: "km/h" },
  { id: 3, unit: "mm/h" },
  { id: 4, unit: "mph" },
  { id: 5, unit: "knot" },
  { id: 6, unit: "ft/s" },
  { id: 7, unit: "ft/min" },
  { id: 8, unit: "in/h" },
];

const pressure = [
  { id: 1, unit: "Pa" },
  { id: 2, unit: "kPa" },
  { id: 3, unit: "MPa" },
  { id: 4, unit: "hPa" },
  { id: 5, unit: "bar" },
  { id: 6, unit: "torr" },
  { id: 7, unit: "psi" },
  { id: 8, unit: "ksi" },
  { id: 9, unit: "inHg" },
];

const power = [
  { id: 1, unit: "W" },
  { id: 2, unit: "mW" },
  { id: 3, unit: "kW" },
  { id: 4, unit: "MW" },
  { id: 5, unit: "GW" },
  { id: 6, unit: "PS" },
  { id: 7, unit: "Btu/s" },
  { id: 8, unit: "ft-lb/s" },
  { id: 9, unit: "hp" },
];

const quantities = [
  { id: 1, quantity: "length", units: length },
  { id: 2, quantity: "area", units: area },
  { id: 3, quantity: "volume", units: volume },
  { id: 4, quantity: "weight", units: weight },
  { id: 5, quantity: "temperature", units: temperature },
  { id: 6, quantity: "speed", units: speed },
  { id: 7, quantity: "pressure", units: pressure },
  { id: 8, quantity: "power", units: power },
];

export default quantities;

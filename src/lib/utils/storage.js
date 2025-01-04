export const saveCalculation = (data, name) => {
  const calculations = getCalculations(name);
  calculations.push(data);
  localStorage.setItem(name, JSON.stringify(calculations));
};

export const getCalculations = (name) => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : [];
};

export const deleteCalculation = (id, name) => {
  const calculations = getCalculations(name).filter((calc) => calc.id !== id);
  localStorage.setItem(name, JSON.stringify(calculations));
};

export const getCalculationById = (id, name) => {
  return getCalculations(name).find((calc) => calc.id === id);
};

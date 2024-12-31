export const saveCalculation = (data) => {
  const calculations = getCalculations();
  calculations.push(data);
  localStorage.setItem("pvcCalculations", JSON.stringify(calculations));
};

export const getCalculations = () => {
  const data = localStorage.getItem("pvcCalculations");
  return data ? JSON.parse(data) : [];
};

export const deleteCalculation = (id) => {
  const calculations = getCalculations().filter((calc) => calc.id !== id);
  localStorage.setItem("pvcCalculations", JSON.stringify(calculations));
};

export const getCalculationById = (id) => {
  return getCalculations().find((calc) => calc.id === id);
};

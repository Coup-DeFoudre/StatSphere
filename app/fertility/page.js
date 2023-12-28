// components/Fertility.js
"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Fertility = () => {
  // State for Calculator
  const [inputLiveBirths, setInputLiveBirths] = useState("");
  const [inputPopulation, setInputPopulation] = useState("");
  const [crudeBirthRate, setCrudeBirthRate] = useState(null);
  const [inputWomenChildbearingAge, setInputWomenChildbearingAge] =
    useState("");
  const [generalFertilityRate, setGeneralFertilityRate] = useState(null);
  const [inputWomenInAgeGroup, setInputWomenInAgeGroup] = useState("");
  const [specificFertilityRate, setSpecificFertilityRate] = useState(null);
  const [inputAgeSpecificFertilityRates, setInputAgeSpecificFertilityRates] =
    useState("");
  const [totalFertilityRate, setTotalFertilityRate] = useState(null);

  // Function to calculate Crude Birth Rate
  const calculateCrudeBirthRate = () => {
    const births = parseInt(inputLiveBirths);
    const population = parseInt(inputPopulation);

    if (!isNaN(births) && !isNaN(population) && population > 0) {
      const rate = (births / population) * 1000;
      setCrudeBirthRate(rate.toFixed(2));
    } else {
      setCrudeBirthRate(null);
    }
  };

  // Function to calculate General Fertility Rate
  const calculateGeneralFertilityRate = () => {
    const births = parseInt(inputLiveBirths);
    const population = parseInt(inputWomenChildbearingAge);

    if (!isNaN(births) && !isNaN(population) && population > 0) {
      const rate = (births / population) * 1000;
      setGeneralFertilityRate(rate.toFixed(2));
    }
  };

  // Function to calculate Specific Fertility Rate
  const calculateSpecificFertilityRate = () => {
    const births = parseInt(inputLiveBirths);
    const population = parseInt(inputWomenInAgeGroup);

    if (!isNaN(births) && !isNaN(population) && population > 0) {
      const rate = (births / population) * 1000;
      setSpecificFertilityRate(rate.toFixed(2));
    }
  };

  // Function to calculate Total Fertility Rate
  const calculateTotalFertilityRate = () => {
    const ageSpecificFertilityRates = inputAgeSpecificFertilityRates
      .split(",")
      .map((rate) => parseFloat(rate.trim()));

    const totalRate = ageSpecificFertilityRates.reduce(
      (sum, rate) => sum + rate,
      0
    );

    if (!isNaN(totalRate)) {
      setTotalFertilityRate(totalRate.toFixed(2));
    } else {
      setTotalFertilityRate(null);
    }
  };

  // Reset Calculator
  const resetCalculator = () => {
    setInputLiveBirths("");
    setInputPopulation("");
    setCrudeBirthRate(null);
    setInputWomenChildbearingAge("");
    setGeneralFertilityRate(null);
    setInputWomenInAgeGroup("");
    setSpecificFertilityRate(null);
    setInputAgeSpecificFertilityRates("");
    setTotalFertilityRate(null);
  };

  return (
    <>
      <Navbar />
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427]">Fertility</h1>

        {/* What is Fertility */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            What is Fertility?
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            Fertility refers to the natural capability of a population or an
            individual to produce offspring. It is a key demographic component
            that measures the reproductive potential of a group or a specific
            age cohort within a population.
          </p>
        </div>

        {/* Crude Birth Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Crude Birth Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Crude Birth Rate (CBR) is a fundamental measure of fertility
            that represents the number of live births in a given year per 1,000
            people in the population.
          </p>

          {/* Calculator for Crude Birth Rate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inputLiveBirths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Number of Live Births
              </label>
              <input
                type="number"
                id="inputLiveBirths"
                value={inputLiveBirths}
                onChange={(e) => setInputLiveBirths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="inputPopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Population
              </label>
              <input
                type="number"
                id="inputPopulation"
                value={inputPopulation}
                onChange={(e) => setInputPopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateCrudeBirthRate}
            className="mt-4 mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Crude Birth Rate
          </button>

          {/* Display Crude Birth Rate */}
          {crudeBirthRate !== null && (
            <p className="text-lg mt-4 text-white">
              Crude Birth Rate: {crudeBirthRate} per 1,000 population
            </p>
          )}

          {/* Reset Calculator Button */}
          <button
            onClick={resetCalculator}
            className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Reset Calculator
          </button>
        </div>

        {/* General Fertility Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            General Fertility Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The General Fertility Rate (GFR) is a key demographic indicator that
            represents the number of live births per 1,000 women of childbearing
            age in a given year.
          </p>

          {/* Calculator for General Fertility Rate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inputLiveBirths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Number of Live Births
              </label>
              <input
                type="number"
                id="inputLiveBirths"
                value={inputLiveBirths}
                onChange={(e) => setInputLiveBirths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="inputWomenChildbearingAge"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Women of Childbearing Age
              </label>
              <input
                type="number"
                id="inputWomenChildbearingAge"
                value={inputWomenChildbearingAge}
                onChange={(e) => setInputWomenChildbearingAge(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateGeneralFertilityRate}
            className="mt-4 mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate General Fertility Rate
          </button>

          {/* Display General Fertility Rate */}
          {generalFertilityRate !== null && (
            <p className="text-lg mt-4 text-white">
              General Fertility Rate: {generalFertilityRate} per 1,000 women of
              childbearing age
            </p>
          )}

          {/* Reset Calculator Button */}
          <button
            onClick={resetCalculator}
            className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Reset Calculator
          </button>
        </div>

        {/* Specific Fertility Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Specific Fertility Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Specific Fertility Rate (SFR) measures the number of live births
            to women in a specific age group per 1,000 women in that age group
            in a given year.
          </p>

          {/* Calculator for Specific Fertility Rate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inputLiveBirths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Number of Live Births
              </label>
              <input
                type="number"
                id="inputLiveBirths"
                value={inputLiveBirths}
                onChange={(e) => setInputLiveBirths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="inputWomenInAgeGroup"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Women in Specific Age Group
              </label>
              <input
                type="number"
                id="inputWomenInAgeGroup"
                value={inputWomenInAgeGroup}
                onChange={(e) => setInputWomenInAgeGroup(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateSpecificFertilityRate}
            className="mt-4 mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Specific Fertility Rate
          </button>

          {/* Display Specific Fertility Rate */}
          {specificFertilityRate !== null && (
            <p className="text-lg mt-4 text-white">
              Specific Fertility Rate: {specificFertilityRate} per 1,000 women
              in the specific age group
            </p>
          )}

          {/* Reset Calculator Button */}
          <button
            onClick={resetCalculator}
            className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Reset Calculator
          </button>
        </div>

       
        {/* Total Fertility Rate */}
        <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Total Fertility Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Total Fertility Rate (TFR) is a summary measure representing the
            average number of children a woman would have during her
            reproductive years if the current age-specific fertility rates
            remain constant.
          </p>

          {/* Calculator for Total Fertility Rate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inputAgeSpecificFertilityRates"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Age-Specific Fertility Rates (comma-separated)
              </label>
              <input
                type="text"
                id="inputAgeSpecificFertilityRates"
                value={inputAgeSpecificFertilityRates}
                onChange={(e) =>
                  setInputAgeSpecificFertilityRates(e.target.value)
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="e.g., 25, 30, 35, 40"
              />
            </div>
          </div>
          <button
            onClick={calculateTotalFertilityRate}
            className="mt-4 mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Total Fertility Rate
          </button>

          {/* Display Total Fertility Rate */}
          {totalFertilityRate !== null && (
            <p className="text-lg mt-4 text-white">
              Total Fertility Rate: {totalFertilityRate} children per woman
            </p>
          )}

          {/* Reset Calculator Button */}
          <button
            onClick={resetCalculator}
            className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Reset Calculator
          </button>
        </div>
      </div>
    </>
  );
};

export default Fertility;

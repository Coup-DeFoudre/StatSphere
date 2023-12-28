// components/GrossReproductionRate.js
"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const GrossReproductionRate = () => {
  const [grrResult, setGrrResult] = useState(null);
  const [inputAge, setInputAge] = useState("");
  const [inputFx, setInputFx] = useState("");
  const [inputMx, setInputMx] = useState("");

  const calculateGRR = () => {
    // Add your logic to calculate Gross Reproduction Rate here
    const age = parseInt(inputAge);
    const fx = parseFloat(inputFx);
    const mx = parseFloat(inputMx);
  
    // Validate input
    if (isNaN(age) || isNaN(fx) || isNaN(mx)) {
      // Handle invalid input
      setGrrResult(null);
      return;
    }
  
    // Calculate GRR
    const grr = (fx / (1 + mx)) ** age;
    setGrrResult(grr.toFixed(4));
  };

  return (
    <>
      <Navbar />
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427]">
          Gross Reproduction Rate (GRR) Calculator
        </h1>

         {/* Explanation of Gross Reproduction Rate */}
         <p className="text-lg mb-4 text-white">
          The Gross Reproduction Rate (GRR) is a demographic measure that
          represents the average number of daughters a woman would have during
          her lifetime, assuming that age-specific fertility rates remain
          constant. It provides insights into the potential for population
          growth or decline based on the fertility patterns of women in
          different age groups.
        </p>

        {/* Notions and Terminology */}
<div className="mt-8">
  <h2 className="text-2xl font-bold mb-4 text-[#242426]">Notions and Terminology</h2>

  <p className="text-lg mb-4 text-gray-200">
    Before delving into the calculation and interpretation of the Gross Reproduction Rate (GRR), it's essential to understand the key notions and terminology associated with this demographic measure.
  </p>

  <h3 className="text-xl font-bold mb-2 text-[#242426]">Gross Reproduction Rate (GRR)</h3>
  <p className="text-lg mb-4 text-gray-200">
    The Gross Reproduction Rate is a demographic indicator that quantifies the average number of daughters born to a woman over her lifetime, assuming age-specific fertility rates remain constant. It is a crucial measure for assessing the potential growth or decline of a population based on the reproductive behavior of women in different age groups.
  </p>

  <h3 className="text-xl font-bold mb-2 text-[#242426]">Age-specific Fertility Rate (f_x)</h3>
  <p className="text-lg mb-4 text-gray-200">
    The Age-specific Fertility Rate represents the number of live births per 1,000 women in a specific age group within a given period. It is a fundamental component in the calculation of the GRR, providing insights into the fertility patterns of women at different stages of their reproductive years.
  </p>

  <h3 className="text-xl font-bold mb-2 text-[#242426]">Age-specific Mortality Rate (m_x)</h3>
  <p className="text-lg mb-4 text-gray-200">
    The Age-specific Mortality Rate represents the number of deaths per 1,000 individuals in a specific age group within a given period. While not directly used in GRR calculations, understanding mortality rates is crucial for interpreting population dynamics and potential life expectancy implications.
  </p>

  {/* Add more definitions as needed */}
</div>


        {/* Calculator for Gross Reproduction Rate */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="inputAge"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
              Age
            </label>
            <input
              type="number"
              id="inputAge"
              value={inputAge}
              onChange={(e) => setInputAge(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="inputFx"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
              ( f_x )
            </label>
            <input
              type="number"
              id="inputFx"
              value={inputFx}
              onChange={(e) => setInputFx(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="inputMx"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
              ( m_x )
            </label>
            <input
              type="number"
              id="inputMx"
              value={inputMx}
              onChange={(e) => setInputMx(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <button
          onClick={calculateGRR}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Calculate GRR
        </button>

        {/* Display GRR Result */}
        {grrResult !== null && (
          <p className="text-lg mt-4 text-white">
            Gross Reproduction Rate: {grrResult}
          </p>
        )}

         {/* Additional Information about GRR */}
         <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">Interpretation of GRR</h2>
          <p className="text-lg mb-4 text-gray-200">
            The Gross Reproduction Rate provides important insights into the
            potential growth or decline of a population. Key points for
            interpretation include:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">GRR = 1:</span> Indicates a stable population where each woman, on average, is replacing herself. The number of daughters born is sufficient to replace the existing female population.
            </li>
            <li>
              <span className="font-semibold">GRR &gt; 1:</span> Suggests a growing population as each woman, on average, is giving birth to more than one daughter. This situation can lead to population expansion.
            </li>
            <li>
              <span className="font-semibold">GRR &lt; 1:</span>  Indicates a declining population as each woman, on average, is giving birth to fewer than one daughter. The number of daughters born is insufficient to replace the existing female population.
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            The GRR is a valuable tool for policymakers, demographers, and
            researchers to understand the reproductive behavior of a population
            and its implications for future demographic trends.
          </p>
        </div>
      </div>
    </>
  );
};

export default GrossReproductionRate;

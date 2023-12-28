// components/NetReproductionRate.js
"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const NetReproductionRate = () => {
  const [nrrResult, setNrrResult] = useState(null);
  const [inputAge, setInputAge] = useState("");
  const [inputFx, setInputFx] = useState("");
  const [inputMx, setInputMx] = useState("");

  const calculateNRR = () => {
    // Add your logic to calculate Net Reproduction Rate here
    const age = parseInt(inputAge);
    const fx = parseFloat(inputFx);
    const mx = parseFloat(inputMx);
  
    // Validate input
    if (isNaN(age) || isNaN(fx) || isNaN(mx)) {
      // Handle invalid input
      setNrrResult(null);
      return;
    }
  
    // Calculate NRR
    const nrr = (fx / (1 + mx)) ** age;
    setNrrResult(nrr.toFixed(4));
  };

  return (
    <>
      <Navbar />
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427]">
          Net Reproduction Rate (NRR) 
        </h1>

        {/* Explanation of Net Reproduction Rate */}
        <p className="text-lg mb-4 text-white">
          The Net Reproduction Rate (NRR) is a demographic measure that represents the average number of daughters a woman would have during her lifetime, adjusted for the mortality of females. It takes into account the age-specific fertility rates and the probability of surviving to reproductive age.<br/>
          In other words NRR represents the average number of daughters a woman would have during her lifetime, but it is adjusted for the mortality of females. It considers the probability of surviving to reproductive age.
          
        </p>

        {/* Notions and Terminology */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">Notions and Terminology</h2>

          <p className="text-lg mb-4 text-gray-200">
            Before delving into the calculation and interpretation of the Net Reproduction Rate (NRR), it's essential to understand the key notions and terminology associated with this demographic measure.
          </p>

          <h3 className="text-xl font-bold mb-2 text-[#242426]">Net Reproduction Rate (NRR)</h3>
          <p className="text-lg mb-4 text-gray-200">
            The Net Reproduction Rate is a demographic indicator that quantifies the average number of daughters born to a woman over her lifetime, adjusted for the mortality of females. It provides insights into the potential growth or decline of a population, considering both fertility and survival factors.
          </p>

          <h3 className="text-xl font-bold mb-2 text-[#242426]">Age-specific Fertility Rate (f_x)</h3>
          <p className="text-lg mb-4 text-gray-200">
            The Age-specific Fertility Rate represents the number of live births per 1,000 women in a specific age group within a given period. It is a fundamental component in the calculation of the NRR, providing insights into the fertility patterns of women at different stages of their reproductive years.
          </p>

          <h3 className="text-xl font-bold mb-2 text-[#242426]">Age-specific Mortality Rate (m_x)</h3>
          <p className="text-lg mb-4 text-gray-200">
            The Age-specific Mortality Rate represents the number of deaths per 1,000 females in a specific age group within a given period. Understanding mortality rates is crucial for interpreting population dynamics and potential life expectancy implications in the context of the Net Reproduction Rate.
          </p>

          {/* Add more definitions as needed */}
        </div>

        {/* Calculator for Net Reproduction Rate */}
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
          onClick={calculateNRR}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Calculate NRR
        </button>

        {/* Display NRR Result */}
        {nrrResult !== null && (
          <p className="text-lg mt-4 text-white">
            Net Reproduction Rate: {nrrResult}
          </p>
        )}

        {/* Additional Information about NRR */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">Interpretation of NRR</h2>
          <p className="text-lg mb-4 text-gray-200">
            The Net Reproduction Rate provides important insights into the potential growth or decline of a population, considering both fertility and survival factors. Key points for interpretation include:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">NRR = 1:</span> Indicates a stable population when accounting for both fertility and mortality. The number of daughters born, adjusted for the probability of survival, is sufficient to replace the existing female population.
            </li>
            <li>
              <span className="font-semibold">NRR &gt; 1:</span> Suggests a growing population, considering both fertility and mortality. Each woman, on average, is giving birth to more than one daughter, and the surviving daughters are expected to replace the existing female population and contribute to growth.
            </li>
            <li>
              <span className="font-semibold">NRR &lt; 1:</span> Indicates a declining population, accounting for both fertility and mortality. Each woman, on average, is giving birth to fewer than one daughter, and the surviving daughters are insufficient to replace the existing female population, leading to a decline.
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            The NRR is a valuable tool for policymakers, demographers, and researchers to understand the reproductive and survival dynamics of a population and their combined impact on future demographic trends.
          </p>
        </div>
      </div>
    </>
  );
};

export default NetReproductionRate;


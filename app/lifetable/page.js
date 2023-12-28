// components/LifeTable.js
"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const LifeTable = () => {
  const [sampleMortalityTable, setSampleMortalityTable] = useState([]);

  const [inputAge, setInputAge] = useState("");
  const [inputLx, setInputLx] = useState("");
  const [inputlx1, setInputlx1] = useState("");
  const [inputTx, setInputTx] = useState("");

  
  const calculateLifeTableEntry = () => {
    // Add your logic to calculate life table entries here
    // Update sampleMortalityTable state with the new entry
    const age = parseInt(inputAge);
    const lx = parseFloat(inputLx);
    const lx1 = parseFloat(inputlx1);
    const Tx = parseFloat(inputTx);
    const dx = lx - lx1;
    const qx = dx / lx;
    const px = lx1 / lx;
    const mx = (2 * qx) / (1 + qx);
    const Lx = (lx + lx1) / 2;
    const ex0 = Tx / lx;
    const ex = ex0 - 0.5;
  
    const newEntry = {
      age,
      lx,
      lx1,
      dx,
      qx,
      px,
      mx,
      Lx,
      Tx,
      ex0,
      ex,
    };
  
    setSampleMortalityTable([...sampleMortalityTable, newEntry]);
    // Clear input fields
    setInputAge("");
    setInputLx("");
    setInputlx1("");
    setInputTx("");
  };
  

  return (
    <>
      <Navbar />
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427]">
          Mortality Table (Life Table)
        </h1>

        <p className="text-lg mb-4 text-white">
          A Mortality Table, also known as a Life Table, is a statistical tool
          used in demography to represent the mortality patterns of a population
          over a specific period. It provides a systematic way to analyze the
          distribution of individuals across different age groups and their
          likelihood of surviving to subsequent ages.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">Key Points</h2>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            Provides a detailed summary of mortality patterns within a
            population.
          </li>
          <li>
            Utilized in actuarial science, public health, and social sciences.
          </li>
          <li>
            Offers insights into life expectancy, survival probabilities, and
            mortality rates.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Uses of Life Table
        </h2>

        <p className="text-lg mb-4 text-[#242426]">
          Life tables are essential for understanding population dynamics and
          are widely used for various purposes, including:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            Actuarial Calculations: Predicting life expectancy for insurance and
            pension planning.
          </li>
          <li>
            Public Health Planning: Informing healthcare policies and
            interventions.
          </li>
          <li>
            Demographic Analysis: Studying population structure, aging, and
            mortality trends.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Notations and Terminology
        </h2>

        <p className="text-lg mb-4 text-[#242426]">
          Life tables use specific notations to represent various concepts:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            <span className="font-semibold">lx:</span> The number of survivors
            at the beginning of age interval x.
          </li>
          <li>
            <span className="font-semibold">qx:</span> The probability of dying
            before reaching age x.
          </li>
          <li>
            <span className="font-semibold">px:</span> The probability of
            surviving to age x.
          </li>
          <li>
            <span className="font-semibold">Lx:</span> Person-years lived in age
            interval x.
          </li>
          <li>
            <span className="font-semibold">Tx:</span> Person-years lived beyond
            age x.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">Theorems</h2>

        <p className="text-lg mb-4 text-white">
          Life tables are associated with fundamental theorems, such as:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            Gompertz Law: Describes the exponential increase in mortality with
            age.
          </li>
          <li>
            Makeham's Law: Considers additional age-independent mortality.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Expectation of Life
        </h2>

        <p className="text-lg mb-4 text-gray-200">
          Expectation of Life, denoted as ( e_x ), represents the average number
          of additional years a person of age x can expect to live. It is a key
          metric derived from a mortality table and is calculated using the
          formula:
        </p>

        <p className="text-lg mb-4 text-gray-200">
          e<sub>x</sub>
          <sup>0</sup> = T<sub>x</sub> / l<sub>x</sub>
        </p>

        <p className="text-lg mb-4 text-gray-200">
          The expectation of life provides valuable insights into the overall
          longevity of a population and is used in various fields, including
          insurance, public health planning, and social policy development.
        </p>

        {/* Central Mortality Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Central Mortality Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Central Mortality Rate (CMR) is a critical metric in demography
            that provides insights into the overall mortality level of a
            population. Unlike specific mortality rates that focus on particular
            age groups, the Central Mortality Rate considers the entire
            population, providing a comprehensive measure of mortality for the
            given time period.
          </p>

          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            m<sub>x</sub> = d<sub>x</sub> / L<sub>x</sub>
          </p>

          <p className="text-lg mb-4 text-gray-200">
            The Central Mortality Rate is calculated by dividing the total
            number of deaths (d_x) in a given period by the sum of the number of
            survivors (l_x) across all age groups. This rate is then multiplied
            by 1000 to express the mortality rate per 1000 population.
          </p>

          <p className="text-lg mb-4 text-gray-200">
            The CMR is particularly useful for assessing the overall health and
            mortality burden on a population, aiding in public health planning,
            policy formulation, and comparative demographic analysis.
          </p>
        </div>

        {/* Force of Mortality */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Force of Mortality
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Force of Mortality (mu_x) is a fundamental concept in demography
            and life table analysis. It represents the instantaneous rate of
            mortality at exact age (x) and is a key parameter for understanding
            and modeling mortality patterns within a population.
          </p>

          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            mu_x = - d<sub>x</sub> / l<sub>x</sub>
          </p>

          <p className="text-lg mb-4 text-gray-200">
            The Force of Mortality is calculated by dividing the number of
            deaths (d_x) at age (x) by the number of survivors (l_x) at the
            beginning of age (x). The negative sign indicates the decreasing
            number of survivors over time.
          </p>

          <p className="text-lg mb-4">Interpretation:</p>
          <p className="text-lg mb-4 text-gray-200">
            A higher value of (mu_x) indicates a higher risk of mortality at age
            (x), representing the intensity of mortality experienced by
            individuals at that exact age.
          </p>

          <p className="text-lg mb-4 text-gray-200">
            The Force of Mortality is a crucial parameter used in various
            demographic models, including the construction of life tables and
            survival analysis. It provides valuable insights into the dynamics
            of mortality within a population, aiding in the formulation of
            policies related to healthcare, pension planning, and overall public
            health strategies.
          </p>
        </div>

        {/* Life Table Assumptions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Assumptions in Life Table Construction
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The construction of a life table relies on several assumptions to
            facilitate a systematic analysis of mortality patterns within a
            population. These assumptions include:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">Closed Population:</span> Assumes
              that the population under study is closed, meaning no migration in
              or out of the population during the observation period.
            </li>
            <li>
              <span className="font-semibold">Stable Age Distribution:</span>{" "}
              Assumes that the age distribution of the population remains
              relatively constant over time, allowing for the application of
              age-specific mortality rates.
            </li>
            <li>
              <span className="font-semibold">Constant Mortality Rates:</span>{" "}
              Assumes that mortality rates within each age group remain constant
              throughout the observation period.
            </li>
          </ul>
        </div>

        {/* Description of Life Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Description of a Life Table
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            A life table is a comprehensive statistical tool used to summarize
            mortality patterns within a population. It organizes demographic
            information by age, providing a snapshot of the mortality experience
            of individuals over a specific period. The main components of a life
            table include:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">lx:</span> The number of survivors
              at the beginning of age interval x.
            </li>
            <li>
              <span className="font-semibold">qx:</span> The probability of
              dying before reaching age x.
            </li>
            <li>
              <span className="font-semibold">px:</span> The probability of
              surviving to age x.
            </li>
            <li>
              <span className="font-semibold">Lx:</span> Person-years lived in
              age interval x.
            </li>
            <li>
              <span className="font-semibold">Tx:</span> Person-years lived
              beyond age x.
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            These components collectively offer a detailed understanding of
            mortality and survival patterns within different age groups of the
            population.
          </p>
        </div>

        {/* Construction of Life Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Construction of a Life Table
          </h2>
          <p className="text-lg mb-4 ">
            The construction of a life table involves several steps:
          </p>

          <ol className="list-decimal pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">Data Collection:</span> Gather
              age-specific mortality and population data for a defined period.
            </li>
            <li>
              <span className="font-semibold">Calculation of lx and qx:</span>{" "}
              Compute the number of survivors (l_x) and the probability of dying
              (q_x) for each age group.
            </li>
            <li>
              <span className="font-semibold">Calculation of px:</span> Derive
              the probability of surviving to each age (p_x).
            </li>
            <li>
              <span className="font-semibold">Calculation of Lx and Tx:</span>{" "}
              Determine person-years lived (L_x) and total person-years lived
              beyond each age (T_x).
            </li>
            <li>
              <span className="font-semibold">
                Calculation of Additional Measures:
              </span>{" "}
              Compute other measures such as the Central Mortality Rate, Force
              of Mortality, and Expectation of Life.
            </li>
          </ol>

          <p className="text-lg mb-4 text-gray-200">
            The resulting life table provides a comprehensive overview of
            mortality and survival dynamics within the studied population,
            serving as a valuable tool for demographic analysis and public
            health planning.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Life Table Calculator
        </h2>

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
              htmlFor="inputLx"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
               l<sub>x</sub> 
            </label>
            <input
              type="number"
              id="inputLx"
              value={inputLx}
              onChange={(e) => setInputLx(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="inputlx1"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
              l<sub>x+1</sub>
            </label>
            <input
              type="number"
              id="inputlx+1"
              value={inputlx1}
              onChange={(e) => setInputlx1(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

          </div>
          <div>
            <label
              htmlFor="inputTx"
              className="block text-sm font-semibold text-gray-900 mb-1"
            >
              T<sub>x</sub>
            </label>
            <input
              type="number"
              id="inputTx"
              value={inputTx}
              onChange={(e) => setInputTx(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            </div>
        </div>
        <button
          onClick={calculateLifeTableEntry}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Calculate
        </button>
        <h2 className="text-2xl font-bold my-4 text-[#242426]">
          Mortality Table
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border">x</th>
                <th className="py-2 px-4 border">
                  l<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  d<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  q<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  p<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  m<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  L<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  T<sub>x</sub>
                </th>
                <th className="py-2 px-4 border">
                  e<sub>x</sub>
                  <sup>0</sup>
                </th>
                <th className="py-2 px-4 border">
                  e<sub>x</sub>
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleMortalityTable.map((entry, index) => (
                <tr key={index} className="text-gray-200">
                  <td className="py-2 px-4 border">{entry.age}</td>
                  <td className="py-2 px-4 border">{entry.lx}</td>
                  <td className="py-2 px-4 border">{entry.dx}</td>
                  <td className="py-2 px-4 border">{entry.qx}</td>
                  <td className="py-2 px-4 border">{entry.px}</td>
                  <td className="py-2 px-4 border">{entry.mx}</td>
                  <td className="py-2 px-4 border">{entry.Lx}</td>
                  <td className="py-2 px-4 border">{entry.Tx}</td>
                  <td className="py-2 px-4 border">{entry.ex0}</td>
                  <td className="py-2 px-4 border">{entry.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Uses of Life Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Uses of Life Table
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            Life tables serve as a powerful tool in demography and public
            health, offering valuable insights into the mortality and survival
            patterns of a population. The uses of a life table are diverse and
            impactful, contributing to various fields and decision-making
            processes. Some key applications include:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">
                Life Expectancy Calculation:
              </span>{" "}
              Life tables are essential for calculating life expectancy,
              providing an estimate of the average number of years a person can
              expect to live.
            </li>
            <li>
              <span className="font-semibold">Actuarial Calculations:</span>{" "}
              Life tables are widely used in insurance and pension planning to
              assess risk and make financial projections based on mortality
              patterns.
            </li>
            <li>
              <span className="font-semibold">Public Health Planning:</span>{" "}
              Governments and healthcare agencies utilize life tables to inform
              public health policies, allocate resources, and design
              interventions based on the demographic profile of the population.
            </li>
            <li>
              <span className="font-semibold">
                Comparative Demographic Analysis:
              </span>{" "}
              Life tables facilitate the comparison of mortality and survival
              patterns across different populations, regions, or time periods,
              aiding researchers in understanding variations and identifying
              trends.
            </li>
            <li>
              <span className="font-semibold">Policy Formulation:</span>{" "}
              Policymakers use life tables to make informed decisions regarding
              healthcare infrastructure, social security, and other areas
              impacted by population dynamics.
            </li>
            <li>
              <span className="font-semibold">Epidemiological Studies:</span>{" "}
              Researchers in epidemiology employ life tables to study the impact
              of diseases on mortality rates and to assess the effectiveness of
              healthcare interventions.
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            By providing a comprehensive overview of mortality and survival
            within a population, life tables play a pivotal role in shaping
            policies, guiding financial decisions, and advancing our
            understanding of demographic dynamics.
          </p>
        </div>
      </div>
    </>
  );
};

export default LifeTable;

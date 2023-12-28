// components/MortalityMeasurement.js
"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const MortalityMeasurement = () => {
  const [totalPopulation, setTotalPopulation] = useState("");
  const [totalDeaths, setTotalDeaths] = useState("");
  const [malePopulation, setMalePopulation] = useState("");
  const [maleDeaths, setMaleDeaths] = useState("");
  const [femalePopulation, setFemalePopulation] = useState("");
  const [femaleDeaths, setFemaleDeaths] = useState("");
  const [ageSpecificDeaths, setAgeSpecificDeaths] = useState("");
  const [ageSpecificPopulation, setAgeSpecificPopulation] = useState("");
  const [ageSpecific, setAgeSpecific] = useState("");
  const [crudeDeathRate, setCrudeDeathRate] = useState(null);
  const [maleCrudeDeathRate, setMaleCrudeDeathRate] = useState(null);
  const [femaleCrudeDeathRate, setFemaleCrudeDeathRate] = useState(null);
  const [specificDeathRate, setSpecificDeathRate] = useState(null);
  const [ageSpecificDeathRate, setAgeSpecificDeathRate] = useState(null);

  const calculateCrudeDeathRate = () => {
    if (totalPopulation && totalDeaths) {
      const cdr =
        (parseInt(totalDeaths, 10) / parseInt(totalPopulation, 10)) * 1000;
      setCrudeDeathRate(cdr.toFixed(2));
    }
  };

  const calculateMaleCrudeDeathRate = () => {
    if (malePopulation && maleDeaths) {
      const maleCdr =
        (parseInt(maleDeaths, 10) / parseInt(malePopulation, 10)) * 1000;
      setMaleCrudeDeathRate(maleCdr.toFixed(2));
    }
  };

  const calculateFemaleCrudeDeathRate = () => {
    if (femalePopulation && femaleDeaths) {
      const femaleCdr =
        (parseInt(femaleDeaths, 10) / parseInt(femalePopulation, 10)) * 1000;
      setFemaleCrudeDeathRate(femaleCdr.toFixed(2));
    }
  };

  const calculateSpecificDeathRate = () => {
    if (ageSpecificDeaths && ageSpecificPopulation) {
      const specificRate =
        (parseInt(ageSpecificDeaths, 10) /
          parseInt(ageSpecificPopulation, 10)) *
        1000;
      setSpecificDeathRate(specificRate.toFixed(2));
    }
  };

  const calculateAgeSpecificDeathRate = () => {
    if (ageSpecific) {
      setAgeSpecificDeathRate(ageSpecific);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427]">
          Measurement of Mortality
        </h1>

        {/* Crude Death Rate (CDR) */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Crude Death Rate (CDR)
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Crude Death Rate is a measure of the number of deaths in a
            population per unit of population size, usually per 1,000 people.
          </p>
          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            m = (Annual deaths / Average population) x k, <br />
            where m = Crude Death Rate & k = 1000, usually.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="totalPopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Total Population
              </label>
              <input
                type="number"
                id="totalPopulation"
                value={totalPopulation}
                onChange={(e) => setTotalPopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="totalDeaths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Total Deaths
              </label>
              <input
                type="number"
                id="totalDeaths"
                value={totalDeaths}
                onChange={(e) => setTotalDeaths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateCrudeDeathRate}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Crude Death Rate
          </button>
          {crudeDeathRate !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Result:</p>
              <p className="text-xl text-white">{crudeDeathRate}</p>
            </div>
          )}
        </div>

        {/* Male Crude Death Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Male Crude Death Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Male Crude Death Rate calculates the number of male deaths per
            1,000 male population.
          </p>
          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            C.D.R for males = (male deaths/male population) x 1000
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="malePopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Male Population
              </label>
              <input
                type="number"
                id="malePopulation"
                value={malePopulation}
                onChange={(e) => setMalePopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="maleDeaths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Male Deaths
              </label>
              <input
                type="number"
                id="maleDeaths"
                value={maleDeaths}
                onChange={(e) => setMaleDeaths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateMaleCrudeDeathRate}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Male Crude Death Rate
          </button>
          {maleCrudeDeathRate !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Result:</p>
              <p className="text-xl text-white">{maleCrudeDeathRate}</p>
            </div>
          )}
        </div>

        {/* Female Crude Death Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Female Crude Death Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Female Crude Death Rate calculates the number of female deaths
            per 1,000 female populations.
          </p>
          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            C.D.R for females = (female deaths/female population) x 1000
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="femalePopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Female Population
              </label>
              <input
                type="number"
                id="femalePopulation"
                value={femalePopulation}
                onChange={(e) => setFemalePopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="femaleDeaths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Female Deaths
              </label>
              <input
                type="number"
                id="femaleDeaths"
                value={femaleDeaths}
                onChange={(e) => setFemaleDeaths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateFemaleCrudeDeathRate}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Female Crude Death Rate
          </button>
          {femaleCrudeDeathRate !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Result:</p>
              <p className="text-xl text-white">{femaleCrudeDeathRate}</p>
            </div>
          )}
        </div>

        {/* Specific Death Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Specific Death Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Specific Death Rate is a critical measure in mortality
            statistics that provides insights into the mortality risk for a
            specific subset of the population. Unlike the Crude Death Rate,
            which considers the entire population, the Specific Death Rate
            focuses on a particular demographic or defined group, allowing for a
            more nuanced understanding of mortality patterns.
          </p>
          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            Specific Death Rate = (Deaths in Specific Group/Population in
            Specific Group ) * 1000
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ageSpecificDeaths"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Deaths in Specific Group
              </label>
              <input
                type="number"
                id="ageSpecificDeaths"
                value={ageSpecificDeaths}
                onChange={(e) => setAgeSpecificDeaths(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="ageSpecificPopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Population in Specific Group
              </label>
              <input
                type="number"
                id="ageSpecificPopulation"
                value={ageSpecificPopulation}
                onChange={(e) => setAgeSpecificPopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateSpecificDeathRate}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Specific Death Rate
          </button>
          {specificDeathRate !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Result:</p>
              <p className="text-xl text-white">{specificDeathRate}</p>
            </div>
          )}
        </div>

        {/* Age-Specific Death Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Age-Specific Death Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Age-Specific Death Rate is a crucial demographic indicator that
            provides insights into mortality patterns within specific age
            groups. It measures the number of deaths per unit of population
            within a defined age range. This rate allows policymakers and
            researchers to understand how mortality risk varies across different
            age cohorts, contributing to targeted public health interventions
            and healthcare planning.
          </p>
          <p className="text-lg mb-4">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            Agre Specific Death Rate = (Deaths in Specific Age Group/Population
            in Specific Age Group ) * 1000
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ageSpecific"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Deaths in Specific Age Group
              </label>
              <input
                type="number"
                id="ageSpecific"
                value={ageSpecific}
                onChange={(e) => setAgeSpecific(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="ageSpecificPopulation"
                className="block text-sm font-semibold text-gray-900 mb-1"
              >
                Population in Specific Age Group
              </label>
              <input
                type="number"
                id="ageSpecificPopulation"
                value={ageSpecificPopulation}
                onChange={(e) => setAgeSpecificPopulation(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            onClick={calculateAgeSpecificDeathRate}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate Age-Specific Death Rate
          </button>
          {ageSpecificDeathRate !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Result:</p>
              <p className="text-xl text-white">{ageSpecificDeathRate}</p>
            </div>
          )}
        </div>
        {/* Infant Mortality Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Infant Mortality Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            Infant Mortality Rate (IMR) is a vital indicator in demographic and
            public health studies, providing insights into the health and
            well-being of a population, especially its youngest members. IMR
            specifically measures the number of deaths of infants under the age
            of one per 1,000 live births during a given time period. This rate
            is a critical measure for assessing the effectiveness of healthcare
            systems, socio-economic conditions, and public health interventions
            targeting maternal and child health.
          </p>

          <p className="text-lg mb-4 text-[#242426]">Formula:</p>
          <p className="text-lg mb-4 text-gray-200">
            {" "}
            
               IMR = ( Number of Infant Deaths/Number of Live Births) *1000 
            
          </p>

          <p className="text-lg mb-4 text-gray-200">
            IMR is calculated by taking the number of infant deaths during a
            specific time period and dividing it by the total number of live
            births during the same period. The result is then multiplied by 1000
            to express the rate per 1000 live births. This rate is particularly
            sensitive to variations in healthcare access, maternal health, and
            socio-economic factors, making it a key indicator for assessing the
            overall health infrastructure and societal well-being.
          </p>
          <p className="text-lg mb-4 text-gray-200">
            IMR is often utilized by governments, health organizations, and
            researchers to evaluate the success of healthcare policies and
            interventions aimed at reducing infant mortality. A lower IMR is
            generally indicative of a healthier and more robust healthcare
            system, improved maternal care, and better overall living
            conditions.
          </p>
          <p className="text-lg mb-4 ">Notations and Definitions:</p>

          <ul className="list-disc pl-6 mb-4 text-gray-200">
            <li>
              <span className="font-semibold">IMR:</span> Infant Mortality Rate,
              expressed per 1,000 live births.
            </li>
            <li>
              <span className="font-semibold">Number of Infant Deaths:</span>{" "}
              The total count of infants who died before reaching the age of one
              during a specific time period.
            </li>
            <li>
              <span className="font-semibold">Number of Live Births:</span> The
              total count of live births during the same time period.
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            The significance of IMR lies in its ability to highlight potential
            issues in prenatal and postnatal care, access to healthcare
            services, and broader socio-economic determinants affecting infant
            health. Governments and health organizations often prioritize the
            reduction of IMR as part of their public health agendas,
            implementing measures such as improved maternal care, vaccination
            programs, and community health initiatives.
          </p>
          <p className="text-lg mb-4 text-gray-200">
            Monitoring changes in IMR over time allows for the assessment of the
            impact of healthcare policies and interventions, guiding further
            efforts to enhance maternal and child health outcomes. By
            understanding the complexities influencing infant mortality,
            societies can work towards creating conditions that ensure the
            health and well-being of their youngest members.
          </p>
        </div>
        {/* Standardized Death Rate */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#242426]">
            Standardized Death Rate
          </h2>
          <p className="text-lg mb-4 text-gray-200">
            The Standardized Death Rate (SDR) is a key metric in demography used
            to compare and analyze mortality rates across populations with
            different age structures. It adjusts for variations in age
            distribution, allowing for a more accurate comparison of mortality
            patterns between different groups. Standardization is particularly
            crucial when comparing the mortality rates of distinct populations
            or assessing the impact of mortality risk factors while controlling
            for age differences.
          </p>

          {/* <p className="text-lg mb-4">
    Formula:
  </p>
  <p className="text-lg mb-4">
    {' '}
    {'\\( SDR = \\frac{\\sum (Observed \\, Deaths \\, in \\, Each \\, Age \\, Group \\times Standard \\, Population \\, in \\, Each \\, Age \\, Group)}{Total \\, Standard \\, Population} \\)'}
  </p> */}

          <p className="text-lg mb-4 text-gray-200">
            The SDR is calculated by multiplying the observed number of deaths
            in each age group by the corresponding standard population's
            proportion and summing these values across all age groups. This sum
            is then divided by the total standard population. The resulting rate
            represents the mortality rate that would prevail in the study
            population if it had the same age distribution as the standard
            population.
          </p>

          <p className="text-lg mb-4">
            <span className="font-semibold">Direct Method:</span>
            <span className="text-gray-200">
              {" "}
              The direct method involves applying age-specific death rates from
              a standard population to the age distribution of the study
              population. The formula for direct standardization is as follows:
            </span>
          </p>
          {/* <p className="text-lg mb-4">
    {' '}
    {'\\( SDR_{Direct} = \\sum \\left( \\frac{Observed \\, Deaths \\, in \\, Each \\, Age \\, Group \\times Standard \\, Death \\, Rate \\, in \\, Each \\, Age \\, Group}{Total \\, Standard \\, Population} \\right) \\)'}
  </p> */}
          <p className="text-lg mb-4">
            <span className="font-semibold">Indirect Method:</span>{" "}
            <span className="text-gray-200">
              The indirect method involves comparing the ratio of observed
              deaths to expected deaths in the study population to that in the
              standard population. The formula for indirect standardization is
              given by:
            </span>
          </p>
          {/* <p className="text-lg mb-4">
            {" "}
            {
              " SDR_{Indirect} = {sum Observed \\ Deaths}{\\sum Expected \\, Deaths} \\times SDR_{Standard} \\)"
            }
          </p> */}

          <p className="text-lg mb-4">
            <span className="font-semibold">Merits and Demerits:</span>
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-semibold">Merits of Direct Method:</span>
              <ul className="list-disc pl-6 mb-2">
                <li className="text-gray-200">
                  Straightforward and easy to compute.
                </li>
                <li className="text-gray-200">
                  Provides a precise estimate of mortality rates for specific
                  age groups.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Demerits of Direct Method:</span>
              <ul className="list-disc pl-6 mb-2">
                <li className="text-gray-200">
                  Requires detailed age-specific data, which might not always be
                  available.
                </li>
                <li className="text-gray-200">
                  Does not account for variations in age distribution within age
                  groups.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Merits of Indirect Method:</span>
              <ul className="list-disc pl-6 mb-2">
                <li className="text-gray-200">
                  Applicable when detailed age-specific data is lacking.
                </li>
                <li className="text-gray-200">
                  Accounts for variations in age distribution within age groups.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">
                Demerits of Indirect Method:
              </span>
              <ul className="list-disc pl-6 mb-2">
                <li className="text-gray-200">
                  Less precise compared to the direct method, as it involves
                  estimation.
                </li>
                <li className="text-gray-200">
                  Dependent on the choice of the standard population, which may
                  introduce bias.
                </li>
              </ul>
            </li>
          </ul>

          <p className="text-lg mb-4 text-gray-200">
            Understanding the merits and demerits of both direct and indirect
            methods is crucial for researchers and policymakers when selecting
            an appropriate standardization approach based on the available data
            and research objectives.
          </p>
        </div>
      </div>
    </>
  );
};

export default MortalityMeasurement;

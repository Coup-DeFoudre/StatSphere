// components/VitalStatisticsIntro.js
import Navbar from "@/components/navbar";
import React from "react";

const Introduction = () => {
  return (
    <>
      <Navbar />

      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#800427] drop-shadow-sm -z-50">
          Introduction to Vital Statistics
        </h1>

        <p className="text-lg mb-4 text-white">
          Vital statistics refer to the collection, analysis, interpretation,
          and dissemination of data concerning vital events in a population.
          These vital events include births, deaths, marriages, divorces, and
          other significant occurrences.
        </p>

        <p className="text-lg mb-4 text-white">
          The study of vital statistics plays a crucial role in understanding
          population dynamics, health trends, and social patterns. By examining
          these key events, statisticians and policymakers can derive valuable
          insights that inform public health policies, medical research, and
          social planning.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Uses of Vital Statistics
        </h2>

        <p className="text-lg mb-4 text-white">
          Vital statistics provide a foundation for various fields, including:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            Public Health: Tracking and analyzing the prevalence of diseases,
            mortality rates, and life expectancy.
          </li>
          <li>
            Social Sciences: Understanding population structure, fertility
            rates, and migration patterns.
          </li>
          <li>
            Government Planning: Informing policy decisions related to
            healthcare, education, and social services.
          </li>
          <li>
            Medical Research: Identifying trends and patterns to guide medical
            research and healthcare interventions.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#242426]">
          Methods of Vital Statistics Collection
        </h2>

        <p className="text-lg mb-4 text-white">
          Vital statistics are collected through various methods, including:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>
            Registration Systems: Recording vital events in official government
            registers, such as birth and death certificates.
          </li>
          <li>
            Surveys: Conducting population surveys to gather information on
            fertility, mortality, and other vital events.
          </li>
          <li>
            Hospital and Health Records: Extracting data from healthcare
            institutions to analyze medical events.
          </li>
        </ul>

        <h2 className="text-xl text-center font-semibold mb-4 mt-8 text-[#242426]">
          WORLD POPULATION - BIRTH AND DEATH RATES
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-black">
            <thead>
              <tr>
                <th className="py-2 px-4 border text-[#242426]">Region</th>
                <th className="py-2 px-4 border  text-[#242426]">Countries</th>
                <th className="py-2 px-4 border  text-[#242426]">
                  World Population
                  <br />
                  (Approximately)
                </th>
                <th className="py-2 px-4 border  text-[#242426]">
                  Birth Rate per thousand
                </th>
                <th className="py-2 px-4 border  text-[#242426]">
                  Death Rate per thousand
                </th>
                <th className="py-2 px-4 border  text-[#242426]">
                  Rate of Natural increase per thousand
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">1</td>
                <td className="py-2 px-4 border">
                  Northwest, Central and Southern Europe,North America and
                  Oceania
                </td>
                <td className="py-2 px-4 border">20%</td>
                <td className="py-2 px-4 border">22</td>
                <td className="py-2 px-4 border">12</td>
                <td className="py-2 px-4 border">10</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">2</td>
                <td className="py-2 px-4 border">
                  Latin America, Japan, Eastern Europe and Asiatic U.S.S.R 
                </td>
                <td className="py-2 px-4 border">22%</td>
                <td className="py-2 px-4 border">28 to 48</td>
                <td className="py-2 px-4 border">15 to 17</td>
                <td className="py-2 px-4 border">15</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">3</td>
                <td className="py-2 px-4 border">
                  Africa, Near East, South Central Asia and Far East
                </td>
                <td className="py-2 px-4 border">58%</td>
                <td className="py-2 px-4 border">40 to 45</td>
                <td className="py-2 px-4 border">25 to 35</td>
                <td className="py-2 px-4 border">12</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <hr className="w-[35%] mt-4" />
          <h5 className="mt-4">Arthur Newsholme - The Elements of Vital Statistics</h5>
        </div>
      </div>
    </>
  );
};

export default Introduction;

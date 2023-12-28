// components/PopulationMeasurementIntro.js
'use client';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';

const PopulationMeasurementIntro = () => {
    const [femalePopulation, setFemalePopulation] = useState('');
    const [malePopulation, setMalePopulation] = useState('');
    const [sexRatio, setSexRatio] = useState(null);
  
    const calculateSexRatio = () => {
      if (femalePopulation && malePopulation) {
        const calculatedSexRatio = (parseInt(femalePopulation, 10) / parseInt(malePopulation, 10)) * 1000;
        setSexRatio(calculatedSexRatio.toFixed(2));
      }
    };
  return (
    <>
    <Navbar/>
    <div className="container px-5 py-28 mx-auto">
      <h1 className="drop-shadow-sm text-4xl font-bold mb-6 text-[#800427]">Measurement of Population</h1>
      
      <p className="text-lg mb-4 text-white">
        The measurement of population involves the systematic collection, analysis, and interpretation of data related to the size, structure, and characteristics of a population. This field of study is crucial for understanding demographic trends, making informed policy decisions, and addressing societal challenges.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-[#242426]">Methods of Population Measurement</h2>

      <p className="text-lg mb-4 text-white">
        Population measurement employs various methods to gather accurate and comprehensive data, including:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-200">
        <li>Census: Conducting periodic and comprehensive surveys of the entire population to collect detailed demographic information.</li>
        <li>Sampling: Using statistical sampling techniques to gather data from a representative subset of the population.</li>
        <li>Registers: Utilizing official records and registers, such as birth and death certificates, immigration records, and healthcare databases.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-[#242426]">Uses of Population Measurement</h2>

      <p className="text-lg mb-4 text-white">
        Accurate population measurement serves various purposes in different sectors, including:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-200">
        <li>Policy Planning: Informing government policies related to healthcare, education, infrastructure, and social services.</li>
        <li>Economic Analysis: Understanding population trends for economic forecasting, labor market analysis, and resource allocation.</li>
        <li>Urban Planning: Facilitating the design and development of cities based on population growth and demographic shifts.</li>
        <li>Healthcare Planning: Assessing healthcare needs and planning for medical facilities, services, and resources.</li>
      </ul>

      
      <h1 className="text-3xl font-bold my-4 mt-12 text-[#800427]">Rates and Ratios Of Vital Event</h1>
      <hr />
      <li className='my-2 text-[#242426]'><span className='font-semibold '>Sex Ratio :</span> <span className='text-white'>The Sex Ratio is defined as total number of females per thousand males</span></li>

      <br />
      <p className='text-gray-200'>
        Sex Ratio = (Fp/Mp) x 1000
      </p>
        <br />

        <h3 className='font-semibold text-[#242426]'>Sex Ratio Calculator in an Area</h3>

      

        <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="femalePopulation" className="block text-sm font-semibold text-gray-900 mb-1">
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
          <label htmlFor="malePopulation" className="block text-sm font-semibold text-gray-900 mb-1">
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
      </div>

      <button
        onClick={calculateSexRatio}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Calculate Sex Ratio
      </button>

      {sexRatio !== null && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Result:</p>
          <p className="text-xl text-white">{sexRatio}</p>
        </div>
      )}





      <div className='h-56'></div>

    </div>
    </>
  );
};

export default PopulationMeasurementIntro;

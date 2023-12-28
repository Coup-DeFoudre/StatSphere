// Desc: Library page for Statsphere
import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const Library = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font pt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-200 tracking-widest font-medium title-font mb-1">
              EXPLORE STATS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-1 text-[#800427]">
              Unlock the World of Vital Statistics
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[white]">
              Dive into the rich world of vital statistics with Statsphere –
              your comprehensive eLibrary and statistical calculator. Whether
              you're a researcher, student, or enthusiast, Statsphere provides a
              curated collection of vital statistics resources alongside
              powerful calculators for insightful data analysis. Explore, learn,
              and empower your understanding of vital statistics with
              Statsphere.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Introduction
              </h2>
              <p className="leading-relaxed text-base mb-4 text-white">
                Vital stats quantify life events, offering key insights into
                health, demographics, and societal trends.
              </p>
              <Link href={"introduction"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Measurment of Population
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Population measurement assesses demographic characteristics,
                size, and distribution, informing planning and policy decisions
                effectively.
              </p>
              <Link href={"mop"}>
                {" "}
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Measurement of Mortality
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Mortality measurement gauges deaths, offering critical insights
                into health trends, interventions, and public health strategies.
              </p>
              <Link href={"mom"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Mortality Table
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                A mortality table, also known as a life table, is a statistical
                tool detailing death rates across age groups.
              </p>
              <Link href={"lifetable"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Measurement of Fertility
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Fertility measurement evaluates birth rates, providing insights
                into population growth, reproductive health, and demographic
                trends.
              </p>
              <Link href={"fertility"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Gross Reproduction Rate(G.R.R)
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Gross Reproduction Rate: Average daughters per woman, indicating
                population growth potential based on age-specific fertility
                rates.
              </p>
              <Link href={"grr"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Net Reproduction Rate(N.R.R)
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Net Reproductive Rate: Avg. daughters per woman, adjusted for
                mortality, indicating population growth (NRR &gt; 1) or decline
                (NRR &lt; 1).
              </p>
              <Link href={"nrr"}>
                <h4 className="text-green-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#800427] border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#242426] font-semibold title-font mb-2">
                Research Papers
              </h2>
              <p className="leading-relaxed text-base text-white mb-4">
                Research papers are a collection of articles that detail
                statistical methods and findings.
              </p>
              
                <h4 className="text-red-800 inline-flex items-center cursor-not-allowed">
                 Coming Soon !
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
                </h4>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;

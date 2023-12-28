"use client";

// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Contact from "@/components/contact";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Statsphere - eLibrary and Statistical Calculator</title>
        <meta
          name="description"
          content="Statsphere - Your go-to eLibrary and Statistical Calculator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="bg-opacity-10 bg-white backdrop-blur-md py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Statsphere</h1>
            <p className="text-lg mb-8">
              Your go-to eLibrary and Statistical Calculator
            </p>
            <div className="flex justify-center space-x-4">
              <Link href={"library"}>
                <button className="bg-white text-blue-900 px-6 py-2 rounded-full">
                  Explore Library
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="bg-cover bg-gray-800 bg-center py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover a World of Knowledge
          </h2>
          <p className="text-lg text-white">
            Explore our extensive eLibrary and unlock the power of statistics.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 gap-8">
        <div
          className="bg-cover bg-center h-64 overflow-hidden"
          style={{ backgroundImage: 'url("/bg2.jpg")' }}
        >
          <Image src="/bg2.jpg" alt="bg2" width={600} height={500} />
        </div>
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: 'url("/bg1.jpg")' }}
        ></div>
      </div>

      {/* About Section */}
      <div className="bg-gray-200 py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            About Statsphere
          </h2>
          <p className="text-lg text-gray-600">
            Statsphere is your all-in-one solution for exploring the fascinating
            world of statistics. Our platform seamlessly combines a vast
            eLibrary with a robust Statistical Calculator, empowering you with
            the tools and resources needed for in-depth data analysis and
            interpretation.
          </p>
          <p className="mt-4 text-gray-600">
            Whether you're a student, researcher, or data enthusiast, Statsphere
            is dedicated to simplifying complex statistical concepts, making
            learning enjoyable, and helping you unlock the true potential of
            data. Join us on this journey of discovery and enhance your
            statistical knowledge.
          </p>
        </div>
      </div>

      {/* contact us  */}

      <Contact />
    </div>
  );
};

export default Home;

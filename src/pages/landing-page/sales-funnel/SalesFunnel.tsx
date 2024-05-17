import React from "react";

export function SalesFunnel() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <Hero />
      <FeatureList />
      <Cta />
    </div>
  );

  function Hero() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold text-center mb-4">
          Your Product Name Here
        </h1>
        <p className="text-xl text-gray-600 text-center">
          A short description of your product and its benefits
        </p>
        <img
          className="w-full max-w-4xl object-cover mt-8 rounded-lg shadow-lg"
          src="https://via.placeholder.com/640x480"
          alt="Hero Image"
        />
      </div>
    );
  }

  function FeatureList() {
    const features = [
      {
        icon: "check",
        title: "Feature 1",
        description: "A brief explanation of feature 1",
      },
      {
        icon: "check",
        title: "Feature 2",
        description: "A brief explanation of feature 2",
      },
      {
        icon: "check",
        title: "Feature 3",
        description: "A brief explanation of feature 3",
      },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-4 rounded-lg shadow-md bg-slate-100"
          >
            <i className="text-blue-600 text-2xl">{feature.icon}</i>
            <h3 className="text-lg font-bold mt-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }

  function Cta() {
    return (
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Get Started Now!
        </button>
      </div>
    );
  }
}

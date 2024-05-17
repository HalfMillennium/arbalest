import React from "react";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink?: string;
}

const plans: Plan[] = [
  {
    name: "Standard",
    price: 19,
    description: "Ideal for small businesses starting out.",
    features: ["Email Marketing", "Landing Page Builder", "Basic Analytics"],
    buttonText: "Get Started",
  },
  {
    name: "Advanced",
    price: 39,
    description: "Perfect for growing businesses with specific needs.",
    features: ["Lead Scoring", "A/B Testing", "Advanced Reporting"],
    buttonText: "Scale Up",
    buttonLink: "/signup/advanced",
  },
  {
    name: "Premium",
    price: 79,
    description: "Designed for enterprise-level marketing power.",
    features: [
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Support",
    ],
    buttonText: "Contact Sales",
  },
];

export function PricingPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Grow Your Business with Our Marketing Platform
        </h2>
        <p className="mt-4 text-xl text-gray-600 text-center">
          Choose the plan that fits your needs and start reaching your audience
          today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
              <p className="mt-2 text-lg text-gray-700">{`$${plan.price}/month`}</p>
              <p className="mt-4 text-base text-gray-600">{plan.description}</p>
              <ul className="mt-6 list-disc space-y-2 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href={plan.buttonLink || "#"}
                className="mt-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

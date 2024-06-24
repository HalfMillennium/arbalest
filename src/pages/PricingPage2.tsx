import React from "react";
import { motion } from "framer-motion";

export function PricingPage2() {
  const tiers = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      button: "Sign Up",
    },
    {
      name: "Pro",
      price: "$30/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      button: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$50/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      button: "Contact Us",
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                {tier.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

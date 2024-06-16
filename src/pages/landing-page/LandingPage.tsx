import React from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
import { SalesFunnel } from "./sales-funnel/SalesFunnel";
import {
  MarkEmailUnread,
  ConnectWithoutContact,
  Analytics,
} from "@mui/icons-material";
import { LandingPageHero } from "../../components/shared/LandingPageHero";

export function LandingPage() {
  return (
    <div>
      <section className="py-20 text-center">
        <LandingPageHero />
      </section>
      <section className="max-w-6xl mx-auto mx-autopy-20 text-center w-full pt-10">
        <h2 className="text-3xl font-semibold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-row justify-center w-full">
              <div className="mr-1">
                <MarkEmailUnread className="animate-pulse" />
              </div>
              <h3 className="ml-1 text-xl font-semibold mb-4">
                Email Marketing
              </h3>
            </div>
            <p className="text-gray-700">
              Send personalized emails and track performance with our intuitive
              email marketing tools.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-row justify-center w-full">
              <div className="mr-1">
                <ConnectWithoutContact className="animate-pulse" />
              </div>
              <h3 className="ml-1 text-xl font-semibold mb-4">
                Social Media Integration
              </h3>
            </div>
            <p className="text-gray-700">
              Manage your social media presence seamlessly with our integrated
              social media tools.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-row justify-center w-full">
              <div className="mr-1">
                <Analytics className="animate-pulse" />
              </div>
              <h3 className="ml-1 text-xl font-semibold mb-4">
                Analytics Dashboard
              </h3>
            </div>
            <p className="text-gray-700">
              Gain insights into your marketing efforts with our comprehensive
              analytics dashboard.
            </p>
          </div>
        </div>
      </section>
      <section>
        <SalesFunnel />
      </section>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-semibold mb-6">
        <Trans
          i18nKey="landingPage.pitchOne"
          components={{
            under: <u />,
            strong: <strong />,
          }}
        />
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        <Trans i18nKey="landingPage.pitchTwo.p1" />
      </p>
      <button className="px-8 py-4 bg-dark-lavender text-white font-semibold rounded-lg shadow-lg hover:dusk-violet transition duration-300">
        Get Started Free{" "}
      </button>
    </div>
  );
}

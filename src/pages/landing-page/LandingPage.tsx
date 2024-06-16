import React, { useRef } from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
import { SalesFunnel } from "./sales-funnel/SalesFunnel";
import {
  MarkEmailUnread,
  ConnectWithoutContact,
  Analytics,
} from "@mui/icons-material";
import { LandingPageHero } from "../../components/shared/LandingPageHero";
import { Divider } from "@mui/material";

export function LandingPage() {
  const featuresAreaRef = useRef(null);
  return (
    <div>
      <section className="py-20 text-center">
        <LandingPageHero arrowButtonRef={featuresAreaRef} />
        <section className="px-96" ref={featuresAreaRef}>
          <Divider variant="middle" orientation="horizontal" />
        </section>
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

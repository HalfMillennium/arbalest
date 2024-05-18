import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../../i18n";
import { Header } from "../../components/Header";
import { LandingPage } from "../landing-page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PricingPage } from "../PricingPage";
import { Footer } from "../../components/Footer";
import { ExplainerPage } from "../explainer-page/ExplainerPage";
import { ViewCampaignsPage } from "../campaigns/view-campaigns/ViewCampaignsPage";

import "./AppBody.css";

export function AppBody() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = navigator.language;
    i18n.changeLanguage(language);
  }, [i18n]);
  return (
    <div>
      <div className="w-screen fixed top-0 left-0 pl-9 pt-4 pb-2 bg-slate-100 z-50">
        <Header />
      </div>
      <div className="app-body-bg items-center w-screen">
        <div className="justify-center">
          <div className="px-4 pt-24">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/whatisit" element={<ExplainerPage />} />
                <Route
                  path="/user/:username/campaigns"
                  element={<ViewCampaignsPage />}
                />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

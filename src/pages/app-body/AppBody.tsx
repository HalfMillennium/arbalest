import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../../i18n";
import { Header } from "../../components/Header";
import { LandingPage } from "../landing-page/LandingPage";
import { LandingPageHero } from "../../components/shared/LandingPageHero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PricingPage } from "../PricingPage";
import { Footer } from "../../components/Footer";
import { ExplainerPage } from "../explainer-page/ExplainerPage";
import { DashboardHome } from "../dashboard/dashboard/dashboard-home/DashboardHome";
import "./AppBody.css";
import { Register } from "../register/Register";

export function AppBody() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = navigator.language;
    i18n.changeLanguage(language);
  }, [i18n]);
  return (
    <div>
      <BrowserRouter>
        <div className="w-screen fixed top-0 left-0 pl-9 pt-4 pb-2 bg-latte-x-light z-50">
          <Header />
        </div>
        <div className="app-body-bg items-center w-screen">
          <div className="justify-center">
            <div className="px-4 pt-24">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/whatisit" element={<ExplainerPage />} />
                <Route
                  path="/user/:username/dashboard"
                  element={<DashboardHome />}
                />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full fixed">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

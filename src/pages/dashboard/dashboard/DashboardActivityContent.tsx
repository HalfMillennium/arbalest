import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { lazy } from "react";
import { DashboardActivity } from "../../../store/dashboard/dashboardSlice";
import { CampaignActivity } from "../activities/campaigns/CampaignActivity";

import { Suspense } from "react";
import { EntriesHome } from "../activities/entries/entries-home/EntriesHome";
import { PropertiesHome } from "../../../components/properties/PropertiesHome";
import { NoPropertySelectedPage } from "../../properties/NoPropertySelectedPage";

export function DashboardActivityContent({
  userPropertySelected,
}: {
  userPropertySelected: boolean;
}) {
  const currentActivity: DashboardActivity = useSelector(
    (state: RootState) => state.dashboard.currentActivity
  );

  /** Lazy load Analytics and Assistants activities */
  const Analytics = lazy(() => import("../activities/analytics/Analytics"));
  const Assistants = lazy(() => import("../activities/assistants/Assistants"));

  return (
    <div className="w-full">
      {userPropertySelected && (
        <>
          <div>
            <Typography
              variant="h4"
              fontFamily="Radio Canada Big"
              fontWeight="medium"
            >
              {currentActivity}
            </Typography>
          </div>{" "}
          <div className="bg-white rounded-md shadow-md border-solid border-2 border-dark-lavender-15">
            <Suspense>
              <div className="pb-4 px-4 ">
                {currentActivity === DashboardActivity.CAMPAIGNS && (
                  <div className="mt-4">
                    <CampaignActivity />
                  </div>
                )}
                {currentActivity === DashboardActivity.ANALYTICS && (
                  <Analytics />
                )}
                {currentActivity === DashboardActivity.ASSISTANTS && (
                  <Assistants />
                )}
                {currentActivity === DashboardActivity.ENTRIES && (
                  <EntriesHome />
                )}
              </div>
            </Suspense>
          </div>
        </>
      )}
      {!userPropertySelected && (
        <div>
          <NoPropertySelectedPage />
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { lazy } from "react";
import { DashboardActivity } from "../../../store/dashboard/dashboardSlice";
import { CampaignActivity } from "../activities/campaigns/CampaignActivity";

import { Suspense } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Type", value: "type" },
  { label: "Demographic", value: "demographic" },
];

export function DashboardActivityContent() {
  const currentActivity = useSelector(
    (state: RootState) => state.dashboard.currentActivity
  );

  /** Lazy load Analytics and Assistants activities */
  const Analytics = lazy(() => import("../activities/analytics/Analytics"));
  const Assistants = lazy(() => import("../activities/assistants/Assistants"));

  return (
    <div>
      <div>
        <Typography
          variant="h4"
          fontFamily="Radio Canada Big"
          fontWeight="medium"
        >
          {currentActivity}
        </Typography>
      </div>
      <div className="bg-slate-300 rounded-sm shadow-md">
        <Suspense>
          <div className="p-4">
            {currentActivity === DashboardActivity.CAMPAIGNS && (
              <CampaignActivity />
            )}
            {currentActivity === DashboardActivity.ANALYTICS && <Analytics />}
            {currentActivity === DashboardActivity.ASSISTANTS && <Assistants />}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

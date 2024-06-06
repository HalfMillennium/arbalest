import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  CampaignHealthWidget,
  WorkflowStatusWidget,
  DemoOverviewWidget,
} from "./widgets";
export function CampaignDetails() {
  return (
    <div>
      <span className="justify-center items-center">
        <div>
          <div className="flex max-w-fit">
            <CampaignHealthWidget />
            <WorkflowStatusWidget />
            <DemoOverviewWidget />
          </div>
        </div>
      </span>
    </div>
  );
}

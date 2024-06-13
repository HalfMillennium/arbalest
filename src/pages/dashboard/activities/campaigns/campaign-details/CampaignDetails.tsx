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
    <div className="justify-center items-center">
      <div className="flex">
        <div>
          <CampaignHealthWidget />
        </div>
        <div>
          <WorkflowStatusWidget />
        </div>
        <div>
          <DemoOverviewWidget />
        </div>
      </div>
    </div>
  );
}

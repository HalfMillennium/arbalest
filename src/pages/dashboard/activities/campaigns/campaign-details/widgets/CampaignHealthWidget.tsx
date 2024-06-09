import React from "react";
import { Typography, Box } from "@mui/material";
import {
  HealthAndSafety,
  AdsClick,
  BrokenImage,
  ShowChart,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { HealthIndicator } from "./health-indicator/HealthIndicator";
import { useDispatch } from "react-redux";
import {
  DashboardActivity,
  setCurrentActivity,
} from "../../../../../../store/dashboard/dashboardSlice";
/** Provides overview of engagement rate vs. duration of campaign, as well as campaign result if current rate is maintained for duration of campaign */
export function CampaignHealthWidget() {
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-r from-dark-lavender/20 to-dark-lavender/40 p-3 mb-3 mr-3 mt-3 rounded-md hover:shadow-sm">
      <div>
        <div className="flex flex-row">
          <div>
            <Typography
              variant="h5"
              component="div"
              fontWeight="medium"
              fontFamily="Radio Canada Big"
            >
              Campaign Health
            </Typography>
          </div>
          <div>
            <HealthAndSafety />
          </div>
          <div className="pl-6">
            <Button
              color="inherit"
              sx={{ textTransform: "capitalize", marginBottom: "10px" }}
              variant="outlined"
              onClick={() =>
                dispatch(setCurrentActivity(DashboardActivity.ANALYTICS))
              }
            >
              <Typography fontFamily={"Radio Canada Big"}>
                View Analytics
              </Typography>
            </Button>
          </div>
        </div>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div>
        <HealthSummaryTable />
      </div>
    </div>
  );

  function HealthSummaryTable() {
    const campaignHealthRating = 88; // No current idea how this will be calculated lol
    const clickRate = "8.13%";
    const bounceRate = "3.22%";
    const overallROI = "15.67%";

    return (
      <Box sx={{ minWidth: 650 }}>
        <div className="flex">
          <div className="flex flex-col p-3 m-2 rounded-md bg-latte-x-light border-2 border-slate-300 px-5 justify-center">
            <HealthIndicator rating={campaignHealthRating} />
          </div>
          <CampaignStatChunk
            label="Click Rate"
            value={clickRate}
            Icon={AdsClick}
          />
          <CampaignStatChunk
            label="Bounce Rate"
            value={bounceRate}
            Icon={BrokenImage}
          />
          <CampaignStatChunk
            label="Overall ROI"
            value={overallROI}
            Icon={ShowChart}
          />
        </div>
      </Box>
    );
  }
}

const CampaignStatChunk = ({
  label,
  value,
  Icon,
}: {
  label: string;
  value: string | number;
  Icon: React.ComponentType;
}) => {
  return (
    <div className="flex flex-col m-2 md:mr-6">
      <div className="flex -mb-1 justify-start  items-center">
        <div className="text-latte border-2 border-gray-200 rounded-lg">
          <Icon />
        </div>
        <Typography fontFamily="Radio Canada Big" className="pl-1">
          {label}
        </Typography>
      </div>
      <div className="text-black">
        <Typography fontFamily={"Roboto Mono"} fontSize={36} fontWeight={500}>
          {value}
        </Typography>
      </div>
    </div>
  );
};

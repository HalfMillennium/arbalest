import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import {
  HealthAndSafety,
  AdsClick,
  BrokenImage,
  ShowChart,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  DashboardActivity,
  setCurrentActivity,
} from "../../../../../../store/dashboard/dashboardSlice";
import { useTranslation } from "react-i18next";
/** Provides overview of engagement rate vs. duration of campaign, as well as campaign result if current rate is maintained for duration of campaign */
export function CampaignHealthWidget() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-dark-lavender/20 to-dark-lavender/40 px-3 pb-3 mb-3 mr-3 mt-3 rounded-md hover:shadow-sm">
      <div className="flex">
        <div className="flex justify-center items-center">
          <div>
            <Typography
              variant="h5"
              component="div"
              fontWeight="medium"
              fontFamily="Helvetica Neue"
            >
              Campaign Health
            </Typography>
          </div>
          <div className="flex justify-center items-center ml-1">
            <HealthAndSafety />
          </div>
        </div>
        <div className="pl-6 pt-3">
          <Button
            color="inherit"
            sx={{ textTransform: "capitalize", marginBottom: "10px" }}
            variant="outlined"
            onClick={() =>
              dispatch(setCurrentActivity(DashboardActivity.ANALYTICS))
            }
          >
            <Typography fontFamily={"Helvetica Neue"}>
              View Analytics
            </Typography>
          </Button>
        </div>
      </div>
      <div className="mb-1">
        <Typography
          variant="body2"
          color="text.secondary"
          fontFamily="Helvetica Neue"
        >
          {t("campaigns.campaignsTable.campaignHealth.explanation")}
        </Typography>
      </div>
      <div>
        <HealthSummaryTable />
      </div>
    </div>
  );

  function HealthSummaryTable() {
    const campaignHealthRating = 88;
    const clickRate = "8.13%";
    const bounceRate = "3.22%";
    const overallROI = "15.67%";

    return (
      <div className="flex justify-center">
        <div className="flex flex-col rounded-md bg-latte-x-light border-2 border-slate-300 px-5 justify-center">
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
    <div className="flex flex-col m-2 md:mr-6 justify-center items-center">
      <div className="flex -mb-1 items-center text-black">
        <div className="text-latte border-2 border-gray-200 rounded-lg">
          <Icon />
        </div>
        <Typography
          fontFamily="Radio Canada Big"
          fontSize={12}
          className="pl-1 bg-gray-200 rounded-lg -ml-1 px-2"
        >
          {label}
        </Typography>
      </div>
      <div className="-mb-2">
        <Typography fontFamily={"Roboto Mono"} fontSize={36} fontWeight={500}>
          {value}
        </Typography>
      </div>
    </div>
  );
};

function HealthIndicator({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex items-center text-green-300">
        <CircularProgress
          variant="determinate"
          value={rating}
          color="inherit"
        ></CircularProgress>
      </div>
      <div className="z-10 ml-3">
        <Typography variant="h5" fontWeight={"bold"} fontFamily={"Montserrat"}>
          {rating}
        </Typography>
      </div>
    </div>
  );
}

import React from "react";
import { Typography, Grid } from "@mui/material";
import { HealthAndSafety, Check } from "@mui/icons-material";
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
    <div className="bg-gradient-to-r from-sky-600/10 to-sky-700/15 p-3 mb-3 mr-3 mt-3 rounded-md hover:shadow-sm">
      <div>
        <div className="flex flex-row">
          <div>
            <Typography
              variant="h5"
              component="div"
              fontWeight="bold"
              fontStyle="Source Sans 3"
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
              sx={{ textTransform: "capitalize" }}
              variant="outlined"
              onClick={() =>
                dispatch(setCurrentActivity(DashboardActivity.ANALYTICS))
              }
            >
              View Analytics
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
    const healthSummaryFields = [
      { label: "Open Rate", id: "openRate" },
      { label: "Click Rate", id: "clickRate" },
      { label: "Conversion Rate", id: "conversionRate" },
    ];
    const campaignHealthRating = 75; // No current idea how this will be calculated lol
    const openRate = "8.13%";
    const clickRate = "3.22%";
    const conversionRate = "1.67%.";

    return (
      <Grid container sx={{ minWidth: 650 }}>
        <Grid container xs={12}>
          <Grid item xs={3} direction="column" className="justify-between">
            <Typography variant="h6">Health Rating</Typography>
          </Grid>
          {healthSummaryFields.map((field) => (
            <Grid
              item
              xs={3}
              direction="column"
              className="h-[50%] justify-between pt-2"
            >
              <Typography>{field.label}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className="p-3">
            <div className="text-white items-start p-2 -px-2 rounded-md shadow-sm bg-gradient-to-r from-slate-700 to-slate-800">
              <HealthIndicator rating={campaignHealthRating} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <Typography>7.28%</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>4.10%</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>2.92%</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

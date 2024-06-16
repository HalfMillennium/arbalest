import React from "react";
import { Button, Typography, Tooltip } from "@mui/material";
import { Cloud } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { CampaignEntry } from "../../../../../../types/campaigns";

/** Provides overview on current release schedule of email dispatcher (e.g. most recent dispatch, next dispatch date) */
export function WorkflowStatusWidget(props: {
  next?: CampaignEntry;
  previous?: CampaignEntry;
}) {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-dark-lavender/5 to-dark-lavender/10 px-3 mb-3 mr-3 mt-3 rounded-md hover:shadow-sm">
      <div className="flex">
        <div className="flex justify-center items-center">
          <div>
            <Typography
              variant="h5"
              component="div"
              fontWeight="medium"
              fontFamily="Helvetica Neue"
            >
              Workflow Status
            </Typography>
          </div>
          <div className="flex justify-center items-center ml-1">
            <Cloud />
          </div>
        </div>
        <div className="pl-6 pt-3">
          <Button
            color="inherit"
            sx={{ textTransform: "capitalize", marginBottom: "10px" }}
            variant="outlined"
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
          {t("campaigns.campaignsTable.workflowStatus.explanation")}
        </Typography>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col items-center w-12rem bg-gradient-to-tr from-dark-lavender/10 via-dusk-violet/10 to-dusk-violet/20 rounded-md m-1">
          <Typography variant="button" fontFamily="Helvetica Neue">
            Up Next
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h5" fontFamily={"Roboto Mono"}>
              06/28/2024
            </Typography>
            <div className="text-slate-500">
              <Typography
                variant="button"
                className="flex w-full"
                color="inherit"
                fontFamily="Helvetica Neue"
                fontSize={12}
              >
                Entry ID Not Yet Available
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-12rem text-white bg-soft-black bg-gradient-to-tr from-dark-lavender/70 via-dusk-violet/40 to-dusk-violet/50 rounded-md m-1">
          <Typography variant="button" fontFamily="Helvetica Neue">
            Last Dispatch
          </Typography>{" "}
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h5" fontFamily={"Roboto Mono"}>
              06/28/2024
            </Typography>
            <Typography
              variant="button"
              className="flex w-fit"
              color="inherit"
              fontSize={12}
            >
              Entry ID #<b>{123456789}</b>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

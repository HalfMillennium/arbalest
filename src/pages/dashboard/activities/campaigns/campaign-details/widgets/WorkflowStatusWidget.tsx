import React from "react";
import { Typography } from "@mui/material";

/** Provides overview on current release schedule of email dispatcher (e.g. most recent dispatch, next dispatch date) */
export function WorkflowStatusWidget() {
  return (
    <div className="bg-blue-100 p-3 mb-3 rounded-md">
      <Typography variant="h5" component="div">
        Workflow Status
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  );
}

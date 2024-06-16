import React from "react";
import { Typography } from "@mui/material";

/** Provides information about the mailing list associated with the current campaign */
export function MailingListWidget() {
  return (
    <div className="p-3 mb-3 ml-3 mt-3 rounded-md">
      <Typography variant="h5" component="div">
        Demographic
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  );
}
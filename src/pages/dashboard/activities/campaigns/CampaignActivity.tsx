import React from "react";
import { CampaignTable } from "./CampaignTable";
import { Grid, TextField, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function CampaignActivity(props: { campaignInfo?: any }) {
  const [filter, setFilter] = useState("");
  const { campaignInfo } = props;
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Grid container spacing={2} className="justify-between">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            select
            fullWidth
            value={filter}
            onChange={handleFilterChange}
            label="Filter"
          >
            <MenuItem key="type" value="Type">
              Type
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className="w-full text-end">
          <span className="align-middle">
            <div className="flex flex-row bg-sky-600 text-slate-100 rounded-md w-fit p-2 shadow-sm cursor-pointer">
              <div>
                <Typography fontFamily="Radio Canada Big" fontWeight={"medium"}>
                  <span className="pr-1">
                    <AddCircleOutlineIcon />
                  </span>
                  Create New Campaign
                </Typography>
              </div>
            </div>
          </span>
        </Grid>
      </Grid>
      <div className="mt-4 w-full">
        <CampaignTable filter="" />
      </div>
    </>
  );
}

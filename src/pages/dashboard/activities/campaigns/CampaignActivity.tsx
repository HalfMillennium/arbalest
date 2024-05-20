import React from "react";
import { CampaignTable } from "./CampaignTable";
import { Grid, TextField, MenuItem, Button, Typography } from "@mui/material";
import { useState } from "react";

export function CampaignActivity() {
  const [filter, setFilter] = useState("");
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
          <span className="p-3 align-middle">
            <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
              <Typography fontFamily="Radio Canada Big" fontWeight={"medium"}>
                Create New Campaign
              </Typography>
            </Button>
          </span>
        </Grid>
      </Grid>
      <div className="mt-4">
        <CampaignTable filter="" />
      </div>
    </>
  );
}

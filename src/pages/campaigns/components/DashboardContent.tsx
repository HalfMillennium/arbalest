import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { CampaignTable } from "./CampaignTable";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Type", value: "type" },
  { label: "Demographic", value: "demographic" },
];

export function DashboardContent() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <Typography variant="h4">View Campaigns</Typography>
      </div>
      <div className="bg-slate-300 rounded-md shadow-lg">
        <div className="p-4">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                select
                fullWidth
                value={filter}
                onChange={handleFilterChange}
                label="Filter"
              >
                {filterOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <div className="mt-4">
            <CampaignTable filter="" />
          </div>
        </div>
      </div>
    </div>
  );
}

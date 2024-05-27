import React from "react";
import { CampaignTable } from "./CampaignTable";
import { Grid, TextField, MenuItem, Typography, Button } from "@mui/material";
import { useState } from "react";

export function CampaignActivity(props: { campaignInfo?: any }) {
  const [filter, setFilter] = useState("");
  const [filterContent, setFilterContent] = useState("");
  const { campaignInfo } = props;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  const handleFilterContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterContent(event.target.value);
  };
  const filterTypes = [
    { label: "Demographic", key: "demo" },
    { label: "Mailing List", key: "mailingList" },
    { label: "Status", key: "status" },
  ];
  return (
    <>
      <Grid container spacing={2} className="justify-equal">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            select
            fullWidth
            value={filter}
            onChange={handleFilterChange}
            label={
              <Typography fontFamily="Radio Canada Big">Filter</Typography>
            }
          >
            {filterTypes.map((type) => (
              <MenuItem key={type.key} value={type.label}>
                <Typography fontFamily="Radio Canada Big">
                  {type.label}
                </Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={() => setFilterContent("")}>
              <div className="text-gray-400">
                <Typography fontFamily="Radio Canada Big" color="inherit">
                  View All
                </Typography>
              </div>
            </MenuItem>
          </TextField>
        </Grid>

        {filter && (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              value={filterContent}
              onChange={handleFilterContentChange}
              label={
                <div className="text-slate-400">
                  <Typography fontFamily="Radio Canada Big" color="inherit">
                    Enter a value
                  </Typography>
                </div>
              }
            ></TextField>
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4} lg={3} className="w-full text-end">
          <span className="align-middle">
            <div className="flex flex-row text-slate-100 w-fit p-2 cursor-pointer">
              <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
                <Typography fontWeight={"medium"} fontFamily="Radio Canada Big">
                  Create New Campaign
                </Typography>
              </Button>
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

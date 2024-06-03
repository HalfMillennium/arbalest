import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Typography,
  Button,
  Grow,
} from "@mui/material";
import { useState } from "react";
import { SimpleTable } from "../../../../components/shared/SimpleTable";
import { CampaignDetails } from "./campaign-details/CampaignDetails";
import { Collapse } from "@mui/material";
import { EXAMPLE_CAMPAIGNS } from "../../../entries-dashboard/utils";
import { CampaignInfoFieldsRecord } from "../../../../types/campaigns";

const CAMPAIGN_INFO_FIELDS_LABELS = Object.values(CampaignInfoFieldsRecord);
const CAMPAIGN_INFO_FIELDS_IDS = Object.keys(CampaignInfoFieldsRecord);

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
            <div className="flex flex-row text-navy-blue w-fit p-2 cursor-pointer">
              <Button
                color="inherit"
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
              >
                <Typography
                  variant="button"
                  fontWeight={"medium"}
                  fontFamily="Radio Canada Big"
                >
                  Create New Campaign
                </Typography>
              </Button>
            </div>
          </span>
        </Grid>
      </Grid>
      <div className="mt-4 w-full">
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 500 }}
        >
          <div>
            <SimpleTable
              labels={CAMPAIGN_INFO_FIELDS_LABELS}
              fieldIds={CAMPAIGN_INFO_FIELDS_IDS}
              filter=""
              entries={EXAMPLE_CAMPAIGNS}
              DrawerComponent={CollapseableCampaignDetails}
            />
          </div>
        </Grow>
      </div>
    </>
  );

  function CollapseableCampaignDetails(props: { isOpen: boolean }) {
    const { isOpen } = props;
    return (
      <div className="flex">
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <CampaignDetails />
        </Collapse>
      </div>
    );
  }
}

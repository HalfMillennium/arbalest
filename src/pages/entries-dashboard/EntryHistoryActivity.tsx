import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Typography,
  Button,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { Collapse } from "@mui/material";
import { SimpleTable } from "../../components/shared/SimpleTable";
import { CampaignEntryFieldsRecord, CampaignInfo } from "../../types/campaigns";
import { EXAMPLE_CAMPAIGN_ENTRIES } from "./utils";
import { CUSTOM_COLORS } from "../../assets/colors";

const CAMPAIGN_ENTRY_FIELDS_LABELS = Object.values(CampaignEntryFieldsRecord);
const CAMPAIGN_ENTRY_FIELDS_IDS = Object.keys(CampaignEntryFieldsRecord);

export function EntryHistoryActivity(props: {
  campaignEntryInfo?: CampaignInfo;
  setTab: (newValue: number) => void;
}) {
  const [filter, setFilter] = useState("");
  const [filterContent, setFilterContent] = useState("");
  const { campaignEntryInfo, setTab } = props;

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
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: CUSTOM_COLORS.softBlack,
                }}
                className="bg-gradient-to-tr from-dark-lavender to-dusk-violet"
              >
                <Typography
                  fontWeight={"medium"}
                  variant="button"
                  fontFamily="Radio Canada Big"
                  onClick={() => setTab(0)}
                >
                  Edit Campaign Schedule
                </Typography>
              </Button>
            </div>
          </span>
        </Grid>
      </Grid>
      <Zoom in={true}>
        <div className="mt-4 w-full">
          <SimpleTable
            labels={CAMPAIGN_ENTRY_FIELDS_LABELS}
            fieldIds={CAMPAIGN_ENTRY_FIELDS_IDS}
            filter=""
            entries={EXAMPLE_CAMPAIGN_ENTRIES}
            DrawerComponent={CollapseableEntryDetails}
          />
        </div>
      </Zoom>
    </>
  );

  function CollapseableEntryDetails(props: { isOpen: boolean }) {
    const { isOpen } = props;
    return (
      <div className="flex">
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <div>
            <Typography variant="h1">Peak-A-Boo!</Typography>
          </div>
        </Collapse>
      </div>
    );
  }
}

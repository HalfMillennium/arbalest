import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Typography,
  Button,
  Grow,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SimpleTable } from "../../../../components/shared/SimpleTable";
import { CampaignDetails } from "./campaign-details/CampaignDetails";
import { Collapse } from "@mui/material";
import { EXAMPLE_CAMPAIGNS } from "../../../entries-dashboard/utils";
import {
  CampaignInfo,
  CampaignInfoFieldsRecord,
} from "../../../../types/campaigns";
import { CreateCampaignDrawer } from "../../../../components/campaigns/CreateCampaignDrawer";
import { AddCircle } from "@mui/icons-material";

const CAMPAIGN_INFO_FIELDS_LABELS = Object.values(CampaignInfoFieldsRecord);
const CAMPAIGN_INFO_FIELDS_IDS = Object.keys(CampaignInfoFieldsRecord);

export function CampaignActivity(props: { campaignInfo?: CampaignInfo }) {
  const [filter, setFilter] = useState("");
  const [filterContent, setFilterContent] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  const handleFilterContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterContent(event.target.value);
  };
  const toggleCreateCampaignDrawerToggle = (shouldBeOpen: boolean) => {
    setDrawerOpen(shouldBeOpen);
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
        <AnimatePresence>
          {filter && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
                animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
                transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
                exit={{ x: -100, opacity: 0 }}
              >
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
              </motion.div>
            </Grid>
          )}
        </AnimatePresence>
        <Grid item xs={12} sm={6} md={4} lg={3} className="w-full text-end">
          <span className="align-middle">
            <div className="flex flex-row text-dark-lavender w-2/2 px-2 h-full cursor-pointer">
              <Button
                color="inherit"
                className="hover:shadow-md transition-all duration-3000 hover:bg-white hover:text-dark-lavender hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "white",
                  },
                }}
                onClick={() => toggleCreateCampaignDrawerToggle(true)}
              >
                <div className="flex w-fit">
                  <div className="flex justify-center items-center">
                    <AddCircle />
                  </div>
                  <div className="flex ml-1">
                    <Typography
                      variant="button"
                      fontWeight={500}
                      fontFamily="Helvetica Neue"
                    >
                      Create New Campaign
                    </Typography>
                  </div>
                </div>
              </Button>
              <CreateCampaignDrawer
                open={drawerOpen}
                setDrawerClose={() => toggleCreateCampaignDrawerToggle(false)}
              />
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
      <div>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <CampaignDetails />
        </Collapse>
      </div>
    );
  }
}

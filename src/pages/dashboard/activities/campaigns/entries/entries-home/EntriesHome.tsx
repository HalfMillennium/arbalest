import { TabPanel } from "../TabPanel";
import { useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import { EntriesDashboard } from "../../../../../entries-dashboard/EntriesDashboard";
import { EntryDashboardTabs } from "../../../../../entries-dashboard/types";
import { Edit, History, CalendarMonth } from "@mui/icons-material";

export function EntriesHome() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabColor = "rgb(13 148 136)";

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <div>
        <div className="py-5">
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="entry dashboard tabs"
            TabIndicatorProps={{ style: { backgroundColor: tabColor } }} // Add this line
          >
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.SCHEDULE })}
              tabIndex={0}
              sx={{
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }} // Add this line
            />
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.ENTRY_HISTORY })}
              tabIndex={1}
              sx={{
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }} // Add this line
            />
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.ENTRY_EDITOR })}
              tabIndex={2}
              sx={{
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }} // Add this line
            />
          </Tabs>
        </div>
      </div>
      <TabPanel value={currentTab} index={0}>
        [ Schedule ]
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        [ Entry History ]
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <EntriesDashboard />
      </TabPanel>
    </div>
  );

  function TabLabel(props: { tabType: EntryDashboardTabs }) {
    const { tabType } = props;
    return (
      <div className="flex">
        <div className="mr-1">
          <Typography
            variant="body1"
            fontFamily="Radio Canada Big"
            sx={{ textTransform: "capitalize" }}
          >
            {tabType}
          </Typography>
        </div>
        <div>
          {tabType === EntryDashboardTabs.SCHEDULE && <CalendarMonth />}
          {tabType === EntryDashboardTabs.ENTRY_HISTORY && <History />}
          {tabType === EntryDashboardTabs.ENTRY_EDITOR && <Edit />}
        </div>
      </div>
    );
  }
}

import { TabPanel } from "../TabPanel";
import { Suspense, useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import { EntryDashboardTabs } from "../../../../../entries-dashboard/types";
import { Edit, History, ScheduleSend } from "@mui/icons-material";
import {
  EntryHistoryActivity,
  EditEntriesActivity,
} from "../../../../../entries-dashboard";

export function EntriesHome() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabColor = "rgb(7 89 133)";

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
            TabIndicatorProps={{ style: { backgroundColor: tabColor } }}
          >
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.SCHEDULE })}
              tabIndex={0}
              sx={{
                alignItems: "start",
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }}
            />
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.ENTRY_HISTORY })}
              tabIndex={1}
              sx={{
                alignItems: "start",
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }}
            />
            <Tab
              label={TabLabel({ tabType: EntryDashboardTabs.ENTRY_EDITOR })}
              tabIndex={2}
              sx={{
                alignItems: "start",
                minWidth: 200,
                "&.Mui-selected": { color: tabColor },
              }}
            />
          </Tabs>
        </div>
      </div>
      <TabPanel value={currentTab} index={0}>
        [ Schedule ]
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <EntryHistoryActivity />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <EditEntriesActivity />
      </TabPanel>
    </div>
  );

  function TabLabel(props: { tabType: EntryDashboardTabs }) {
    const { tabType } = props;
    return (
      <div className="flex">
        <div>
          {tabType === EntryDashboardTabs.SCHEDULE && <ScheduleSend />}
          {tabType === EntryDashboardTabs.ENTRY_HISTORY && <History />}
          {tabType === EntryDashboardTabs.ENTRY_EDITOR && <Edit />}
        </div>
        <div className="ml-1">
          <Typography
            variant="body1"
            fontFamily="Radio Canada Big"
            sx={{ textTransform: "capitalize" }}
          >
            {tabType}
          </Typography>
        </div>
      </div>
    );
  }
}

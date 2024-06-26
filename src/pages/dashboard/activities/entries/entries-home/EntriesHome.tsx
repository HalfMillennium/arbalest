import { TabPanel } from "../TabPanel";
import { Suspense, useContext, useEffect, useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import { EntryDashboardTabs } from "../../../../entries-dashboard/types";
import { Edit, History, ScheduleSend } from "@mui/icons-material";
import {
  EntryHistoryActivity,
  EditEntriesActivity,
} from "../../../../entries-dashboard";
import { CUSTOM_COLORS } from "../../../../../assets/colors";
import { EntryDashboardTabsRecord } from "./types";
import ChipTabs from "../../../../../components/shared/ChipTabs";

const allTabs = Object.keys(EntryDashboardTabsRecord) as EntryDashboardTabs[];

export function EntriesHome() {
  const [currentTab, setCurrentTab] = useState(EntryDashboardTabs.SCHEDULE);
  const handleSetCurrentTab = (newTab: EntryDashboardTabs) => {
    setCurrentTab(newTab);
  };
  return (
    <div>
      <div>
        <div className="py-5">
          <ChipTabs
            selectedTab={currentTab}
            tabs={allTabs}
            setSelected={setCurrentTab}
          />
        </div>
      </div>
      <TabPanel value={currentTab} index={EntryDashboardTabs.SCHEDULE}>
        [ Schedule ]
      </TabPanel>
      <TabPanel value={currentTab} index={EntryDashboardTabs.ENTRY_HISTORY}>
        <EntryHistoryActivity setTab={handleSetCurrentTab} />
      </TabPanel>
      <TabPanel value={currentTab} index={EntryDashboardTabs.ENTRY_EDITOR}>
        <EditEntriesActivity setTab={handleSetCurrentTab} />
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

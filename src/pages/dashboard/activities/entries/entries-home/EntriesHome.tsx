import { TabPanel } from "../TabPanel";
import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import { EntryDashboardTabs } from "../../../../entries-dashboard/types";
import { Edit, History, ScheduleSend } from "@mui/icons-material";
import { LoadingSpinner } from "../../../../../components/shared/LoadingSpinner";
import { CUSTOM_COLORS } from "../../../../../assets/colors";
import { EntryDashboardTabsRecord } from "./types";
import ChipTabs from "../../../../../components/shared/ChipTabs";

const allTabs = Object.keys(EntryDashboardTabsRecord) as EntryDashboardTabs[];

export function EntriesHome() {
  const [currentTab, setCurrentTab] = useState(EntryDashboardTabs.SCHEDULE);
  const handleSetCurrentTab = (newTab: EntryDashboardTabs) => {
    setCurrentTab(newTab);
  };
  const EditEntriesActivity = lazy(
    () => import("../../../../entries-dashboard/EditEntriesActivity")
  );
  const EntryHistoryActivity = lazy(
    () => import("../../../../entries-dashboard/EntryHistoryActivity")
  );
  return (
    <div>
      <div className="py-5">
        <ChipTabs
          selectedTab={currentTab}
          tabs={allTabs}
          setSelected={setCurrentTab}
        />
      </div>
      <TabPanel value={currentTab} index={EntryDashboardTabs.SCHEDULE}>
        [ Schedule ]
      </TabPanel>
      <TabPanel value={currentTab} index={EntryDashboardTabs.ENTRY_HISTORY}>
        <Suspense
          fallback={<LoadingSpinner label="Loading entry history..." />}
        >
          <EntryHistoryActivity setTab={handleSetCurrentTab} />
        </Suspense>
      </TabPanel>
      <TabPanel value={currentTab} index={EntryDashboardTabs.ENTRY_EDITOR}>
        <Suspense fallback={<LoadingSpinner label="Loading entry editor..." />}>
          <EditEntriesActivity setTab={handleSetCurrentTab} />
        </Suspense>
      </TabPanel>
    </div>
  );
}

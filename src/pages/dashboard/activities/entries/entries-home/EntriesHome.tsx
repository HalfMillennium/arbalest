import { TabPanel } from "../TabPanel";
import { Suspense, useEffect, useState } from "react";
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
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <div>
        <div className="py-5">
          <ChipTabs
            tabs={allTabs}
            setSelected={(selected: EntryDashboardTabs) => {
              switch (selected) {
                case EntryDashboardTabs.SCHEDULE:
                  setCurrentTab(0);
                  break;
                case EntryDashboardTabs.ENTRY_HISTORY:
                  setCurrentTab(1);
                  break;
                case EntryDashboardTabs.ENTRY_EDITOR:
                  setCurrentTab(2);
                  break;
                default:
              }
            }}
          />
        </div>
      </div>
      <TabPanel value={currentTab} index={0}>
        [ Schedule ]
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <EntryHistoryActivity setTab={setCurrentTab} />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <EditEntriesActivity setTab={setCurrentTab} />
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

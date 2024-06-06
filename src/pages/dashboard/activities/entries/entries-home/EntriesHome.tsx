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

export function EntriesHome() {
  const [allTabs, setAllTabs] = useState<EntryDashboardTabs[]>([]);
  const [currentTab, setCurrentTab] = useState(0);
  const tabColor = CUSTOM_COLORS.primary;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    const tabTypes: EntryDashboardTabs[] = [];
    for (const key of Object.keys(EntryDashboardTabsRecord)) {
      tabTypes.push(key as EntryDashboardTabs);
    }
    setAllTabs(tabTypes);
  }, []);
  return (
    <div>
      <div>
        <div className="py-5">
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="entry dashboard tabs"
            TabIndicatorProps={{
              style: { display: "none", backgroundColor: tabColor },
            }}
          >
            {allTabs.map((tab, i) => (
              <Tab
                label={TabLabel({ tabType: tab })}
                tabIndex={i}
                className="w-8rem md:w-12rem lg:w-16rem"
                sx={{
                  alignItems: "start",
                  "&.Mui-selected": { color: tabColor },
                  borderRadius: "100rem",
                  backgroundColor: currentTab === i ? "rgba(0,0,0,0.1)" : "",
                  marginRight: "5px",
                }}
              />
            ))}
          </Tabs>
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

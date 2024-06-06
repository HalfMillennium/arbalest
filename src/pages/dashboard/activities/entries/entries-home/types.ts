import { EntryDashboardTabs } from "../../../../entries-dashboard/types";

export const EntryDashboardTabsRecord: Record<EntryDashboardTabs, string> = {
  [EntryDashboardTabs.SCHEDULE]: "Schedule",
  [EntryDashboardTabs.ENTRY_HISTORY]: "Entry History",
  [EntryDashboardTabs.ENTRY_EDITOR]: "Entry Editor",
};

import React from "react";
import { Typography, Divider } from "@mui/material";
import { CampaignEntry } from "../../../types/campaigns";
import { RecentEntriesList } from "./RecentEntriesList";
import { NextEntryDetails } from "./NextEntryDetails";

/** TODO: Combine utils files */
import { ENTRY_ITEM_STYLES } from "./utils";
import { EXAMPLE_CAMPAIGN_ENTRIES } from "../utils";

export function EntryEditorHeader(props: { entries: CampaignEntry[] }) {
  const { entries } = props;
  return (
    <div className="w-full flex pb-3 justify-end align-bottom overflow-auto">
      <div className="w-full rounded-sm flex justify-between bg-gradient-to-tr from-soft-black/5 to-gray-700/5 items-center p-4 overflow-auto">
        <div className="h-full flex-1">
          <NextEntryDetails entry={entries[0]} />
        </div>
        <div className="flex-1">
          <RecentEntriesList campaignEntries={entries} />
        </div>
      </div>
    </div>
  );
}

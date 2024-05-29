import React from "react";
import { Typography } from "@mui/material";
import { CampaignEntry } from "../../../store/dashboard/campaigns/types";
import { ENTRY_ITEM_STYLES } from "./utils";

export function RecentEntryList(props: { entries: CampaignEntry[] }) {
  const { entries } = props;
  return (
    <div className="w-full h-8rem flex">
      {entries.map((entry, i) => (
        <div>
          <EntryItem
            id={i}
            date={entry.createdDate}
            subject={entry.subject}
            updateItems={[]}
          />
        </div>
      ))}
    </div>
  );
  function EntryItem(props: {
    id: number;
    date: Date | undefined;
    subject: string | undefined;
    updateItems: string[];
  }) {
    const { id } = props;
    return (
      <div className={"animate-pulse flex flex-col mr-4 rounded-md shadow-md"}>
        <div className={ENTRY_ITEM_STYLES[id]}>
          <div className="p-1 ">
            <Typography
              fontFamily="Roboto Mono"
              fontWeight="bold"
              color="inherit"
              variant="h4"
            >
              {`${props.date?.toLocaleDateString()}`}
            </Typography>
          </div>
          <div>
            <Typography fontFamily="Radio Canada Big">
              {props.subject}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

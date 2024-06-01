import React from "react";
import { Typography, Divider } from "@mui/material";
import { CampaignEntry } from "../../../store/dashboard/campaigns/types";
import { ENTRY_ITEM_STYLES } from "./utils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccessTime } from "@mui/icons-material";

export function RecentEntryList(props: { entries: CampaignEntry[] }) {
  const { entries } = props;
  return (
    <div className="w-full h-8rem flex pb-3">
      <div className="rounded-sm flex justify-between bg-gradient-to-tr from-soft-black/5 to-gray-700/5 items-center pl-4 -my-2">
        <div className="flex justify-center items-center">
          <div className="text-white">
            <MoreVertIcon color="inherit" />
          </div>
          <div>
            <Divider orientation="vertical" flexItem />
          </div>
        </div>
        {entries.map((entry, i) => (
          <div className="pr-4">
            <EntryItem
              id={i}
              date={entry.createdDate}
              subject={entry.subject}
              updateItems={[]}
            />
          </div>
        ))}
      </div>
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
      <div>
        {!props.subject && (
          <div className="flex justify-center p-2 text-black/50">
            <AccessTime />
          </div>
        )}
        <div
          className={
            ENTRY_ITEM_STYLES[id] +
            "cursor-pointer hover:animate-pulse flex flex-col rounded-md shadow-md"
          }
        >
          <div className="p-1">
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

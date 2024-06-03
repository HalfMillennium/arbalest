import { Grid } from "@mui/material";
import { CampaignEntry } from "../../../../../../types/campaigns";
import { Typography } from "@mui/material";

export function FutureEntriesGrid(props: { campaignEntries: CampaignEntry[] }) {
  const { campaignEntries } = props;

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[0]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[1]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[2]} />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[3]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[4]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[5]} />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[6]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[7]} />
        </div>
        <div className="w-1/3">
          <EntryItem entry={campaignEntries[8]} />
        </div>
      </div>
    </div>
  );
}

function EntryItem(props: { entry: CampaignEntry }) {
  const { entry } = props;
  return (
    <div className="m-1">
      <div
        onClick={() => console.log(entry.dispatchDate)}
        className="bg-black text-white bg-gradient-to-br from-slate-600 to-slate-800 p-2 hover:animate-pulse flex flex-col rounded-sm shadow-md h-full"
      >
        <div className="p-1 flex justify-center">
          <Typography fontFamily="Roboto Mono" color="inherit" variant="body1">
            {`${entry.createdDate?.toLocaleDateString([], {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

import { Grid } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { CampaignEntry } from "../../../types/campaigns";
import { FutureEntriesGrid } from "../../dashboard/activities/campaigns/campaign-details/widgets/FutureEntriesGrid";
import { EXAMPLE_CAMPAIGN_ENTRIES } from "../utils";

export default function RecentEntriesList(props: {
  campaignEntries: CampaignEntry[];
}) {
  const { campaignEntries } = props;
  return (
    <div className="w-full">
      <FutureEntriesGrid campaignEntries={campaignEntries} />
    </div>
  );
}

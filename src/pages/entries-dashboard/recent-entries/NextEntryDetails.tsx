import { CampaignEntry } from "../../../types/campaigns";
import { Typography } from "@mui/material";
import { Groups3, Settings } from "@mui/icons-material";

export function NextEntryDetails(props: { entry: CampaignEntry }) {
  const { entry } = props;
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Typography variant="button" fontFamily="Radio Canada Big">
          Next Entry Dispatched in <b>{12}</b> Days
        </Typography>
      </div>
      <div className="flex">
        <div>
          <Typography fontFamily="Roboto Mono" color="inherit" variant="h2">
            {`${entry.dispatchDate?.toLocaleDateString()}`}
          </Typography>
        </div>
        <div className="flex">
          <div className="flex items-center px-3">
            <Settings
              fontSize="large"
              className="p-1 hover:shadow-md hover:bg-white cursor-pointer rounded-full"
            />
          </div>
          <div className="flex items-center">
            <Groups3
              fontSize="large"
              className="p-1 hover:shadow-md hover:bg-white cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex"></div>
      <div className="flex"></div>
    </div>
  );
}

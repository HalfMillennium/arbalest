import { useState } from "react";
import { BarChart } from "./shared/BarChart";
import { EXAMPLE_DATUM } from "./utils";
import { Typography } from "@mui/material";
import {
  SelectMenuOption,
  SimpleSelect,
} from "../../../../components/shared/SimpleSelect";
import { EXAMPLE_CAMPAIGNS } from "../../../entries-dashboard/utils";

const campaignOptions: SelectMenuOption[] = EXAMPLE_CAMPAIGNS.map(
  (campaignInfo) => {
    return {
      id: campaignInfo.id,
      title: campaignInfo.name,
    };
  }
);
export default function Analytics() {
  const [currentCampaign, setCurrentCampaign] = useState(campaignOptions[0]);
  const handleSetCampaign = (campaignOption: { id: string; title: string }) => {
    setCurrentCampaign(campaignOption);
  };
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <div className="flex flex-col w-1/3 h-2/3">
          <Typography
            variant="h6"
            fontFamily="Radio Canada Big"
            className="pt-4"
            fontSize={24}
          >
            Select A Campaign
          </Typography>
          <Typography variant="body2" fontFamily="Helvetica Neue">
            View relevant statistics for the campaign of your choosing.
          </Typography>
          <SimpleSelect
            label="Choose An Active Campaign"
            isRequired={true}
            options={campaignOptions}
            initialValue={campaignOptions[0].id}
            setValue={(campaignId: string) => {
              const selectedCampaignOption = campaignOptions.filter(
                (campaign: SelectMenuOption) => campaign.id === campaignId
              )?.[0];
              if (selectedCampaignOption) {
                handleSetCampaign(selectedCampaignOption);
              }
            }}
          />
        </div>
        <div className="flex w-2/3 h-2/3">
          <BarChart data={EXAMPLE_DATUM} />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { BarChart } from "./shared/BarChart";
import { generateExampleData } from "./utils";
import { Typography } from "@mui/material";
import {
  SelectMenuOption,
  SimpleSelect,
} from "../../../../components/shared/SimpleSelect";
import { EXAMPLE_CAMPAIGNS } from "../../../entries-dashboard/utils";
import {
  ChartMetricOptionsEnum,
  ChartMetricOptionsRecord,
} from "../../../../types/campaign_analytics";
import { useTranslation } from "react-i18next";

const campaignOptions: SelectMenuOption[] = EXAMPLE_CAMPAIGNS.map(
  (campaignInfo) => {
    return {
      id: campaignInfo.id,
      title: campaignInfo.name,
    };
  }
);

const chartMetricOptions: SelectMenuOption[] = Object.keys(
  ChartMetricOptionsRecord
).map((metricOption) => {
  const option = metricOption as ChartMetricOptionsEnum;
  return {
    id: option,
    title: ChartMetricOptionsRecord[option],
  };
});
export default function Analytics() {
  const [currentCampaign, setCurrentCampaign] = useState(campaignOptions[0]);
  /** Note: "Chart metric" only has to do with the type of data displayed, and not directly to chart type/context */
  const [currentChartMetric, setCurrentChartMetric] = useState(
    ChartMetricOptionsEnum.OPEN_RATE
  );
  const [chartData, setChartData] = useState(generateExampleData());

  const handleSetCampaign = (campaignOption: { id: string; title: string }) => {
    setCurrentCampaign(campaignOption);
  };
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch more random data for chart
    setChartData(generateExampleData());
  }, [currentCampaign]);
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
        <div className="flex flex-col w-2/3 h-2/3">
          <div className="flex justify-end w-full">
            <div className="w-1/4">
              <SimpleSelect
                label={t("dashboard.analytics.charts.selectAMetric")}
                tooltip18nKey={t(
                  "dashboard.analytics.charts.selectAMetricInfo"
                )}
                options={chartMetricOptions}
                initialValue={chartMetricOptions[0].id}
                setValue={(value: string) =>
                  setCurrentChartMetric(value as ChartMetricOptionsEnum)
                }
              />
            </div>
          </div>
          <BarChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

import { SelectMenuOption } from "../shared/SimpleSelect";
import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function useScanRates() {
  const { t } = useTranslation();
  return [
    {
      id: "weekly",
      title: "Weekly",
      subtitle: t("campaigns.createCampaignDrawer.scanRateSubtitles.weekly"),
    },
    {
      id: "biweekly",
      title: "Bi-weekly",
      subtitle: t("campaigns.createCampaignDrawer.scanRateSubtitles.biweekly"),
    },
    {
      id: "monthly",
      title: "Monthly",
      subtitle: t("campaigns.createCampaignDrawer.scanRateSubtitles.monthly"),
    },
    {
      id: "quarterly",
      title: "Quarterly",
      subtitle: t("campaigns.createCampaignDrawer.scanRateSubtitles.quarterly"),
    },
  ];
}

export function useDispatchRates() {
  const { t } = useTranslation();
  return [
    {
      id: "weekly",
      title: "Weekly",
      subtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.weekly"
      ),
    },
    {
      id: "biweekly",
      title: "Bi-weekly",
      subtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.biweekly"
      ),
    },
    {
      id: "monthly",
      title: "Monthly",
      subtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.monthly"
      ),
    },
    {
      id: "quarterly",
      title: "Quarterly",
      subtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.quarterly"
      ),
    },
  ];
}

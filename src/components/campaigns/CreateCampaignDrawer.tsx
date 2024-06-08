import {
  Drawer,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { SimpleTextInput } from "../shared/SimpleTextInput";
import dayjs, { Dayjs } from "dayjs";
import { useState, createRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { AccessTime } from "@mui/icons-material";
import { DurationModeToggler } from "./DurationModeToggler";
import arbalestIcon from "../../assets/arbalest_icon_large.png";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";

const DEFAULT_CAMPAIGN_TITLE = "My awesome new campaign";
const DEFAULT_CAMPAIGN_DESCRIPTION = "This campaign is going to be super cool.";

interface RateSelectMenuOption {
  id: string;
  title: string;
  /** Subtitle content if the current RateSelectMenuOption is used to display scan rate options */
  scanRateSubtitle: string;
  /** Subtitle content if the current RateSelectMenuOption is used to display dispatch rate options */
  dispatchRateSubtitle: string;
}

export function CreateCampaignDrawer(props: {
  open: boolean;
  setDrawerClose: () => void;
}) {
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs().add(1, "day")
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, "month"));
  const [isFixedDuration, setIsFixedDuration] = useState(false);

  const handleScanRateChange = (event: SelectChangeEvent) => {
    setScanRate(event.target.value);
  };
  const handleDispatchRateChange = (event: SelectChangeEvent) => {
    setDispatchRate(event.target.value);
  };

  const { open, setDrawerClose } = props;
  const formTextRefs = {
    campaignTitle: createRef<HTMLInputElement>(),
    campaignDescription: createRef<HTMLInputElement>(),
    demoId: createRef<HTMLInputElement>(),
  };
  const { t } = useTranslation();

  const rateOptions: RateSelectMenuOption[] = [
    {
      id: "weekly",
      title: "Weekly",
      scanRateSubtitle: t(
        "campaigns.createCampaignDrawer.scanRateSubtitles.weekly"
      ),
      dispatchRateSubtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.weekly"
      ),
    },
    {
      id: "biweekly",
      title: "Bi-weekly",
      scanRateSubtitle: t(
        "campaigns.createCampaignDrawer.scanRateSubtitles.biweekly"
      ),
      dispatchRateSubtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.biweekly"
      ),
    },
    {
      id: "monthly",
      title: "Monthly",
      scanRateSubtitle: t(
        "campaigns.createCampaignDrawer.scanRateSubtitles.monthly"
      ),
      dispatchRateSubtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.monthly"
      ),
    },
    {
      id: "quarterly",
      title: "Quarterly",
      scanRateSubtitle: t(
        "campaigns.createCampaignDrawer.scanRateSubtitles.quarterly"
      ),
      dispatchRateSubtitle: t(
        "campaigns.createCampaignDrawer.dispatchRateSubtitles.quarterly"
      ),
    },
  ];

  const [scanRate, setScanRate] = useState(rateOptions[0].id);
  const [dispatchRate, setDispatchRate] = useState(rateOptions[0].id);

  const handleSetIsFixedDuration = (isFixedDuration: boolean) => {
    setIsFixedDuration(isFixedDuration);
  };
  return (
    <Drawer open={open} onClose={setDrawerClose}>
      <div className="flex flex-col w-48rem justify-start -mb-10 ml-10">
        <div className="flex flex-col w-48rem p-10 justify-center">
          <div className="flex flex-col items-center">
            <Box
              component="img"
              alt="Arbalest logo"
              sx={{ width: "3rem" }}
              src={arbalestIcon}
              className="cursor-pointer"
            />
          </div>
          <div className="py-5">
            <Divider variant="middle" />
          </div>
          <div>
            <Typography variant="h2">Create a new campaign.</Typography>
          </div>
          <div className="text-">
            <Typography variant="body1">
              By submitting this form, you will create a new campaign for the{" "}
              <b>Property Name</b> property. Some fields will be permanent but
              others you will be able to change later.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-48rem mx-10 justify-start">
        <div>
          <SimpleTextInput
            ref={formTextRefs.campaignTitle}
            isRequired={true}
            maxLength={25}
            initialValue={DEFAULT_CAMPAIGN_TITLE}
            label="Campaign Title"
          />
        </div>
        <div className="-mt-2rem">
          <SimpleTextInput
            ref={formTextRefs.campaignDescription}
            isRequired={false}
            maxLength={100}
            initialValue={DEFAULT_CAMPAIGN_DESCRIPTION}
            label="Campaign Description"
          />
        </div>
        <div>
          <DurationModeToggler setIsFixedDuration={handleSetIsFixedDuration} />
        </div>
        <div>
          <div className="flex w-full mt-4rem">
            <div className="flex w-full">
              <DatePicker
                className="w-full"
                label="Start date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
            </div>
            {isFixedDuration && (
              <>
                <div className="flex justify-center items-center mx-4 text-black/20">
                  <AccessTime />
                </div>
                <div className="flex flex-col w-full">
                  <DatePicker
                    className="w-full"
                    label="End date"
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-10">
          <div className="text-black flex mb-1">
            <Typography
              variant="button"
              fontFamily="Radio Canada Big"
              color="inherit"
            >
              Set Scan Rate
            </Typography>
            <div className="ml-2 flex items-center">
              <HelpOutline fontSize="small" />
            </div>
          </div>
          <Select
            labelId="scan-rate"
            className="w-full"
            value={scanRate}
            onChange={handleScanRateChange}
          >
            {rateOptions.map((option) => (
              <MenuItem value={option.id}>
                <RichMenuItem option={option} isScanRate={true} />
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="mt-5">
          <div className="text-black flex mb-1">
            <Typography
              variant="button"
              fontFamily="Radio Canada Big"
              color="inherit"
            >
              Set Dispatch Rate
            </Typography>
            <div className="ml-2 flex items-center">
              <HelpOutline fontSize="small" />
            </div>
          </div>
          <Select
            labelId="dispatch-rate"
            className="w-full"
            value={dispatchRate}
            onChange={handleDispatchRateChange}
          >
            {rateOptions.map((option) => (
              <MenuItem value={option.id}>
                <RichMenuItem option={option} isScanRate={false} />
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </Drawer>
  );
}

const RichMenuItem = (props: {
  option: RateSelectMenuOption;
  isScanRate: boolean;
}) => {
  const { option, isScanRate } = props;
  return (
    <div className="flex flex-col">
      <div className="p-1">
        <Typography variant="body1" fontWeight={500}>
          <b>{option.title}</b>
        </Typography>
      </div>
      <div className="p-1">
        <Typography variant="body2">
          {isScanRate ? option.scanRateSubtitle : option.dispatchRateSubtitle}
        </Typography>
      </div>
    </div>
  );
};

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
import { SelectMenuOption, SimpleSelect } from "../shared/SimpleSelect";
import { useScanRates, useDispatchRates } from "./rateOptions";

const DEFAULT_CAMPAIGN_TITLE = "My awesome new campaign";
const DEFAULT_CAMPAIGN_DESCRIPTION = "This campaign is going to be super cool.";

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
    mailingListId: createRef<HTMLInputElement>(),
  };
  const { t } = useTranslation();

  const [scanRate, setScanRate] = useState("weekly");
  const [dispatchRate, setDispatchRate] = useState("weekly");

  const scanRateOptions = useScanRates();
  const dispatchRateOptions = useDispatchRates();

  const handleSetIsFixedDuration = (isFixedDuration: boolean) => {
    setIsFixedDuration(isFixedDuration);
  };
  return (
    <Drawer open={open} onClose={setDrawerClose}>
      <div className="flex flex-col w-48rem justify-start -mb-10 ml-10">
        <div
          className="flex flex-col w-48rem p-10 justify-center"
          style={{ position: "sticky", top: 0 }}
        >
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
          <div className="sticky top-0">
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
                label={
                  <div className="text-soft-black">
                    <Typography
                      fontFamily={"Source Sans 3"}
                      fontWeight={900}
                      variant="button"
                      color="inherit"
                    >
                      Start date
                    </Typography>
                  </div>
                }
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
                    label={
                      <div className="text-soft-black">
                        <Typography
                          fontFamily={"Source Sans 3"}
                          fontWeight={900}
                          variant="button"
                          color="inherit"
                        >
                          End date
                        </Typography>
                      </div>
                    }
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <SimpleSelect
          headingText="Set Scan Rate"
          isRequired={true}
          options={scanRateOptions}
          infoText18nKey={"campaigns.createCampaignDrawer.scanRateExplanation"}
          initialValue="weekly"
          setValue={setScanRate}
        />
        <SimpleSelect
          headingText="Set Dispatch Rate"
          isRequired={true}
          options={dispatchRateOptions}
          infoText18nKey={
            "campaigns.createCampaignDrawer.dispatchRateExplanation"
          }
          initialValue="weekly"
          setValue={setDispatchRate}
        />
      </div>
    </Drawer>
  );
}

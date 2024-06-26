import { Drawer, Typography, Box } from "@mui/material";
import { SimpleTextInput } from "../shared/SimpleTextInput";
import dayjs, { Dayjs } from "dayjs";
import { useState, createRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { AccessTime } from "@mui/icons-material";
import { DurationModeToggler } from "./DurationModeToggler";
import arbalestLogo from "../../assets/arbalest_logo_two_large.png";
import Divider from "@mui/material/Divider";

const DEFAULT_CAMPAIGN_TITLE = "My awesome new campaign";
const DEFAULT_CAMPAIGN_DESCRIPTION = "This campaign is going to be super cool.";

export function CreateCampaignDrawer(props: {
  open: boolean;
  setDrawerClose: () => void;
}) {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2000-01-01"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(""));
  const [isFixedDuration, setIsFixedDuration] = useState(false);
  const { open, setDrawerClose } = props;
  const formTextRefs = {
    campaignTitle: createRef<HTMLInputElement>(),
    campaignDescription: createRef<HTMLInputElement>(),
    demoId: createRef<HTMLInputElement>(),
  };

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
              sx={{ width: "10rem" }}
              src={arbalestLogo}
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
      </div>
    </Drawer>
  );
}

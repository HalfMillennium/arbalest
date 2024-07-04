import {
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";

import { Trans } from "react-i18next";
/** Subtitle content if the current RateSelectMenuOption is used to display scan rate options */

/** Subtitle content if the current RateSelectMenuOption is used to display dispatch rate options */

export interface SelectMenuOption {
  id: string;
  title: string;
  subtitle?: string;
}

export function SimpleSelect(props: {
  label: string;
  options: SelectMenuOption[];
  isRequired?: boolean;
  tooltip18nKey?: string | undefined;
  infoText18nKey?: string | undefined;
  initialValue?: string;
  setValue: (itemId: string) => void;
}) {
  const {
    label,
    options,
    isRequired,
    infoText18nKey,
    tooltip18nKey,
    initialValue,
    setValue,
  } = props;
  const [valueInternal, setValueInternal] = useState(initialValue ?? "");
  const handleValueChange = (event: SelectChangeEvent) => {
    const updatedValue = event.target.value;
    setValueInternal(updatedValue);
    setValue(updatedValue);
  };
  return (
    <div className="mt-7 flex flex-col w-36rem xl:w-48rem">
      <div className="flex flex-col">
        <div className="text-black flex mb-1 w-32rem xl:w-36rem">
          <Typography
            variant="button"
            fontFamily="Helvetica Neue"
            color="inherit"
          >
            {label}
          </Typography>
          {tooltip18nKey && (
            <Tooltip
              title={
                <Typography variant="body2" fontFamily="Radio Canada Big">
                  <Trans i18nKey={tooltip18nKey} />
                </Typography>
              }
            >
              <div className="ml-2 flex items-center text-dark-lavender">
                <HelpOutline fontSize="small" color="inherit" />
              </div>
            </Tooltip>
          )}
        </div>
        {infoText18nKey && (
          <div className="pb-2">
            <Typography variant="body2" fontFamily="Radio Canada Big">
              <Trans i18nKey={infoText18nKey} />
            </Typography>
          </div>
        )}
      </div>
      <Select
        labelId="dispatch-rate"
        className="w-full"
        color="info"
        sx={{
          borderRadius: "0.5rem", // More rounded corners
          backgroundColor: "#ffffff", // Light background color
          color: "#212121", // Dark text color for contrast
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e0e0", // Lighter border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e0e0", // Slightly darker on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e0e0", // Distinct focus state
          },
        }}
        value={valueInternal}
        onChange={handleValueChange}
        MenuProps={{
          PaperProps: {
            elevation: 0, // Removes the drop shadow beneath the menu items
            sx: {
              borderRadius: "0.4rem", // Applies rounded corners to the menu
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.id}
            sx={{
              borderRadius: "0.5rem",
              margin: "0.5rem",
              ":hover": {
                backgroundColor: "rgba(41,44,82,0.1)",
              },
            }}
          >
            <RichMenuItem option={option} />
          </MenuItem>
        ))}
      </Select>
      {isRequired !== undefined && (
        <div className="w-full flex justify-end">
          <div className="text-soft-black">
            <Typography
              variant="body2"
              color="inherit"
              fontFamily="Radio Canada Big"
            >
              * This field is {isRequired ? <b>required</b> : "optional"}.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

const RichMenuItem = (props: { option: SelectMenuOption }) => {
  const { option } = props;
  const subtitle = option?.subtitle;

  return (
    <div className="flex flex-col">
      <div className="p-1">
        <Typography
          variant="body1"
          fontFamily="Helvetica Neue"
          fontWeight={500}
        >
          <b>{option.title}</b>
        </Typography>
      </div>
      {subtitle && (
        <div className="p-1">
          <Typography variant="body1" fontFamily="Helvetica Neue">
            {subtitle}
          </Typography>
        </div>
      )}
    </div>
  );
};

import { Typography, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";

import { Trans } from "react-i18next";
/** Subtitle content if the current RateSelectMenuOption is used to display scan rate options */

/** Subtitle content if the current RateSelectMenuOption is used to display dispatch rate options */

export interface SelectMenuOption {
  id: string;
  title: string;
  subtitle: string;
}

export function SimpleSelect(props: {
  label: string;
  options: SelectMenuOption[];
  isRequired?: boolean;
  infoText18nKey?: string | undefined;
  initialValue?: string;
  setValue: (value: string) => void;
}) {
  const { label, options, isRequired, infoText18nKey, initialValue, setValue } =
    props;
  const [valueInternal, setValueInternal] = useState(initialValue ?? "");
  const handleValueChange = (event: SelectChangeEvent) => {
    const updatedValue = event.target.value;
    setValueInternal(updatedValue);
    setValue(updatedValue);
  };
  return (
    <div className="mt-7 flex flex-col">
      <div className="flex flex-col">
        <div className="text-black flex mb-1">
          <Typography
            variant="button"
            fontFamily="Helvetica Neue"
            color="inherit"
          >
            {label}
          </Typography>
          <div className="ml-2 flex items-center text-dark-lavender">
            <HelpOutline fontSize="small" color="inherit" />
          </div>
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
        value={valueInternal}
        onChange={handleValueChange}
      >
        {options.map((option) => (
          <MenuItem value={option.id}>
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
  return (
    <div className="flex flex-col">
      <div className="p-1">
        <Typography variant="body1" fontWeight={500}>
          <b>{option.title}</b>
        </Typography>
      </div>
      {option.subtitle.length > 0 && (
        <div className="p-1">
          <Typography variant="body2">{option.subtitle}</Typography>
        </div>
      )}
    </div>
  );
};

import { Typography, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";
/** Subtitle content if the current RateSelectMenuOption is used to display scan rate options */

/** Subtitle content if the current RateSelectMenuOption is used to display dispatch rate options */

export interface SelectMenuOption {
  id: string;
  title: string;
  subtitle: string;
}

export function SimpleSelect({
  headingText,
  options,
  isRequired,
  infoText,
  initialValue,
  setValue,
}: {
  headingText: string;
  options: SelectMenuOption[];
  isRequired: boolean;
  infoText?: string;
  initialValue?: string;
  setValue: (value: string) => void;
}) {
  const [valueInternal, setValueInternal] = useState(initialValue ?? "");

  const handleValueChange = (event: SelectChangeEvent) => {
    const updatedValue = event.target.value;
    setValueInternal(updatedValue);
    setValue(updatedValue);
  };
  return (
    <div className="mt-7">
      <div className="text-black flex mb-1">
        <Typography
          variant="button"
          fontFamily="Radio Canada Big"
          color="inherit"
        >
          {headingText}
        </Typography>
        <div className="ml-2 flex items-center">
          <HelpOutline fontSize="small" />
        </div>
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
      <div className="p-1">
        <Typography variant="body2">{option.subtitle}</Typography>
      </div>
    </div>
  );
};

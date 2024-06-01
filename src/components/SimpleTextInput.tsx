import { RecentEntryList } from "../pages/entries-dashboard/recent-entries/RecentEntryList";
import {
  EXAMPLE_CAMPAIGN_ENTRIES,
  EXAMPLE_EMAIL_SUBJECT,
} from "../pages/entries-dashboard/utils";
import { useState, createRef } from "react";
import { Typography, Button } from "@mui/material";

const MAX_SUBJECT_LINE_LENGTH = 75;

export function SimpleTextInput(props: {
  maxLength: number;
  initialValue: string;
  setValue: (value: any) => void;
  label: string;
}) {
  const { maxLength, initialValue, setValue, label } = props;
  const subjectLineTextAreaRef = createRef<HTMLInputElement>();
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [currentValueInternal, setCurrentValueInternal] =
    useState(initialValue);

  return (
    <div className="mx-30 flex flex-col justify-start mb-10 w-full mt-10">
      <div className="flex justify-between text-center items-center">
        <div>
          <Typography variant="button" fontFamily="Radio Canada Big">
            {label}
          </Typography>
        </div>
        <div className="ml-2">
          <Typography fontFamily="Montserrat" variant="body2">
            ({currentValue.length}/{maxLength})
          </Typography>
        </div>
      </div>
      <div className="flex justify-center">
        <input
          ref={subjectLineTextAreaRef}
          style={{ fontFamily: "Roboto Mono" }}
          className="w-full h-1/5 bg-white text-slate-900 border-2 border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto shadow-md"
          value={currentValueInternal}
          maxLength={maxLength}
          onChange={(event) => {
            setCurrentValueInternal(event.target.value);
            setCurrentValue(event.target.value);
          }}
        />
      </div>
      <div className="pt-2 text-black w-full flex justify-end">
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => {
            setValue(currentValue);
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

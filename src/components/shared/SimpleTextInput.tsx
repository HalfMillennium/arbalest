import { useState, createRef, RefObject } from "react";
import { Typography, Button } from "@mui/material";

interface InputOptions {
  type: string;
  maxLength: number;
  initialValue: string;
  setValue?: (value: any) => void;
  ref: RefObject<HTMLInputElement>;
  label: string;
  showSaveChangesButton: boolean;
  isRequired?: boolean;
}
SimpleTextInput.defaultProps = {
  type: "text",
  showSaveChangesButton: false,
};
export function SimpleTextInput(props: InputOptions) {
  const {
    type,
    maxLength,
    initialValue,
    setValue,
    label,
    showSaveChangesButton,
    isRequired,
    ref,
  } = props;
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [currentValueInternal, setCurrentValueInternal] =
    useState(initialValue);

  return (
    <div className="flex flex-col justify-start w-full mt-10 mx-30">
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
      <div className="w-full flex flex-col justify-center">
        <input
          ref={ref}
          type={type}
          style={{ fontFamily: "Roboto Mono" }}
          className="w-full bg-white text-slate-900 border-2 border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto shadow-md"
          value={currentValueInternal}
          maxLength={maxLength}
          onChange={(event) => {
            setCurrentValueInternal(event.target.value);
            setCurrentValue(event.target.value);
          }}
        />
        {isRequired !== undefined && (
          <div className="w-full flex justify-end">
            <div className="text-dusk-violet">
              <Typography
                variant="body1"
                color="inherit"
                fontFamily="Radio Canada Big"
              >
                This field is {isRequired ? <b>required</b> : "optional"}.
              </Typography>
            </div>
          </div>
        )}
      </div>
      {showSaveChangesButton && (
        <div className="pt-2 text-black w-full flex justify-end">
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              if (setValue) {
                setValue(currentValue);
              }
            }}
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}

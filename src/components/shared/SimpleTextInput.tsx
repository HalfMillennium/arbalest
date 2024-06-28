import { useState, createRef, RefObject } from "react";
import { Typography, Button } from "@mui/material";

interface InputOptions {
  type: string;
  maxLength: number;
  initialValue: string;
  /** setValue function used when SimpleTextInput is used as controlled component */
  setValue?: (value: any) => void;
  ref: RefObject<HTMLInputElement>;
  label: string;
  showSaveChangesButton: boolean;
  isRequired?: boolean;
  style?: "fill" | "underline";
  CustomButtonGroup?: React.ReactNode;
}
SimpleTextInput.defaultProps = {
  type: "text",
  showSaveChangesButton: false,
  style: "fill",
};
export function SimpleTextInput(props: InputOptions) {
  const {
    setValue,
    type,
    maxLength,
    initialValue,
    label,
    showSaveChangesButton,
    isRequired,
    ref,
    style,
    CustomButtonGroup,
  } = props;
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [currentValueInternal, setCurrentValueInternal] =
    useState(initialValue);

  const componentStyles =
    "w-full text-slate-900 p-3 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto " +
    (style === "underline"
      ? "border-0 bg-transparent"
      : "border-2 border-slate-300 rounded-md bg-white shadow-md");

  return (
    <div className="flex flex-col justify-start w-full mt-10 mx-30">
      <div className="flex justify-between text-center items-center">
        <div>
          <Typography variant="button" fontFamily="Helvetica Neue">
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
          style={{
            fontFamily: "Roboto Mono",
            borderBottom: style === "underline" ? "2px solid #212121" : "",
          }}
          className={componentStyles}
          value={currentValueInternal}
          maxLength={maxLength}
          onChange={(event) => {
            setCurrentValueInternal(event.target.value);
            setCurrentValue(event.target.value);
          }}
        />
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
      {showSaveChangesButton && (
        <div className="pt-2 text-black w-full flex justify-end">
          <div className="text-gray-500 mr-2">{CustomButtonGroup}</div>
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

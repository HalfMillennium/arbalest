import { Typography } from "@mui/material";
import { AllInclusive, DateRange } from "@mui/icons-material";
import { useState } from "react";

export function DurationModeToggler(props: {
  setIsFixedDuration: (isFixedDuration: boolean) => void;
}) {
  const { setIsFixedDuration } = props;
  const [isFixedDurationInternal, setIsFixedDurationInternal] = useState(false);

  const handleSelectOption = (durationMode: boolean) => {
    setIsFixedDurationInternal(durationMode);
    setIsFixedDuration(durationMode);
  };

  return (
    <div className="flex flex-col justify-center space-x-4 mt-5">
      <div>
        <Typography variant="button" fontFamily="Radio Canada Big">
          Duration
        </Typography>
      </div>
      <div className="flex">
        <div>
          <button
            className={`px-4 py-2 font-semibold rounded-sm focus:outline-none ${
              isFixedDurationInternal
                ? "bg-gray-100 text-gray-800"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleSelectOption(false)}
          >
            <div className="flex">
              <AllInclusive fontSize="medium" />
              <Typography
                className="pl-2"
                fontFamily="Radio Canada Big"
                fontWeight={500}
              >
                Unbounded
              </Typography>
            </div>
          </button>
        </div>
        <div className="ml-5">
          <button
            className={`px-4 py-2 font-semibold rounded-sm focus:outline-none ${
              !isFixedDurationInternal
                ? "bg-gray-100 text-gray-800"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleSelectOption(true)}
          >
            <div className="flex">
              <DateRange fontSize="medium" />
              <Typography
                className="pl-2"
                fontFamily="Radio Canada Big"
                fontWeight={500}
              >
                Fixed Timeframe
              </Typography>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

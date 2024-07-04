import { Typography } from "@mui/material";
import { AllInclusive, DateRange } from "@mui/icons-material";
import { useState } from "react";
import { SimpleSwitchToggler } from "../shared/SimpleSwitchToggler";

export function DurationModeToggler(props: {
  setIsUnboundedDuration: (isFixedDuration: boolean) => void;
}) {
  const { setIsUnboundedDuration } = props;
  const [isUnboundedDuration, setIsUnboundedDurationInternal] = useState(false);

  const handleIsUnboundedDuration = (durationMode: boolean) => {
    setIsUnboundedDurationInternal(durationMode);
    setIsUnboundedDuration(durationMode);
  };

  const unboundedIcon = <AllInclusive fontSize="medium" />;
  const fixedIcon = <DateRange fontSize="medium" />;

  return (
    <div className="flex flex-col justify-center space-x-4 mt-5">
      <div>
        <Typography variant="button" fontFamily="Radio Canada Big">
          Duration
        </Typography>
      </div>
      <SimpleSwitchToggler
        handleIsSelectOptionA={handleIsUnboundedDuration}
        optionA={{ title: "Unbounded", Icon: unboundedIcon }}
        optionB={{ title: "Fixed", Icon: fixedIcon }}
      />
    </div>
  );
}

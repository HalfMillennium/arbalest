import { Typography } from "@mui/material";
import { useState } from "react";

// nodeA Icon -> <AllInclusive fontSize="medium" />
// nodeB Icon -> <DateRange fontSize="medium" />
interface SwitchOption {
  title: string;
  Icon: React.ReactNode;
}

// TODO: Eventually update to accept array of options? Use case not yet relevant
export function SimpleSwitchToggler({
  handleIsSelectOptionA,
  optionA,
  optionB,
}: {
  handleIsSelectOptionA: (choice: boolean) => void;
  optionA: SwitchOption;
  optionB: SwitchOption;
}) {
  const [isOptionA, setIsOptionA] = useState(true);
  return (
    <div className="flex">
      <div>
        <button
          className={`px-4 py-2 font-semibold rounded-sm focus:outline-none ${
            !isOptionA
              ? "bg-gray-100 text-gray-800"
              : "bg-dark-lavender text-white"
          }`}
          onClick={() => {
            handleIsSelectOptionA(true);
            setIsOptionA(true);
          }}
        >
          <div className="flex align-middle justify-center">
            <div className="flex">{optionA.Icon}</div>
            <Typography
              className="pl-2"
              fontFamily="Radio Canada Big"
              fontWeight={500}
            >
              {optionA.title}
            </Typography>
          </div>
        </button>
      </div>
      <div className="ml-5">
        <button
          className={`px-4 py-2 font-semibold rounded-sm focus:outline-none ${
            isOptionA
              ? "bg-gray-100 text-gray-800"
              : "bg-dark-lavender text-white"
          }`}
          onClick={() => {
            handleIsSelectOptionA(false);
            setIsOptionA(false);
          }}
        >
          <div className="flex align-middle justify-center">
            <div className="flex">{optionB.Icon}</div>
            <Typography
              className="pl-2"
              fontFamily="Radio Canada Big"
              fontWeight={500}
            >
              {optionB.title}
            </Typography>
          </div>
        </button>
      </div>
    </div>
  );
}

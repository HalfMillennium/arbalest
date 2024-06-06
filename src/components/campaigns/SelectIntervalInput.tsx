import { Typography } from "@mui/material";

export function SelectIntervalInput() {
  return (
    <div className="flex flex-col justify-center space-x-4 mt-5">
      <div>
        <Typography variant="button" fontFamily="Radio Canada Big">
          Specify Scan Rate
        </Typography>
      </div>
      <div>
        <Typography variant="body1" fontFamily="Radio Canada Big"></Typography>
      </div>
    </div>
  );
}

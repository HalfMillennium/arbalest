import { CircularProgress, Typography } from "@mui/material";

export function HealthIndicator({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex items-center text-green-300">
        <CircularProgress
          variant="determinate"
          value={rating}
          color="inherit"
        ></CircularProgress>
      </div>
      <div className="z-10 ml-3">
        <Typography variant="h5" fontWeight={"bold"} fontFamily={"Montserrat"}>
          {rating}
        </Typography>
      </div>
    </div>
  );
}

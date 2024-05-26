import { CircularProgress, Typography } from "@mui/material";

export function HealthIndicator(props: { rating: number }) {
  const { rating } = props;
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-green-300">
        <CircularProgress
          variant="determinate"
          value={rating}
          color="inherit"
          className="z-0"
        ></CircularProgress>
      </div>
      <div className="z-10 -mt-30 ml-3">
        <Typography variant="h5" fontWeight={"bold"} fontFamily={"Montserrat"}>
          74
        </Typography>
      </div>
    </div>
  );
}

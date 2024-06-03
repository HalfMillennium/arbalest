import { CircularProgress, Typography } from "@mui/material";

export function LoadingSpinner(props: { label: string }) {
  const { label } = props;
  return (
    <div className="flex flex-col justify-center items-center text-black h-full">
      <div>
        <CircularProgress color="inherit" />
      </div>
      <div>
        <Typography variant="body1" fontFamily={"Montserrat"}>
          {label}
        </Typography>
      </div>
    </div>
  );
}

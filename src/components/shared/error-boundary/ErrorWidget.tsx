import { Error } from "@mui/icons-material";
import { Typography } from "@mui/material";

export function ErrorWidget() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="m-1">
        <Error color="error" fontSize="large" />
      </div>
      <div>
        <Typography variant="body1" fontWeight={500}>
          That doesn't seem to be working right now. Try again later.
        </Typography>
      </div>
    </div>
  );
}

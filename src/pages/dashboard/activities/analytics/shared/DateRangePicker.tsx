import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

/**
 *
 * Allows user to set range of time from two dates
 */
export function DateRangePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: (newDate: Dayjs) => void;
  setEndDate: (newDate: Dayjs) => void;
}) {
  return (
    <div>
      <div className="flex w-full mt-4rem">
        <div className="flex w-full">
          <DatePicker
            className="w-full"
            label={
              <div className="text-soft-black">
                <Typography
                  fontFamily={"Source Sans 3"}
                  fontWeight={900}
                  variant="button"
                  color="inherit"
                >
                  Start date
                </Typography>
              </div>
            }
            value={startDate}
            onChange={(newValue) => newValue && setStartDate(newValue)}
          />
        </div>{" "}
        <div className="flex justify-center items-center mx-4 text-black/20">
          <AccessTime />
        </div>
        <div className="flex flex-col w-full">
          <DatePicker
            className="w-full"
            label={
              <div className="text-soft-black">
                <Typography
                  fontFamily={"Source Sans 3"}
                  fontWeight={900}
                  variant="button"
                  color="inherit"
                >
                  End date
                </Typography>
              </div>
            }
            value={endDate}
            onChange={(newValue) => newValue && setEndDate(newValue)}
          />
        </div>
      </div>
    </div>
  );
}

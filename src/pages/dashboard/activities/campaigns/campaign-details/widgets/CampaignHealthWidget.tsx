import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  Card,
  CardContent,
} from "@mui/material";
import { HealthAndSafety, Check } from "@mui/icons-material";

/** Provides overview of engagement rate vs. duration of campaign, as well as campaign result if current rate is maintained for duration of campaign */
export function CampaignHealthWidget() {
  return (
    <div className="bg-green-100 p-3 mb-3 mr-3 rounded-md">
      <div>
        <div className="flex flex-row">
          <div>
            <Typography variant="h5" component="div" fontWeight="medium">
              Campaign Health
            </Typography>
          </div>
          <div>
            <HealthAndSafety />
          </div>
        </div>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div>
        <HealthSummaryTable />
      </div>
    </div>
  );

  function HealthSummaryTable() {
    const healthSummaryFields = [
      { label: "Open Rate", id: "openRate" },
      { label: "Click Rate", id: "clickRate" },
      { label: "Conversion Rate", id: "conversionRate" },
    ];
    const healthPercent = 87.8; // No current idea how this will be calculated lol
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  fontWeight={500}
                  fontFamily="Radio Canada Big"
                  variant="h6"
                >
                  Health Rating
                </Typography>
              </TableCell>
              {healthSummaryFields.map((field) => (
                <TableCell>
                  <Typography fontWeight="bold" variant="body2">
                    {field.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="bg-black/10 p-2 rounded-md shadow-sm text-center items-center flex w-fit">
                  <div className="w-1/2">
                    <Typography fontFamily="Montserrat" fontWeight="bold">
                      {healthPercent}%
                    </Typography>
                  </div>
                  <div className="w-1/2 pl-2">
                    <Check />
                  </div>
                  <div className="p-1">
                    <Typography variant="body2" fontStyle="italic">
                      Nice!
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell>0.3 (30%)</TableCell>
              <TableCell>0.21 (21%)</TableCell>
              <TableCell>0.13 (13%)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const campaigns = [
  { id: 1, name: "Campaign 1", type: "Email", demographic: "18-24" },
  { id: 2, name: "Campaign 2", type: "SMS", demographic: "25-34" },
  // Add more campaign data as needed
];

export function CampaignTable(props: { filter: string }) {
  const { filter } = props;

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (filter === "all") return true;
    if (filter === "type") return campaign.type === "Email";
    if (filter === "demographic") return campaign.demographic === "18-24";
    return true;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontWeight="medium">Campaign Name</Typography>
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Demographic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCampaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.type}</TableCell>
              <TableCell>{campaign.demographic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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
import { CampaignInfo, CAMPAIGN_FIELDS } from "../../../../types/campaigns";

const campaigns: CampaignInfo[] = [
  {
    id: "1",
    name: "New Biscuits Campaign",
    propertyId: "#123",
    dateStarted: "March 20th, 2024",
    engagements: 72,
    mailingListId: "#456",
  },
  {
    id: "2",
    name: "Jelly Recall Announcement",
    propertyId: "#123",
    dateStarted: "May 17th, 2024",
    engagements: 548,
    mailingListId: "#456",
  },
  {
    id: "3",
    name: "Jelly RE-recall Announcement",
    propertyId: "#123",
    dateStarted: "May 17th, 2024",
    engagements: 185,
    mailingListId: "#456",
  },
  {
    id: "4",
    name: "New Jelly Announcement",
    propertyId: "#123",
    demographicId: "#dummies",
    dateStarted: "May 17th, 2024",
    engagements: 548,
    mailingListId: "#898",
  },
];

export function CampaignTable(props: { filter: string }) {
  const { filter } = props;

  const filteredCampaigns = campaigns.filter((campaign) => {
    // TODO: Configure (basic) filtering conditions
    return true;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {CAMPAIGN_FIELDS.map((field: string) => (
              <TableCell>
                <Typography fontWeight="medium" fontFamily="Radio Canada Big">
                  {field}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCampaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>
                <Typography fontFamily="Radio Canada Big">
                  {campaign.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontFamily="Radio Canada Big"
                  style={
                    campaign.demographicId === undefined
                      ? { color: "gray" }
                      : {}
                  }
                >
                  {campaign.demographicId ?? "N/A"}{" "}
                  {/** TODO: Instead get user-defined name for demographic group (special mailing list) */}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontFamily="Radio Canada Big">
                  {campaign.propertyId}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontFamily="Radio Canada Big">
                  {campaign.dateStarted}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontFamily="Radio Canada Big">
                  {campaign.engagements}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontFamily="Radio Canada Big">
                  {campaign.mailingListId}
                  {/** TODO: Instead get user-defined mailing list name */}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

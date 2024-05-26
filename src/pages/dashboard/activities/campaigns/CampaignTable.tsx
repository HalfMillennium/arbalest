import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import { CampaignInfo, CAMPAIGN_FIELDS } from "../../../../types/campaigns";
import { CampaignDetails } from "./campaign-details/CampaignDetails";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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

  const TableComponent = ({ children }: { children: any }) => (
    <TableContainer className="rounded-sm bg-white/75">
      {children}
    </TableContainer>
  );

  const TableRowComponent = ({ children }: { children: any }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TableRow
          className={`cursor-pointer ${open ? "bg-slate-100" : ""}`}
          sx={{
            "&:hover": { backgroundColor: "rgb(241 245 249)" },
            "& > *": { borderBottom: "unset" },
          }}
          onClick={() => setOpen(!open)}
        >
          <TableCell>
            <IconButton aria-label="expand row" size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {children}
        </TableRow>
        <TableRow
          className="bg-slate-100"
          sx={{ "& > *": { borderBottom: "unset" } }}
        >
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={70}>
            <CollapseableCampaignDetails isOpen={open} />
          </TableCell>
        </TableRow>
      </>
    );
  };

  function CollapseableCampaignDetails(props: { isOpen: boolean }) {
    const { isOpen } = props;
    return (
      <div className="flex">
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <CampaignDetails />
        </Collapse>
      </div>
    );
  }

  return (
    <TableContainer component={TableComponent}>
      <Table>
        <TableHead className="relative">
          <TableRow>
            {/** Empty cell to account for extra row cell for open/close icon */}
            <TableCell></TableCell>
            {CAMPAIGN_FIELDS.map((field: string) => (
              <TableCell>
                <Typography fontWeight="medium" fontFamily="Radio Canada Big">
                  {field}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="w-full">
          {filteredCampaigns.map((campaign) => (
            <>
              <TableRowComponent key={campaign.id}>
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
              </TableRowComponent>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

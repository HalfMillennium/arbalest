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

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export function SimpleTable<TItem extends { [key: string]: any }>(props: {
  labels: string[];
  fieldIds: string[];
  filter: string;
  entries: TItem[];
  DrawerComponent: React.ComponentType<{ isOpen: boolean }>;
}) {
  const { filter, labels, fieldIds, entries, DrawerComponent } = props;

  const filteredEntries = entries.filter((items) => {
    // TODO: Configure filtering conditions
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
            <DrawerComponent isOpen={open} />
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <TableContainer component={TableComponent}>
      <Table>
        <TableHead className="relative">
          <TableRow>
            {/** Empty cell to account for extra row cell for open/close icon */}
            <TableCell></TableCell>
            {labels.map((label: string) => (
              <TableCell>
                <Typography fontWeight="medium" fontFamily="Radio Canada Big">
                  {label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="w-full">
          {/**
           *
           * NOTE:
           *
           * At the moment, this table uses the indices generated from the map function as keys for each row.
           * When user's attempt table deletion, or some kind of re-sorting, table structure will need to be maintained (or refresh).
           */}
          {filteredEntries.map((item, i) => {
            return (
              <>
                <TableRowComponent key={i}>
                  {fieldIds.map((field) => (
                    <TableCell>
                      <Typography fontFamily="Radio Canada Big">
                        {item[field] instanceof Date
                          ? item[field].toLocaleDateString()
                          : item[field]}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRowComponent>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  function printAndReturnItem(item: any) {
    console.log("here:", item);
    return item;
  }
}

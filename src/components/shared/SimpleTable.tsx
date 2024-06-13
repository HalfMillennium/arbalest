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
} from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HelpOutline } from "@mui/icons-material";

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
    <TableContainer className="rounded-sm bg-white/75 w-full">
      {children}
    </TableContainer>
  );

  const TableRowComponent = ({ children }: { children: any }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TableRow
          className={`cursor-pointer ${open ? "bg-transparent" : "bg-white"}`}
          sx={{
            "&:hover": { backgroundColor: "rgba(0,0,0,0);" },
            "& > *": { border: open ? "unset" : "" },
          }}
          onClick={() => setOpen(!open)}
        >
          <TableCell>
            <IconButton aria-label="expand row" size="small">
              <motion.span
                animate={open ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
              >
                <KeyboardArrowDownIcon />
              </motion.span>
            </IconButton>
          </TableCell>
          {children}
        </TableRow>
        <TableRow
          sx={{ "& > *": { borderBottom: "unset", borderTop: "unset" } }}
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
           * At the moment, this table uses the indices generated from the map function as keys for each row.
           * When user's attempt table deletion, or some kind of re-sorting, table structure will need to be maintained (or refreshed).
           */}
          {filteredEntries.map((item, i) => {
            return (
              <>
                <TableRowComponent key={i}>
                  {fieldIds.map((field) => (
                    <TableCell>
                      {item[field] && (
                        <Typography fontFamily="Radio Canada Big">
                          {item[field] instanceof Date
                            ? item[field].toLocaleDateString()
                            : item[field]}
                        </Typography>
                      )}
                      {!item[field] && (
                        <div className="text-slate-400">
                          <HelpOutline color="inherit" />
                        </div>
                      )}
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
}

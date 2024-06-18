import { motion } from "framer-motion";
import { useState } from "react";
import { EntryDashboardTabs } from "../../pages/entries-dashboard/types";
import { Typography } from "@mui/material";

export const ChipTabs = ({
  tabs,
  setSelected,
}: {
  tabs: EntryDashboardTabs[];
  setSelected: (selected: EntryDashboardTabs) => void;
}) => {
  const [selectedInternal, setSelectedInternal] = useState(tabs[0]);

  return (
    <div className="mx-4 flex items-center flex-wrap gap-8 -mb-6">
      {tabs.map((tab) => (
        <Chip
          tab={tab}
          selected={selectedInternal === tab}
          setChipSelected={setSelectedInternal}
          key={tab}
        />
      ))}
    </div>
  );

  function Chip({
    tab,
    selected,
    setChipSelected,
  }: {
    tab: EntryDashboardTabs;
    selected: boolean;
    setChipSelected: (selected: EntryDashboardTabs) => void;
  }) {
    return (
      <button
        onClick={() => {
          setSelected(tab);
          setChipSelected(tab);
        }}
        className={`${
          selected
            ? "text-white"
            : "text-soft-black hover:text-white hover:bg-soft-black/25"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <Typography
          variant="button"
          fontFamily="Helvetica Neue"
          fontWeight={500}
          className="relative z-10"
        >
          {tab}
        </Typography>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-br from-teal-200/35 to-dark-lavender rounded-md"
          ></motion.span>
        )}
      </button>
    );
  }
};

export default ChipTabs;

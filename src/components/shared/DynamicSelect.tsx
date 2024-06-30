import { Typography, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";
import { SelectMenuOption } from "./SimpleSelect";

export function DynamicSelect(props: {
  label: string;
  options: SelectMenuOption[];
  isRequired?: boolean;
  infoText18nKey?: string | undefined;
  initialValue?: string;
  displayValue: string;
  setValue: (itemId: string) => void;
}) {
  const {
    label,
    options,
    isRequired,
    infoText18nKey,
    initialValue,
    displayValue,
    setValue,
  } = props;
  const [valueInternal, setValueInternal] = useState(initialValue ?? "");
  const [open, setOpen] = useState(false);
  const handleValueChange = (itemId: string) => {
    setValueInternal(itemId);
    setValue(itemId);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="text-black flex">
          <Typography
            variant="h6"
            fontFamily="Radio Canada Big"
            color="inherit"
          >
            {label}
          </Typography>
        </div>
        {infoText18nKey && (
          <div className="pb-2">
            <Typography variant="body2" fontFamily="Radio Canada Big">
              <Trans i18nKey={infoText18nKey} />
            </Typography>
          </div>
        )}
      </div>
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative border-2 border-gray-100 border-solid rounded-md"
      >
        <div className="flex w-full">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-soft-black font-medium text-sm w-full"
          >
            <div className="w-full">
              <Typography variant="body2">{displayValue}</Typography>
            </div>
            <motion.div variants={iconVariants}>
              <FiChevronDown />
            </motion.div>
          </button>
        </div>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%", zIndex: 9999 }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-full overflow-hidden"
        >
          {options.map((option) => (
            <Option
              key={option.id}
              id={option.id}
              setOpen={setOpen}
              setValue={handleValueChange}
              title={option.title}
            />
          ))}
        </motion.ul>
      </motion.div>
      {isRequired !== undefined && (
        <div className="w-full flex justify-end">
          <div className="text-soft-black">
            <Typography
              variant="body2"
              color="inherit"
              fontFamily="Radio Canada Big"
            >
              * This field is {isRequired ? <b>required</b> : "optional"}.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

const Option = ({
  title,
  id,
  setOpen,
  setValue,
}: SelectMenuOption & {
  setOpen: (open: boolean) => void;
  setValue: (valueId: string) => void;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        setValue(id);
      }}
      style={{ zIndex: 9999 }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
    >
      <span>{title}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

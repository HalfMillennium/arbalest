import {
  SettingsOutlined,
  DashboardOutlined,
  QuestionAnswerOutlined,
} from "@mui/icons-material";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type OptionProps = {
  text: string;
  Icon: React.ComponentType;
  setOpen: (value: boolean) => void;
  navigate: ReturnType<typeof useNavigate>;
  path: string;
};

export interface DropdownMenuOptions {
  label: string;
  path: string;
  Icon: React.ComponentType;
}

export function StaggeredDropdownMenu(props: {
  options: DropdownMenuOptions[];
}) {
  const { options } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-dark-lavender hover:bg-dark-lavender transition-colors font-medium text-sm"
        >
          {t("header.navBar.account")}
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-36 overflow-hidden"
          onMouseLeave={() => setOpen(false)}
        >
          {options.map((option) => (
            <Option
              setOpen={setOpen}
              Icon={option.Icon}
              text={option.label}
              path={option.path}
              navigate={navigate}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

const Option = ({ text, Icon, setOpen, navigate, path }: OptionProps) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        navigate(path);
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-dark-lavender transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
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

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

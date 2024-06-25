import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DottedButton = ({
  text,
  route,
  onClick,
}: {
  text: string;
  route: string;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onClick ?? (() => navigate(route))}
      className="rounded-md border-2 border-white/50 px-3 font-semibold text-white/50 transition-all duration-300 hover:bg-white hover:text-dark-lavender hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
    >
      <Typography variant="button" fontFamily={"Helvetica Neue"}>
        {text}
      </Typography>
    </button>
  );
};

export default DottedButton;

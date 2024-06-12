// Source: https://www.hover.dev/components/buttons

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NeuButton = ({
  buttonText,
  route,
}: {
  buttonText: string;
  route: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(route)}
      className="px-6 py-2 font-medium bg-white/50 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      <Typography variant="button" fontFamily="Helvetica Neue">
        {buttonText}
      </Typography>
    </button>
  );
};

export default NeuButton;

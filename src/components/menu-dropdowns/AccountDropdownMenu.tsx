import React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Settings, Campaign } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CUSTOM_COLORS } from "../../assets/colors";
import { Fade } from "@mui/material";

export default function AccountDropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ textTransform: "capitalize" }}
        onClick={handleMenu}
      >
        <Typography
          fontFamily="Radio Canada Big"
          fontWeight={300}
          style={{ flexGrow: 1, color: CUSTOM_COLORS.primary }}
        >
          {t("header.navBar.account")}
        </Typography>
      </Button>

      <Menu
        id="menu-appbar"
        className="rounded-none animate-fade-in"
        anchorEl={anchorEl}
        keepMounted
        TransitionComponent={Fade}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: "#212121",
            color: "white",
            borderRadius: "2px",
          },
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={openSettings} className="">
          <div className="flex flex-row align-middle items-center">
            {" "}
            <div className="mr-1">
              <Settings />
            </div>
            <div>
              <Typography fontFamily={"Radio Canada Big"} fontWeight={500}>
                Settings
              </Typography>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={openCampaigns}>
          <div className="mr-1">
            <Campaign />
          </div>
          <div>
            <Typography fontFamily={"Radio Canada Big"} fontWeight={500}>
              Campaigns
            </Typography>
          </div>
        </MenuItem>
      </Menu>
    </>
  );

  function openSettings() {
    handleClose();
    navigate("/settings");
  }

  function openCampaigns() {
    handleClose();
    navigate("/user/person/dashboard");
  }
}

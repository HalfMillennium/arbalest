import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DashboardOutlined,
  TuneOutlined,
  ContactSupportOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import arbalestLogo from "../assets/arbalest_logo_two_large.png";
import { CUSTOM_COLORS } from "../assets/colors";
import AccountDropdownMenu from "./menu-dropdowns/AccountDropdownMenu";
import {
  DropdownMenuOptions,
  StaggeredDropdownMenu,
} from "./menu-dropdowns/StaggeredDropdownMenu";

export function Header() {
  const [isSignedIn, setSignedIn] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const i18n_prefix = "header.navBar";
  const generalNavOptions = [
    { path: "/whatisit", id: "about" },
    { path: "/features", id: "features" },
    { path: "/pricing", id: "pricing" },
    { path: "/docs", id: "docs" },
  ];
  const generalNavButtons = generalNavOptions.map((navItem) => {
    return (
      <div>
        <Button
          sx={{ textTransform: "capitalize", fontWeight: "medium" }}
          href={navItem.path}
        >
          <div className="text-dark-lavender">
            <Typography fontFamily="Radio Canada Big" color="inherit">
              {t(`${i18n_prefix}.${navItem.id}`)}
            </Typography>
          </div>
        </Button>
      </div>
    );
  });

  const accountNavOptions: DropdownMenuOptions[] = [
    {
      label: "Dashboard",
      path: "/user/person/dashboard",
      Icon: DashboardOutlined,
    },
    { label: "Settings", path: "/user/person/settings", Icon: TuneOutlined },
    { label: "Support", path: "/support", Icon: ContactSupportOutlined },
  ];

  /** Account nav options are net initialized at the same time as general nav options due to a bug with  */
  return (
    <div className="flex justify-center items-center z-999 w-screen">
      <div className="flex w-1/5 mr-10 justify-end">
        <Box
          component="img"
          alt="Arbalest logo"
          sx={{ width: "10rem" }}
          src={arbalestLogo}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-auto w-4/5 space-x-6 w-fit justify- ml-10">
        {generalNavButtons}
      </div>
      <div className="flex flex-auto w-1/3 justify-center w-fit">
        <div className="flex flex-row m-5 pr-20 text-dark-lavender">
          {isSignedIn && (
            <div className="mr-2">
              <StaggeredDropdownMenu options={accountNavOptions} />
            </div>
          )}
          {!isSignedIn && (
            <div className="mr-2">
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                }}
                color="inherit"
              >
                <Typography
                  fontFamily="Radio Canada Big"
                  fontWeight={300}
                  style={{
                    flexGrow: 1,
                  }}
                >
                  Sign In
                </Typography>
              </Button>
            </div>
          )}
          <div className="md:text-base">
            <Button
              variant={isSignedIn ? "outlined" : "contained"}
              sx={{
                textTransform: "capitalize",
                borderColor: CUSTOM_COLORS.primary,
                backgroundColor: isSignedIn ? "" : CUSTOM_COLORS.primary,
                color: isSignedIn ? CUSTOM_COLORS.primary : "white",
                ":hover": {
                  backgroundColor: isSignedIn ? CUSTOM_COLORS.primary : "white",
                  color: isSignedIn ? "white" : CUSTOM_COLORS.primary,
                },
              }}
              onClick={() => {
                setSignedIn(!isSignedIn);
                if (!isSignedIn) {
                  navigate("/register");
                }
              }}
            >
              <div>
                <Typography fontFamily="Radio Canada Big" fontWeight={300}>
                  {isSignedIn
                    ? t("header.navBar.signOut")
                    : t("header.navBar.register")}
                </Typography>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

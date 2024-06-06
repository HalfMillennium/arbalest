import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccountDropdownMenu from "./account-dropdown-menu/AccountDropdownMenu";
import { useNavigate } from "react-router-dom";
import arbalestLogo from "../assets/arbalest_logo_two_large.png";

export function Header() {
  const [isSignedIn, setSignedIn] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const i18n_prefix = "header.navBar";
  const navOptions = [
    { path: "/whatisit", id: "about" },
    { path: "/features", id: "features" },
    { path: "/pricing", id: "pricing" },
    { path: "/docs", id: "docs" },
  ];
  const navButtons = navOptions.map((navItem) => {
    return (
      <div>
        <Button
          sx={{ textTransform: "capitalize", fontWeight: "medium" }}
          href={navItem.path}
        >
          <Typography fontFamily="Radio Canada Big">
            {t(`${i18n_prefix}.${navItem.id}`)}
          </Typography>
        </Button>
      </div>
    );
  });

  return (
    <div className="w-screen">
      <div className="flex flex-row justify-center items-center z-999 bg-f9">
        <div className="flex-auto w-72 mr-10">
          <Box
            component="img"
            alt="The house from the offer."
            src={arbalestLogo}
          />
        </div>
        <div className="flex flex-auto w-4/5 space-x-6">{navButtons}</div>
        <div className="flex flex-auto w-1/3 justify-center">
          <div className="flex flex-row m-5 pr-20">
            {isSignedIn && (
              <div className="mr-2">
                <AccountDropdownMenu />
              </div>
            )}
            {!isSignedIn && (
              <div className="mr-2">
                <Button variant="text" sx={{ textTransform: "capitalize" }}>
                  <Typography
                    fontFamily="Radio Canada Big"
                    fontWeight={300}
                    style={{ flexGrow: 1 }}
                  >
                    Sign In
                  </Typography>
                </Button>
              </div>
            )}
            <div className="md:text-base">
              <Button
                variant={isSignedIn ? "outlined" : "contained"}
                sx={{ textTransform: "capitalize" }}
                onClick={() => {
                  setSignedIn(!isSignedIn);
                  if (!isSignedIn) {
                    navigate("/register");
                  }
                }}
              >
                <Typography
                  fontFamily="Radio Canada Big"
                  fontWeight={300}
                  className="text-xs"
                >
                  {isSignedIn
                    ? t("header.navBar.signOut")
                    : t("header.navBar.register")}
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

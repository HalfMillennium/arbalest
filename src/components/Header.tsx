import { Button, Typography } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import arbalestLogo from "../assets/arbalest_logo_one_small.png";
import { Avatar } from "@mui/material";

export function Header() {
  const [isSignedIn, setSignedIn] = useState(true);
  const { t } = useTranslation();
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
      <div className="flex flex-row justify-center items-center z-999 bg-slate-100">
        <div className="flex-auto w-1/5">
          <h1 className="text-3xl font-semibold flex w-1/5">
            <a href="/">Arbalest</a>
          </h1>
        </div>
        <div className="flex flex-auto w-4/5 space-x-6">{navButtons}</div>
        <div className="flex flex-auto w-1/3 justify-center">
          <div className="flex flex-row m-5 pr-20">
            <div className="mr-2" hidden={!isSignedIn}>
              <Button variant="text" sx={{ textTransform: "capitalize" }}>
                <Typography fontFamily="Radio Canada Big" fontWeight={300}>
                  {t("header.navBar.account")}
                </Typography>
              </Button>
            </div>
            <div className="md:text-base">
              <Button
                variant={isSignedIn ? "outlined" : "contained"}
                sx={{ textTransform: "capitalize" }}
                onClick={() => setSignedIn(!isSignedIn)}
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

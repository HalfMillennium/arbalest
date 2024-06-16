import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import { AddCircleOutline } from "@mui/icons-material";

export function NoPropertiesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div>
        <Typography variant="button" fontFamily="Helvetica Neue">
          No Properties Available
        </Typography>
      </div>
      <div className="flex flex-col w-full h-36rem bg-gray-300 bg-gradient-to-br from-gray-300/30 via-gray-200/30 to-dusk-violet/10 justify-center items-center text-center rounded-md">
        <div className="text-soft-black">
          <Typography variant="h4" fontFamily="Radio Canada Big">
            {t("properties.noPropertiesMenu.title")}
          </Typography>
        </div>
        <div className="text-soft-black/60 mb-2">
          <Typography variant="h6" fontFamily="Radio Canada Big">
            {t("properties.noPropertiesMenu.subtitle")}
          </Typography>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/user/person/properties/create");
            }}
          >
            <div className="text-soft-black flex border-2 border-soft-black rounded-md p-2 justify-center items-center text-center hover:bg-white">
              <div className="mr-1">
                <AddCircleOutline />
              </div>
              <Typography variant="button" fontFamily="Radio Canada Big">
                Create Arbalest Property
              </Typography>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

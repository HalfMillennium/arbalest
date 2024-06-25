import {
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AddCircleOutline,
  AddCircle,
  Storefront,
  Business,
  CalendarMonth,
} from "@mui/icons-material";
import { EXAMPLE_PROPERTIES, Property } from "./utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentProperty } from "../../store/dashboard/properties/propertiesSlice";

const MAX_PROPERTY_COUNT = 16;

export function NoPropertySelectedPage() {
  const [userProperties, setUserProperties] = useState(EXAMPLE_PROPERTIES);
  const userHasAvailableProperties = userProperties.length > 1;
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div>
        <Typography variant="button" fontFamily="Helvetica Neue">
          {userHasAvailableProperties
            ? t("properties.messages.selectAProperty")
            : t("properties.messages.noPropertiesAvailable")}
        </Typography>
      </div>
      {!userHasAvailableProperties && (
        <div className="flex flex-col w-full h-36rem bg-gray-300 bg-gradient-to-br from-gray-300/30 via-gray-200/30 to-dusk-violet/10 justify-center items-center text-center rounded-md">
          <div className="text-soft-black">
            <Typography variant="h4" fontFamily="Radio Canada Big">
              {t("properties.messages.noPropertiesTitle")}
            </Typography>
          </div>
          <div className="text-soft-black/60 mb-2">
            <Typography variant="h6" fontFamily="Radio Canada Big">
              {t("properties.messages.noPropertiesSubtitle")}
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
                  {t("properties.messages.createArbalestProperty")}
                </Typography>
              </div>
            </Button>
          </div>
        </div>
      )}
      {userHasAvailableProperties && (
        <div className="h-full">
          <PropertiesGrid />
        </div>
      )}
    </div>
  );

  function PropertiesGrid() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    return (
      <Grid
        container
        className="h-full"
        spacing={isLargeScreen ? undefined : -48}
      >
        {userProperties.map((propertyItem, index) => (
          <Grid key={index} item xs={2} sm={3} className="flex justify-start">
            <PropertyItem property={propertyItem} />
          </Grid>
        ))}
        {Array(MAX_PROPERTY_COUNT - userProperties.length)
          .fill(null)
          .map((_, index) => (
            <Grid key={index} item xs={2} sm={3} className="flex justify-start">
              <CreateNewItem />
            </Grid>
          ))}
      </Grid>
    );
  }

  /**
   *
   * Item representing an empty Property slot
   */
  function CreateNewItem() {
    return (
      <button
        style={{ height: "7rem" }}
        className="flex flex-col my-5 rounded-2xl border-2 border-dashed border-gray-500 bg-gradient-to-tr from-slate-500 to-dusk-violet/75 px-6 py-3 transition-all duration-300 hover:bg-white hover:animate-pulse"
        onClick={() => {
          navigate("/user/person/properties/create");
        }}
      >
        <div className="flex lg:w-16rem justify-center items-center h-full">
          <div className="text-white/80">
            <AddCircle />
          </div>
        </div>
      </button>
    );
  }

  /**
   *
   * Item representing one of the current user's properties
   */
  function PropertyItem({ property }: { property: Property }) {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));
    const dispatch = useDispatch();

    return (
      <button
        style={{ height: "7rem" }}
        className="flex flex-col my-5 rounded-2xl border-2 border-dashed border-black bg-white/50 hover:bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        onClick={() => dispatch(setCurrentProperty(property))}
      >
        <div className="flex lg:w-16rem lg:mb-6 justify-between text-left items-center">
          <div className="text-soft-black">
            <Typography
              variant={isLargeScreen ? "body2" : "h6"}
              fontFamily="Helvetica Neue"
              fontWeight="bold"
            >
              {property.name}
            </Typography>
          </div>
          <div>
            {(property.size === "large" || property.size === "medium") && (
              <Business />
            )}
            {property.size === "small" && <Storefront />}
          </div>
        </div>
        <div className="flex flex-col text-soft-black justify-end w-full pr-3 lg:pr-0 pb-2 items-end">
          <Typography
            variant={isLargeScreen ? "body2" : "body1"}
            fontFamily="Helvetica Neue"
          >
            {getTimeElapsed(property.createdAt)}
          </Typography>
          <div className="text-black/50">
            <Typography variant="caption" fontFamily="Helvetica Neue">
              duration
            </Typography>
          </div>
        </div>
      </button>
    );
  }

  function getTimeElapsed(createdAt: Date): string {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - createdAt.getTime());

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);

    const remainingDays = days % 30;

    return `${months} month${months !== 1 ? "s" : ""}, ${remainingDays} day${
      remainingDays !== 1 ? "s" : ""
    }`;
  }
}

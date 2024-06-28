import { List, ListItem, Typography } from "@mui/material";
import { DashboardActivityContent } from "../DashboardActivityContent";
import { OpenInNew } from "@mui/icons-material";
import "./DashboardHome.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useEffect } from "react";
import {
  DashboardActivity,
  setCurrentActivity,
} from "../../../../store/dashboard/dashboardSlice";
import { motion } from "framer-motion";
import DottedButton from "../../../../components/shared/DottedButton";
import { useTranslation } from "react-i18next";
import { setCurrentProperty } from "../../../../store/dashboard/properties/propertiesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ResourceTypesRecord } from "../../../../store/dashboard/dashboardSlice";

function setActivityFromParams(
  activity: string | undefined,
  dispatch: ReturnType<typeof useDispatch>
) {
  switch (activity) {
    case "campaigns":
      dispatch(setCurrentActivity(DashboardActivity.CAMPAIGNS));
      break;
    case "assistants":
      dispatch(setCurrentActivity(DashboardActivity.ASSISTANTS));
      break;
    case "analytics":
      dispatch(setCurrentActivity(DashboardActivity.ANALYTICS));
      break;
    case "entries":
      dispatch(setCurrentActivity(DashboardActivity.ENTRIES));
      break;
    default:
  }
}

export function DashboardHome() {
  // 'campaigns', 'analytics', 'assistants'
  const currentActivity = useSelector(
    (state: RootState) => state.dashboard.currentActivity
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProperty = useSelector(
    (state: RootState) => state.properties.selectedProperty
  );
  const { t } = useTranslation();
  // Use useParams to fetch the optional parameter
  const { activity } = useParams<{ activity?: string }>();
  // set store based on URL params
  setActivityFromParams(activity, dispatch);
  useEffect(() => {
    navigate(`/user/person/dashboard/${ResourceTypesRecord[currentActivity]}`, {
      replace: true,
    });
  }, [currentActivity]);
  return (
    <div className="items-center h-screen">
      <div className="m-4 h-fit top-0 flex">
        <Drawer />
        <div className="w-4/5 py-5 pr-5 pl-2 ml-10 p-90">
          <DashboardActivityContent userPropertySelected={!!selectedProperty} />
        </div>
      </div>
    </div>
  );
  function Drawer() {
    return (
      <div className="w-1/5 h-fit top-0 drawer-bg rounded-md sticky">
        {selectedProperty && (
          <>
            <div className="flex flex-col p-4">
              <div className="flex flex-row justify-between">
                <div className="md:flex">
                  <div className="flex overflow-auto h-fit top-0">
                    <Typography
                      fontFamily={"Radio Canada Big"}
                      fontWeight={500}
                      fontSize={32}
                      color={"white"}
                    >
                      {selectedProperty.name}
                    </Typography>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      console.log("Should open property website");
                    }}
                  >
                    <OpenInNew />
                  </div>
                </div>
              </div>
              <div className="flex text-base text-black/70 justify-between">
                <Typography
                  variant="button"
                  fontFamily={"Helvetica Neue"}
                  color="inherit"
                >
                  Property
                </Typography>
                <div className="flex w-16rem justify-end">
                  <DottedButton
                    text="Select New Property"
                    route="/properties"
                    onClick={() => dispatch(setCurrentProperty(undefined))}
                  />
                </div>
              </div>
            </div>
            <DrawerNavList />
          </>
        )}
        {!selectedProperty && <NoPropertiesDrawerContent />}
      </div>
    );
  }

  function NoPropertiesDrawerContent() {
    return (
      <div className="flex w-full h-36rem md:h-48rem justify-center items-center p-3">
        <div className="text-white/70 w-fit flex text-center p-2">
          <Typography
            fontFamily="Radio Canada Big"
            variant="h6"
            color="inherit"
          >
            {t("properties.createToUnlockDash")}
          </Typography>
        </div>
      </div>
    );
  }

  function DrawerNavList() {
    return (
      <List>
        <ListItem>
          <DrawerCard
            activity={DashboardActivity.CAMPAIGNS}
            body="Create, edit and view (past or present) campaigns for the selected
          property."
          />
        </ListItem>
        <ListItem>
          <DrawerCard
            activity={DashboardActivity.ASSISTANTS}
            body="Manage your virtual email director, curator and writer."
          />
        </ListItem>
        <ListItem>
          <DrawerCard
            activity={DashboardActivity.ANALYTICS}
            body="Track your past & present campaigns. Download data as a CSV file."
          />
        </ListItem>
        <ListItem>
          <DrawerCard
            activity={DashboardActivity.ENTRIES}
            body="Manage recent email entries dispatched for a selected campaign."
          />
        </ListItem>
      </List>
    );
  }

  function DrawerCard(props: { body: string; activity: DashboardActivity }) {
    const { body, activity } = props;
    return (
      <motion.div
        className="hover:animate-pulse bg-white/75 rounded-md text-left p-4 cursor-pointer w-full transition-all duration-300 hover:bg-white hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        style={
          currentActivity === activity
            ? { opacity: 0.2, pointerEvents: "none" }
            : { opacity: 0.7 }
        }
        onClick={() =>
          navigate(`/user/person/dashboard/${ResourceTypesRecord[activity]}`)
        }
      >
        <div className="mb-4">
          <Typography fontFamily="Radio Canada Big" fontSize={18}>
            {activity}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </div>
      </motion.div>
    );
  }
}

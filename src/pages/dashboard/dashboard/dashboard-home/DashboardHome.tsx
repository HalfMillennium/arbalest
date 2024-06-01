import React, { useState } from "react";
import { Card, List, ListItem, Typography } from "@mui/material";
import { DashboardActivityContent } from "../DashboardActivityContent";
import { OpenInNew } from "@mui/icons-material";
import "./DashboardHome.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  DashboardActivity,
  setCurrentActivity,
} from "../../../../store/dashboard/dashboardSlice";

export function DashboardHome() {
  // 'campaigns', 'analytics', 'assistants'
  const currentActivity = useSelector(
    (state: RootState) => state.dashboard.currentActivity
  );
  const dispatch = useDispatch();

  return (
    <div className="items-center">
      <div className="m-4 h-96rem flex flex-row">
        <div className="w-1/5 drawer-bg rounded-md">
          <div className="flex flex-col p-4">
            <div className="flex flex-row justify-start">
              <div>
                <Typography
                  fontFamily={"Radio Canada Big"}
                  fontWeight={500}
                  fontSize={32}
                  color={"white"}
                >
                  {/** TODO: Create max character count of about this length */}
                  How2Builders
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
            <span className="text-base">
              <Typography fontFamily={"Source Sans 3"} color="#212121">
                PROPERTY
              </Typography>
            </span>
          </div>
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
                body="Track your past & present campaigns. Dowload data as a CSV file."
              />
            </ListItem>
            <ListItem>
              <DrawerCard
                activity={DashboardActivity.ENTRIES}
                body="Manage recent email entries dispatched for a selected campaign."
              />
            </ListItem>
          </List>
        </div>
        <div className="w-4/5 py-5 pr-5 pl-2 ml-10 p-90">
          <DashboardActivityContent />
        </div>
      </div>
    </div>
  );
  function DrawerCard(props: { body: string; activity: DashboardActivity }) {
    const { body, activity } = props;
    return (
      <Card
        className="hover:animate-pulse bg-white bg-opacity-50 rounded-md text-left p-4 cursor-pointer w-full"
        style={
          currentActivity === activity
            ? { opacity: 0.2, pointerEvents: "none" }
            : { opacity: 0.7 }
        }
        onClick={() => dispatch(setCurrentActivity(activity))}
      >
        <div className="mb-4">
          <Typography fontFamily="Radio Canada Big" fontSize={18}>
            {activity}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </div>
      </Card>
    );
  }
}

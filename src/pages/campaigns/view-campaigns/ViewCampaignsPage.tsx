import React, { useState } from "react";
import { Card, List, ListItem, Typography } from "@mui/material";
import { DashboardContent } from "../components/DashboardContent";
import { OpenInNew } from "@mui/icons-material";
import "./ViewCampaignsPage.css";

export function ViewCampaignsPage() {
  // 'campaigns', 'analytics', 'companions'
  const [currentTab, setCurrentTab] = useState("campaigns");
  return (
    <div className="items-center">
      <div className="m-4 h-screen flex flex-row">
        <div className="w-1/5 drawer-bg rounded-lg">
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
                title="Campaigns"
                body="Create, edit and view (past or present) campaigns for the selected
          property."
              />
            </ListItem>
            <ListItem>
              <DrawerCard
                title="Analytics"
                body="Track your past & present campaigns. Dowload data as a CSV file."
              />
            </ListItem>
            <ListItem>
              <DrawerCard
                title="Companions"
                body="Manage your virtual email director, curator and writer."
              />
            </ListItem>
          </List>
        </div>
        <div className="w-4/5 py-5 pr-5 pl-2 ml-10">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
  function DrawerCard(props: { title: string; body: string }) {
    const { title, body } = props;
    return (
      <Card
        className="hover:animate-pulse bg-white bg-opacity-50 rounded-md text-left p-4 cursor-pointer"
        style={
          currentTab === title
            ? { opacity: 0.2, pointerEvents: "none" }
            : { opacity: 0.7 }
        }
        onClick={() => setCurrentTab(title)}
      >
        <div className="mb-4">
          <Typography fontFamily="Radio Canada Big" fontSize={18}>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </div>
      </Card>
    );
  }
}

import React, { useState } from "react";
import { Card, List, ListItem, Typography } from "@mui/material";
import { DashboardContent } from "../components/DashboardContent";
import "./ViewCampaignsPage.css";

export function ViewCampaignsPage() {
  // 'campaigns', 'analytics', 'companions'
  const [currentTab, setCurrentTab] = useState("campaigns");
  return (
    <div className="items-center">
      <div className="m-4 h-screen flex flex-row">
        <div className="w-1/5 drawer-bg rounded-lg">
          <List>
            <ListItem>
              <DrawerCard
                id="campaigns"
                title="Campaigns"
                body="Create, edit and view (past or present) campaigns for the selected
          property."
              />
            </ListItem>
            <ListItem>
              <DrawerCard
                id="analytics"
                title="Analytics"
                body="Track your past & present campaigns. Dowload data as a CSV file."
              />
            </ListItem>
            <ListItem>
              <DrawerCard
                id="companions"
                title="Companions"
                body="Track your past & present campaigns. Dowload data as a CSV file."
              />
            </ListItem>
          </List>
        </div>
        <div className="w-4/5 p-10 ml-10">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
  function DrawerCard(props: { title: string; body: string; id: string }) {
    const { title, body, id } = props;
    return (
      <Card
        className="cursor-pointer hover:animate-pulse bg-white bg-opacity-50 rounded-md text-left p-4"
        style={
          currentTab === id
            ? { pointerEvents: "none", opacity: "0.4", color: "white" }
            : {}
        }
        onClick={() => setCurrentTab(id)}
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

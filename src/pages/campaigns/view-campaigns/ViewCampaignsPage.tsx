import React from "react";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { DashboardContent } from "../components/DashboardContent";

export function ViewCampaignsPage() {
  return (
    <div className="h-screen">
      <Toolbar>
        <Typography variant="h6" noWrap className="text-white">
          Email Marketing Dashboard
        </Typography>
      </Toolbar>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" className="flex-grow overflow-auto">
          <Toolbar />
          <Container maxWidth="lg" className="mt-4 mb-4">
            <DashboardContent />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

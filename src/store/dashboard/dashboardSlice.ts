import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum DashboardActivity {
  CAMPAIGNS = "Campaigns",
  ANALYTICS = "Analytics",
  ASSISTANTS = "Assistants",
}

export interface DashboardState {
  currentActivity: DashboardActivity;
  selectedCampaignId: string | undefined;
}

const initialState: DashboardState = {
  currentActivity: DashboardActivity.CAMPAIGNS,
  selectedCampaignId: undefined,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCurrentActivity: (state, action: PayloadAction<DashboardActivity>) => {
      state.currentActivity = action.payload;
    },
    setSelectedCampaignId: (state, action: PayloadAction<string>) => {
      state.selectedCampaignId = action.payload;
    },
  },
});

export const { setCurrentActivity } = dashboardSlice.actions;

export default dashboardSlice.reducer;

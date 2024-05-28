import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Campaign, CampaignConfig, CampaignEntry } from "./types";

export interface SelectedEntryDetails {
  entryId: string;
  currentEntryBody: string;
  currentEntrySubject: string;
}

export interface CampaignsState {
  ownedCampaigns: Campaign[] | undefined;
  selectedCampaignId: string | undefined;
  selectedEntryDetails: SelectedEntryDetails | undefined;
}

export const initialState: CampaignsState = {
  ownedCampaigns: undefined,
  selectedCampaignId: undefined,
  selectedEntryDetails: undefined,
};

export const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setSelectedEntryDetails: (
      state,
      action: PayloadAction<SelectedEntryDetails>
    ) => {
      state.selectedEntryDetails = action.payload;
    },
    setSelectedCampaignId: (state, action: PayloadAction<string>) => {
      state.selectedCampaignId = action.payload;
    },
  },
});

export default campaignsSlice.reducer;

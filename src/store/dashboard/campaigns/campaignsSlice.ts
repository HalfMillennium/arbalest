import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CampaignConfig,
  CampaignEntry,
  CampaignInfo,
} from "../../../types/campaigns";

export interface SelectedEntryDetails {
  entryId: string;
  currentEntryBody: string;
  currentEntrySubject: string;
}

export interface CampaignsState {
  ownedCampaigns: CampaignInfo[] | undefined;
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

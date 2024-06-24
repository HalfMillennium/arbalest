import { createSlice } from "@reduxjs/toolkit";
import { Property } from "../../../pages/properties/utils";

interface PropertiesState {
  /** The current user's available linked properties */
  availableProperites: Property[] | undefined;
  selectedProperty: Property | undefined;
}

const initialState: PropertiesState = {
  availableProperites: undefined,
  selectedProperty: undefined,
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setCurrentProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
    setAvailableProperties: (state, action) => {
      state.availableProperites = action.payload;
    },
  },
});

export const { setCurrentProperty, setAvailableProperties } =
  propertiesSlice.actions;
export default propertiesSlice.reducer;

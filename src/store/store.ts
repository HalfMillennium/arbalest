import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard/dashboardSlice";
import propertiesReducer from "./dashboard/properties/propertiesSlice";

export const store = configureStore({
  reducer: { dashboard: dashboardReducer, properties: propertiesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

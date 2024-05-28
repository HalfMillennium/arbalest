import { Campaign } from "./types";

export const EXAMPLE_CAMPAIGN: Campaign = {
  name: "My First Campaign",
  id: "192833395485",
  propertyId: "48498498454",
  duration: 14,
  startDate: new Date(),
  config: {
    tone: "Funny",
    length: 1400,
  },
};

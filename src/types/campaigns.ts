export interface CampaignSettings {
  frequency: number /* number of emails per month? */;
  maxWordCount?: string;
}
export interface CampaignInfo {
  name: string;
  id: string;
  demographicId?: string;
  propertyId: string;
  dateStarted: string;
  engagements: number;
  settings?: CampaignSettings;
  mailingListId: string;
}

export const CAMPAIGN_FIELDS = [
  "Name",
  "Demographic",
  "Property",
  "Date Started",
  "Engagements",
  "Mailing List",
];

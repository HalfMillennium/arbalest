export interface CampaignSettings {
  frequency: number /* number of emails per month? */;
  maxWordCount?: string;
}
export interface CampaignInfo {
  name: string;
  id: string;
  demoId?: string;
  propertyId: string;
  dateStarted: Date;
  dateEnded?: Date;
  settings?: CampaignSettings;
}

/**
 * Fields presented to the user on view campaigns table, more available in Campaign details
 */
export enum CampaignEntryFields {
  ID = "id",
  NAME = "name",
  PROPERTY_ID = "propertyId",
  CREATED_DATE = "createdDate",
  DISPATCH_DATE = "dispatchDate",
  DEMO_ID = "demoId",
  SUBJECT = "subject",
}

export const CampaignEntryFieldsRecord: Record<CampaignEntryFields, string> = {
  [CampaignEntryFields.ID]: "ID",
  [CampaignEntryFields.NAME]: "Name",
  [CampaignEntryFields.PROPERTY_ID]: "Property ID",
  [CampaignEntryFields.DISPATCH_DATE]: "Dispatch Date",
  [CampaignEntryFields.CREATED_DATE]: "Created Date",
  [CampaignEntryFields.DEMO_ID]: "Demographic ID",
  [CampaignEntryFields.SUBJECT]: "Subject",
};

export interface Campaign {
  name: string;
  id: string;
  propertyId: string;
  /** Duration in Days */
  duration: number;
  startDate: Date;
  endDate?: Date;
  config?: CampaignConfig;
}

export interface CampaignConfig {
  tone: string;
  /* In number of characters */
  length: number;
  /** Many more fields to come */
}

export interface CampaignEntryStats {
  /** stats */
}

export interface CampaignEntry {
  [key: string]: string | CampaignEntryStats | undefined | Date;
  id?: string;
  dispatchDate: Date;
  /** The dispatcher may have the entry created prior to its dispatch date? */
  createdDate?: Date;
  subject?: string;
  propertyId: string;
  markdownContent?: string;
  /** Demographic ID */
  demoId: string;
  /** Any practical benefit to keeping this on the frontend? Not sure yet */
  htmlContent?: string;
  stats?: CampaignEntryStats;
}

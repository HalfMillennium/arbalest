export interface CampaignSettings {
  frequency: number /* number of emails per month? */;
  maxWordCount?: string;
}

/**
 * 1-1 relationship with set of Campaign entries.
 * May be finite or indefinite.
 */
export interface CampaignInfo {
  name: string;
  id: string;
  mailingListId?: string;
  propertyId: string;
  startDate: Date;
  endDate?: Date;
  /** Duration in days */
  duration?: number;
  settings?: CampaignSettings;
  entries?: CampaignEntry[];
  config?: CampaignConfig;
}

export interface CampaignConfig {
  tone: string;
  /* In number of characters */
  textLength: number;
  /** Many more fields to come */
}

/**
 * Many-1 relationship with Campaign object.
 * A created (and potentially dispatched) email associated with user-specified demographic (mailing list)
 */
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
  mailingListId: string;
  /** Any practical benefit to keeping this on the frontend? Not sure yet */
  htmlContent?: string;
  stats?: CampaignEntryStats;
}

/**
 * Fields presented to the user on entry history table
 */
export enum CampaignEntryFields {
  ID = "id",
  NAME = "name",
  PROPERTY_ID = "propertyId",
  CREATED_DATE = "createdDate",
  DISPATCH_DATE = "dispatchDate",
  MAILING_LIST_ID = "mailingListId",
  SUBJECT = "subject",
}

/**
 * Fields presented to the user on Campaigns table, more available in Campaign details
 */
export enum CampaignInfoFields {
  ID = "id",
  NAME = "name",
  PROPERTY_ID = "propertyId",
  START_DATE = "startDate",
  END_DATE = "endDate",
  MAILING_LIST_ID = "mailingListId",
}

export const CampaignInfoFieldsRecord: Record<CampaignInfoFields, string> = {
  [CampaignInfoFields.ID]: "ID",
  [CampaignInfoFields.NAME]: "Name",
  [CampaignInfoFields.PROPERTY_ID]: "Property ID",
  [CampaignInfoFields.START_DATE]: "Start Date",
  [CampaignInfoFields.END_DATE]: "End Date",
  [CampaignInfoFields.MAILING_LIST_ID]: "Demographic ID",
};

export const CampaignEntryFieldsRecord: Record<CampaignEntryFields, string> = {
  [CampaignEntryFields.ID]: "ID",
  [CampaignEntryFields.SUBJECT]: "Subject",
  [CampaignEntryFields.NAME]: "Name",
  [CampaignEntryFields.PROPERTY_ID]: "Property ID",
  [CampaignEntryFields.DISPATCH_DATE]: "Dispatch Date",
  [CampaignEntryFields.CREATED_DATE]: "Created Date",
  [CampaignEntryFields.MAILING_LIST_ID]: "Mailing List ID",
};

export interface CampaignEntryStats {
  /** stats */
}

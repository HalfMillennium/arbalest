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

export interface CampaignEntry {
  dispatchDate: Date;
  /** The dispatcher may have the entry created prior to its dispatch date? */
  createdDate?: Date;
  subject?: string;
  markdownContent?: string;
  /** Any practical benefit to keeping this on the frontend? Not sure yet */
  htmlContent?: string;
}

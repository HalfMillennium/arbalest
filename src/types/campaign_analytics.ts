/** Indicates the type of data being displayed to users: e.g. traffic, engagement, etc. */
export enum ChartMetricOptionsEnum {
  OPEN_RATE = "openRate",
  CLICK_THROUGH_RATE = "clickThroughRate",
  CONVERSION_RATE = "conversionRate",
  BOUNCE_RATE = "bounceRate",
  UNSUBSCRIBE_RATE = "unsubscribeRate",
  EMAIL_SENT = "emailSent",
  EMAIL_DELIVERED = "emailDelivered",
}

export const ChartMetricOptionsRecord: Record<ChartMetricOptionsEnum, string> =
  {
    [ChartMetricOptionsEnum.OPEN_RATE]: "Open Rate",
    [ChartMetricOptionsEnum.CLICK_THROUGH_RATE]: "Click Through Rate",
    [ChartMetricOptionsEnum.CONVERSION_RATE]: "Conversion Rate",
    [ChartMetricOptionsEnum.BOUNCE_RATE]: "Bounce Rate",
    [ChartMetricOptionsEnum.UNSUBSCRIBE_RATE]: "Unsubscribe Rate",
    [ChartMetricOptionsEnum.EMAIL_SENT]: "Email Sent",
    [ChartMetricOptionsEnum.EMAIL_DELIVERED]: "Email Delivered",
  };

export enum TimeFrameOptionsEnum {
  LAST_7_DAYS = "7days",
  LAST_30_DAYS = "30days",
  LAST_90_DAYS = "90days",
  LAST_6_MONTHS = "6months",
  LAST_1_YEAR = "1year",
  ALL_TIME = "all",
}

export const TimeFrameOptionsRecord: Record<TimeFrameOptionsEnum, string> = {
  [TimeFrameOptionsEnum.LAST_7_DAYS]: "Last 7 days",
  [TimeFrameOptionsEnum.LAST_30_DAYS]: "Last 30 days",
  [TimeFrameOptionsEnum.LAST_90_DAYS]: "Last 90 days",
  [TimeFrameOptionsEnum.LAST_6_MONTHS]: "Last 6 months",
  [TimeFrameOptionsEnum.LAST_1_YEAR]: "Last 1 year",
  [TimeFrameOptionsEnum.ALL_TIME]: "All time",
};

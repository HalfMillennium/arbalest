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

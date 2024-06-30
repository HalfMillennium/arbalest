import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Button } from "@mui/material";
import { HealthAndSafety } from "@mui/icons-material";

/** Provides overview of engagement rate vs. duration of campaign, as well as campaign result if current rate is maintained for duration of campaign */
export function SimpleTableWidget({
  title18nKey,
  subtitle18nKey,
  TitleIcon,
  WidgetComponent,
  ActionButton,
}: {
  title18nKey: string;
  subtitle18nKey: string;
  TitleIcon: React.ReactNode;
  WidgetComponent?: React.ReactNode;
  ActionButton?: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="px-3 pb-3 mb-3 mr-3 mt-3 rounded-sm hover:shadow-sm">
      <div className="flex">
        <div className="flex justify-center items-center">
          <div>
            <Typography
              variant="h5"
              component="div"
              fontWeight="medium"
              fontFamily="Helvetica Neue"
            >
              {t(title18nKey)}
            </Typography>
          </div>
          <div className="flex justify-center items-center ml-1">
            {TitleIcon}
          </div>
        </div>
        <div className="pl-6 pt-3">{ActionButton}</div>
      </div>
      <div className="mb-1">
        <Typography
          variant="body2"
          color="text.secondary"
          fontFamily="Helvetica Neue"
        >
          {t(subtitle18nKey)}
        </Typography>
      </div>
      <div>{WidgetComponent}</div>
    </div>
  );
}

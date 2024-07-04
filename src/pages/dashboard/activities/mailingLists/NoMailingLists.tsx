import { Button, Typography } from "@mui/material";
import NeuButton from "../../../../components/shared/NeuButton";

export function NoMailingLists() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mx-20 mt-20">
        <Typography variant="h3" fontFamily="Helvetica Neue">
          No mailing lists yet.
        </Typography>
      </div>
      <div className="mx-20 mb-5 mt-2">
        <Typography variant="h4" fontFamily="Helvetica Neue">
          How would you like to create one?
        </Typography>
      </div>
      <div className="flex ml-20 mt-10">
        <div className="bg-gradient-to-tr from-latte to-brown-200 mr-4 rounded-sm">
          <OptionCardContent
            title="Import Contacts"
            subtitle="Link your current contacts on MailChimp."
            infoLink="https://mailchimp.com/help/view-export-contacts/"
            action={{ label: "Import Contacts", path: "/" }}
          />
        </div>
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 mr-4 rounded-sm">
          <OptionCardContent
            title="Upload CSV File"
            subtitle="Upload CSV file containing your exists."
            infoLink="https://eepurl.com/dyilKP"
            action={{ label: "Upload File", path: "/" }}
          />
        </div>
        <div className="bg-gradient-to-tr from-slate-200 to-gray-300 mr-4 rounded-sm">
          <OptionCardContent
            title="Manually Enter Contacts"
            subtitle="Copy & paste your contacts manually."
            infoLink="https://eepurl.com/dyilKP"
            infoLinkText="View formatting guide"
            action={{ label: "Enter Contacts", path: "/" }}
          />
        </div>
      </div>
    </div>
  );
}

function OptionCardContent({
  title,
  subtitle,
  infoLink,
  infoLinkText,
  action,
}: {
  title: string;
  subtitle: string;
  infoLink?: string;
  infoLinkText?: string;
  action: {
    label: string;
    path: string;
  };
}) {
  return (
    <div className="md:w-28rem xl:32rem">
      <div className="flex flex-col w-full">
        <Typography variant="h6" fontFamily="Radio Canada Big" className="p-2">
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontFamily="Radio Canada Big"
          className="px-2"
        >
          {subtitle}
        </Typography>
        <div className="mb-4">
          {infoLink && (
            <Typography variant="caption" className="px-2">
              <a href={infoLink} target="_blank">
                <u>{infoLinkText ?? "Learn more"}</u>
              </a>
            </Typography>
          )}
        </div>
        <div className="w-full flex justify-center text-dusk-violet p-2">
          <Button
            variant="outlined"
            className="w-full"
            color="inherit"
            sx={{
              ":hover": {
                backgroundColor: "#212121",
                color: "white",
                borderColor: "#212121",
              },
            }}
          >
            {action.label}
          </Button>
        </div>
      </div>
    </div>
  );
}

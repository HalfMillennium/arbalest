import { Typography, Button, Grow } from "@mui/material";
import { useState, useRef, createRef } from "react";
import {
  EXAMPLE_EMAIL_MARKDOWN,
  EXAMPLE_EMAIL_SUBJECT,
  EXAMPLE_CAMPAIGN_ENTRIES,
} from "./utils";
import EmailMarkdownEditor from "./EmailMarkdownEditor";
import { EntryEditorHeader } from "./recent-entries/EntryEditorHeader";
import { SimpleTextInput } from "../../components/shared/SimpleTextInput";
import { EntryDashboardTabs } from "./types";
import { useTranslation } from "react-i18next";

const MAX_SUBJECT_LINE_LENGTH = 75;
const MAX_DEMO_ID_LENGTH = 25;

function EditEntriesActivity(props: {
  setTab: (tab: EntryDashboardTabs) => void;
}) {
  const { t } = useTranslation();
  const subjectLineTextAreaRef = createRef<HTMLInputElement>();
  const mailingListIdTextAreaRef = createRef<HTMLInputElement>();
  const [subjectLine, setSubjectLine] = useState("");
  const [mailingListId, setMailingListId] = useState("");

  function EmailBodyEditor() {
    return (
      <div className="flex">
        <div className="mx-30 flex justify-start my-10 flex-col w-full">
          <div className="flex flex-col justify-center sm:h-24rem md:h-48rem">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between text-center items-center">
                <div className="mt-10">
                  <Typography variant="button" fontFamily="Radio Canada Big">
                    Email Body
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full">
              <EmailMarkdownEditor originalMarkdown={EXAMPLE_EMAIL_MARKDOWN} />
            </div>
            <div className="pt-2 text-black w-full flex justify-end">
              <div>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() =>
                    // TODO: Do something meaningful with the value, obviously
                    console.log(
                      `New subject line: ${subjectLineTextAreaRef.current?.value}`
                    )
                  }
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="w-full flex flex-col">
        <EntryEditorHeader entries={EXAMPLE_CAMPAIGN_ENTRIES} />
        <div className="flex w-full">
          <div className="w-1/2 pr-3">
            <SimpleTextInput
              ref={subjectLineTextAreaRef}
              showSaveChangesButton={true}
              maxLength={MAX_SUBJECT_LINE_LENGTH}
              initialValue={EXAMPLE_EMAIL_SUBJECT}
              setValue={setSubjectLine}
              label="Subject Line"
            />
          </div>
          <div className="w-1/2 pl-3">
            <SimpleTextInput
              ref={mailingListIdTextAreaRef}
              showSaveChangesButton={true}
              maxLength={MAX_DEMO_ID_LENGTH}
              initialValue={"#1293109"}
              setValue={setMailingListId}
              label="Mailing List ID"
              CustomButtonGroup={
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{
                    ":hover": {
                      backgroundColor: "#212121",
                      color: "white",
                      borderColor: "#212121",
                    },
                  }}
                >
                  {t("dashboard.campaigns.entries.modifyMailingLists")}
                </Button>
              }
            />
          </div>
        </div>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 500 }}
        >
          <div>
            <EmailBodyEditor />
          </div>
        </Grow>
      </div>
    </div>
  );
}

export default EditEntriesActivity;

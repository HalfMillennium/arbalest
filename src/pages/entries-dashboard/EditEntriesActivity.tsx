import { Typography, Button, Grid } from "@mui/material";
import { useState, useRef, createRef } from "react";
import {
  EXAMPLE_EMAIL_MARKDOWN,
  EXAMPLE_EMAIL_SUBJECT,
  EXAMPLE_CAMPAIGN_ENTRIES,
} from "./utils";
import EmailMarkdownEditor from "./EmailMarkdownEditor";
import { EntryEditorHeader } from "./recent-entries/EntryEditorHeader";
import { SimpleTextInput } from "../../components/shared/SimpleTextInput";

const MAX_SUBJECT_LINE_LENGTH = 75;
const MAX_DEMO_ID_LENGTH = 25;

export function EditEntriesActivity() {
  const subjectLineTextAreaRef = createRef<HTMLInputElement>();
  const [subjectLine, setSubjectLine] = useState("");
  const [demoId, setDemoId] = useState("");

  function EmailBodyEditor() {
    return (
      <div className="flex">
        <div className="mx-30 flex justify-start my-10 flex-col w-full">
          <div className="flex flex-col justify-center sm:h-24rem md:h-36rem h-48rem mt-4rem">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between text-center items-center">
                <div>
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
              maxLength={MAX_SUBJECT_LINE_LENGTH}
              initialValue={EXAMPLE_EMAIL_SUBJECT}
              setValue={setSubjectLine}
              label="Subject Line"
            />
          </div>
          <div className="w-1/2 pl-3">
            <SimpleTextInput
              maxLength={MAX_DEMO_ID_LENGTH}
              initialValue={"#1293109"}
              setValue={setDemoId}
              label="Demographic Id"
            />
          </div>
        </div>
        <div>
          <EmailBodyEditor />
        </div>
      </div>
    </div>
  );
}

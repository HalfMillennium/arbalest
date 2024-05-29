import { Typography, Button } from "@mui/material";
import { useState, useRef, createRef } from "react";
import {
  EXAMPLE_EMAIL_MARKDOWN,
  EXAMPLE_EMAIL_SUBJECT,
  EXAMPLE_CAMPAIGN_ENTRIES,
} from "./utils";
import EmailMarkdownEditor from "./EmailMarkdownEditor";
import { RecentEntryList } from "./recent-entries/RecentEntryList";

const MAX_SUBJECT_LINE_LENGTH = 75;

export default function EntriesDashboard() {
  const subjectLineTextAreaRef = createRef<HTMLInputElement>();

  function SubjectLineEditor() {
    const [subject, setSubject] = useState(EXAMPLE_EMAIL_SUBJECT);
    return (
      <div>
        <div className="mx-30 flex justify-start mb-10 flex-col w-3/4">
          <div>
            <RecentEntryList entries={EXAMPLE_CAMPAIGN_ENTRIES} />
          </div>
          <div className="flex justify-between text-center items-center">
            <div>
              <Typography variant="button" fontFamily="Radio Canada Big">
                Subject Line
              </Typography>
            </div>
            <div className="ml-2">
              <Typography fontFamily="Montserrat" variant="body2">
                ({subject.length}/{MAX_SUBJECT_LINE_LENGTH})
              </Typography>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              ref={subjectLineTextAreaRef}
              style={{ fontFamily: "Roboto Mono" }}
              className="w-full h-1/5 bg-slate-900 text-slate-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto shadow-md"
              value={subject}
              maxLength={MAX_SUBJECT_LINE_LENGTH}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div className="pt-2 text-black">
            <Button
              variant="outlined"
              color="inherit"
              onClick={() =>
                console.log(
                  `New subject line: ${subjectLineTextAreaRef.current?.value}`
                )
              }
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }

  function EmailBodyEditor() {
    return (
      <div className="flex">
        <div className="mx-30 flex justify-start my-10 flex-col w-full">
          <div className="flex flex-col justify-center sm:h-24rem md:h-36rem h-48rem">
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
            <div className="text-black w-full justify-center items-center p-3">
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => {
                  console.log("BUTTON PRESSED");
                }}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="w-full flex flex-col">
        <div>
          <SubjectLineEditor />
        </div>
        <div>
          <EmailBodyEditor />
        </div>
      </div>
    </div>
  );
}

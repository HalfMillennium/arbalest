import { Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import { EXAMPLE_EMAIL_TEXT, EXAMPLE_EMAIL_SUBJECT } from "./utils";
import { Tab, Tabs } from "@mui/material";
import { EntryDashboardTabs } from "./types";

const MAX_EMAIL_LENGTH = 1500;
const MAX_SUBJECT_LINE_LENGTH = 50;

export function EntriesDashboard() {
  const [emailContent, setEmailContent] = useState(EXAMPLE_EMAIL_TEXT);
  const [dashboardTab, setDashboardTab] = useState(EntryDashboardTabs.SCHEDULE);
  // Max of 50 characters
  const [subject, setSubject] = useState(EXAMPLE_EMAIL_SUBJECT);
  const textAreaRef = useRef(null);

  const handleEmailContentChange = (event: any) => {
    setEmailContent(event.target.value);
  };

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };

  function SubjectLineEditor() {
    return (
      <div className="container mx-30 flex justify-start mb-10 flex-col w-1/3">
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
          <textarea
            ref={textAreaRef}
            className="w-full h-1/5 bg-slate-900 text-slate-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto shadow-md"
            value={subject}
            maxLength={50}
            onChange={handleSubjectChange}
          />
        </div>
      </div>
    );
  }

  function EmailBodyEditor() {
    return (
      <div className="container mx-30 flex justify-start my-10 flex-col w-2/3">
        <div className="flex justify-between items-center -mt-10 mb-2">
          <div className="flex justify-between text-center items-center">
            <div>
              <Typography variant="button" fontFamily="Radio Canada Big">
                Email Body
              </Typography>
            </div>
            <div className="ml-2">
              <Typography fontFamily="Montserrat" variant="body2">
                ({emailContent.length}/{MAX_EMAIL_LENGTH})
              </Typography>
            </div>
          </div>
          <div>
            <div className="flex rounded-full bg-slate-600 text-white align-middle text-xs p-2">
              <div className="flex justify-center items-center mr-1 hover:bg-teal-500 rounded-full text-center px-2 cursor-pointer">
                <Typography variant="body1" fontWeight="bold">
                  B
                </Typography>
              </div>
              <div className="flex justify-center items-center hover:bg-teal-500 rounded-full text-center px-3 cursor-pointer">
                <Typography
                  variant="body1"
                  fontFamily="Bitter"
                  fontStyle="italic"
                >
                  I
                </Typography>
              </div>
              <div className="flex justify-center items-center hover:bg-teal-500 rounded-full text-center px-3 ml-1 cursor-pointer">
                <Typography variant="body1" fontFamily="Bitter">
                  <u>U</u>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-32rem">
          <textarea
            ref={textAreaRef}
            className="w-full h-32rem bg-slate-900 text-slate-100 rounded-md p-5 focus:outline-none focus:ring-2 focus:ring-slate-600 resize-none overflow-auto shadow-md"
            value={emailContent}
            maxLength={50}
            onChange={handleEmailContentChange}
          />
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
        <EmailBodyEditor />
      </div>
    </div>
  );
}

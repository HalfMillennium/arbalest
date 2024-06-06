import React, { Suspense, lazy } from "react";
import { Typography, Divider } from "@mui/material";
import { CampaignEntry } from "../../../types/campaigns";
import { ErrorBoundary } from "../../../components/shared/error-boundary/ErrorBoundary";
import { LoadingSpinner } from "../../../components/shared/LoadingSpinner";

export function EntryEditorHeader(props: { entries: CampaignEntry[] }) {
  const { entries } = props;
  const NextEntryDetails = lazy(() => import("./NextEntryDetails"));
  const RecentEntriesList = lazy(() => import("./RecentEntriesList"));
  return (
    <div className="w-full flex pb-3 justify-end align-bottom overflow-auto">
      <div className="w-full rounded-sm flex justify-between bg-gradient-to-tr from-dark-lavender/10 to-dark-lavender/20 items-center p-4 overflow-auto">
        <div className="h-full flex-1">
          <Suspense
            fallback={<LoadingSpinner label="Loading entry details..." />}
          >
            <ErrorBoundary>
              <NextEntryDetails entry={entries[0]} />
            </ErrorBoundary>
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense
            fallback={<LoadingSpinner label="Loading scheduled entries.." />}
          >
            <ErrorBoundary>
              <RecentEntriesList campaignEntries={entries} />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

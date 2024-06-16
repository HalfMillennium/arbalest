import {
  CampaignHealthWidget,
  WorkflowStatusWidget,
  MailingListWidget,
} from "./widgets";

export function CampaignDetails() {
  return (
    <div className="justify-center items-center">
      <div className="flex">
        <div>
          <CampaignHealthWidget />
        </div>
        <div>
          <WorkflowStatusWidget />
        </div>
        <div>
          <MailingListWidget />
        </div>
      </div>
    </div>
  );
}

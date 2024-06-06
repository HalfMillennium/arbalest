import React from "react";
import { ExplainerSection } from "./explainer-section/ExplainerSection";
import { LOREM_IPSUM_PARAGRAPH } from "./explainer-section/utils";
import { DividerWithIcon } from "../../components/Divider";
import { ScrollerExplainerSection } from "./explainer-section/ScrollerExplainerSection";

export function ExplainerPage() {
  return (
    <div className="py-16 mr-4 ">
      <div className="">
        <div className="text-center mb-10 ">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-5xl">
            Meet Your New Marketing Partner.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stop juggling marketing and email copywriting. Arbalest can handle
            it.
          </p>
        </div>
        <div className="w-screen">
          <ExplainerSection
            title="Feature Explanation"
            text={LOREM_IPSUM_PARAGRAPH}
            image="https://assets-global.website-files.com/5f59c28a9ccb43847f62c5fe/6410d12931f5ba31d5480ae5_gmail-integration.png"
            orientation="IMAGE_RIGHT"
          />
          <DividerWithIcon selectedIcon="build" />
          <ScrollerExplainerSection
            title="Feature Explanation"
            text={LOREM_IPSUM_PARAGRAPH}
            image="https://assets-global.website-files.com/5f59c28a9ccb43847f62c5fe/6410d12931f5ba31d5480ae5_gmail-integration.png"
            orientation="IMAGE_LEFT"
          />
          <DividerWithIcon selectedIcon="feed" />
          <ScrollerExplainerSection
            title="Feature Explanation"
            text={LOREM_IPSUM_PARAGRAPH}
            image="https://assets-global.website-files.com/5f59c28a9ccb43847f62c5fe/6410d12931f5ba31d5480ae5_gmail-integration.png"
            orientation="IMAGE_RIGHT"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Button } from "@mui/material";

export default function EmailMarkdownEditor(props: {
  originalMarkdown: string;
}) {
  const { originalMarkdown } = props;
  const [markdown, setMarkdown] = useState(originalMarkdown);

  return (
    <div className="flex flex-col">
      <div>
        <MarkdownEditor
          value={markdown}
          height="48rem"
          onChange={setMarkdown}
          visible={true}
        />
      </div>
    </div>
  );
}

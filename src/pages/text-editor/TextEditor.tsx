import React, { useState, useRef } from "react";

export function TextEditor() {
  const [text, setText] = useState(`This is some placeholder text you can edit. 
  Feel free to write anything you like here. You can add new lines, paragraphs, 
  and experiment with different formatting options.`);
  const textAreaRef = useRef(null);

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <textarea
        ref={textAreaRef}
        className="w-full h-screen bg-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-auto"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

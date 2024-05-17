import React, { useState } from "react";
import "./App.css";
import { AppBody } from "./pages/app-body/AppBody";
import { Button, Typography } from "@mui/material";

function App() {
  const [isSignedIn, setSignedIn] = useState(true);
  return (
    <div className="h-screen justify-center">
      <div className="justify-center">
        <AppBody />
      </div>
    </div>
  );
}

export default App;

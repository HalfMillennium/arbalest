import React, { useState } from "react";
import "./App.css";
import { AppBody } from "./pages/app-body/AppBody";
import { Button, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  const [isSignedIn, setSignedIn] = useState(true);
  return (
    <div className="justify-center">
      <div className="justify-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppBody />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default App;

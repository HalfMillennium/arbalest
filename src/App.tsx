import React, { useState } from "react";
import "./App.css";
import { AppBody } from "./pages/app-body/AppBody";
import { Button, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Helmet } from "react-helmet";

/** TODO: Eventually update this to something a bit more accurate */
const CANON_URL = "https://arbalestai.com";

function App() {
  const [isSignedIn, setSignedIn] = useState(true);
  return (
    <div className="justify-center">
      <div className="justify-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Arbalest AI</title>
            <link rel="canonical" href={CANON_URL} />
          </Helmet>
          <AppBody />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default App;

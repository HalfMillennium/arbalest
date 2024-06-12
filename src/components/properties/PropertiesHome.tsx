import { Typography } from "@material-ui/core";
import { useState } from "react";

export function PropertiesHome() {
  // TODO: Replace with Redux store selector (obv)
  const [properties, setProperties] = useState([]);

  return (
    <div>
      <div>I guess you have properties. This is cool!</div>
    </div>
  );
}

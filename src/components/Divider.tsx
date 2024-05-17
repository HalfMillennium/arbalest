import React, { SVGProps } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import { AutoFixHigh, Build, Feed } from "@mui/icons-material";

type SVGReactIcon = React.ComponentType<SVGProps<SVGSVGElement>>;

export function DividerWithIcon(props: { selectedIcon: string }) {
  let Icon = DisplayIcon(Build as SVGReactIcon);
  const { selectedIcon } = props;
  if (selectedIcon == "auto-fix") {
    Icon = DisplayIcon(AutoFixHigh as SVGReactIcon);
  }
  if (selectedIcon == "feed") {
    Icon = DisplayIcon(Feed as SVGReactIcon);
  }

  return (
    <div className="mr-12 mb-8">
      {" "}
      {/* Full screen width */}
      <Divider
        variant="middle"
        sx={{ display: "flex", alignItems: "center" }}
        className="px-20"
      >
        <Icon /> {/* Centered icon */}
      </Divider>
    </div>
  );
}

const DisplayIcon = (Icon: React.ComponentType<SVGProps<SVGSVGElement>>) => {
  return function IconComponent(props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
      <Icon {...props} className="mx-auto text-gray-500" fontSize="large" />
    );
  };
};

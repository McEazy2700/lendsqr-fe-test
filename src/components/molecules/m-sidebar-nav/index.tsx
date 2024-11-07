import { NavType } from "@/lib/types/navigation";
import React from "react";
import NavSingle from "../m-nav-single";
import NavGroup from "../m-nav-group";

interface Props {
  nav: NavType;
}

const SidebarNav: React.FC<Props> = ({ nav }) => {
  return nav.variant === "single" ? (
    <NavSingle nav={nav} />
  ) : (
    <NavGroup nav={nav} />
  );
};

export default SidebarNav;

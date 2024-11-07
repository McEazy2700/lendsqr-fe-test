import React from "react";

type SingleNav = {
  variant: "single";
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type GroupNav = {
  variant: "group";
  label: string;
  navs: NavType[];
};

export type NavType = SingleNav | GroupNav;

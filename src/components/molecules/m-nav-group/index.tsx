import { NavType } from "@/lib/types/navigation";
import React from "react";
import SidebarNav from "../m-sidebar-nav";
import styles from "./styles.module.scss";

interface Props {
  nav: Extract<NavType, { variant: "group" }>;
}

const NavGroup: React.FC<Props> = ({ nav }) => {
  return (
    <div className={styles.group}>
      <p className={styles.label}>{nav.label}</p>
      {nav.navs.map((nav) => (
        <SidebarNav nav={nav} key={nav.label} />
      ))}
    </div>
  );
};

export default NavGroup;

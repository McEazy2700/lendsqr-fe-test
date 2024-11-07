"use client";

import SidebarLink from "@/components/atoms/a-sidebar-link";
import { NavType } from "@/lib/types/navigation";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

interface Props {
  nav: Extract<NavType, { variant: "single" }>;
}

const NavSingle: React.FC<Props> = ({ nav }) => {
  const pathname = usePathname();

  return (
    <SidebarLink
      active={
        nav.href === "/" ? pathname === "/" : pathname.startsWith(nav.href)
      }
      className={styles.sidebarLink}
      icon={nav.icon}
      href={nav.href}
      key={nav.label}
    >
      {nav.label}
    </SidebarLink>
  );
};

export default NavSingle;

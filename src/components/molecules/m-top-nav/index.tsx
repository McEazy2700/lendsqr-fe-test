"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import SearchInput from "@/components/atoms/search-input";
import RadixIconsTriangleDown from "~icons/radix-icons/triangle-down.jsx";
import Link from "next/link";
import NotificationBell from "@/components/icons/notification-bell";
import LineMdCloseToMenuTransition from "~icons/line-md/close-to-menu-transition";
import LineMdMenuToCloseTransition from "~icons/line-md/menu-to-close-transition";
import { useAtom } from "jotai";
import navAtom from "@/state/atoms/navAtom";

const TopNav = () => {
  const [navOpen, setNavOpen] = useAtom(navAtom);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Image
          src="/logo.svg"
          width={145}
          height={20}
          alt="Lendsql"
          className={styles.img}
        />
        <div className={styles.smHidden}>
          <SearchInput placeholder="Search for anything" />
        </div>
      </div>
      <div className={styles.rightLg}>
        <Link href="#">Docs</Link>
        <NotificationBell />
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image
              src="/images/image-4.png"
              alt="adedeji"
              width={48}
              height={60}
            />
          </div>
          <div className={styles.profileName}>
            <span>Adedeji</span>
            <RadixIconsTriangleDown />
          </div>
        </div>
      </div>

      <div className={styles.rightSm}>
        <button onClick={() => setNavOpen((c) => !c)}>
          {navOpen ? (
            <LineMdMenuToCloseTransition />
          ) : (
            <LineMdCloseToMenuTransition />
          )}
        </button>
      </div>
    </nav>
  );
};

export default TopNav;

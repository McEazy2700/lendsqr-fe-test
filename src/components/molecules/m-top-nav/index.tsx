"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import SearchInput from "@/components/atoms/search-input";
import LineMdCloseToMenuTransition from "~icons/line-md/close-to-menu-transition";
import LineMdMenuToCloseTransition from "~icons/line-md/menu-to-close-transition";
import { useAtom } from "jotai";
import navAtom from "@/state/atoms/navAtom";
import UserNavAvatarInfo from "@/components/atoms/a-user-nav-avatar-info";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import IonSearch from "~icons/ion/search.jsx";
import { AnimatePresence, motion } from "framer-motion";

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
        <UserNavAvatarInfo />
      </div>

      <div className={styles.rightSm}>
        <Popover>
          {({ open }) => (
            <div>
              <PopoverButton className={styles.searchButton}>
                <IonSearch />
              </PopoverButton>
              <AnimatePresence>
                {open && (
                  <PopoverPanel
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    anchor="bottom end"
                    className={styles.searchPannel}
                  >
                    <SearchInput />
                  </PopoverPanel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>
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

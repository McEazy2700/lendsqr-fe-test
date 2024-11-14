"use client";

import React from "react";
import Link from "next/link";
import { User } from "@/lib/types/responses/queries";
import { AnimatePresence, motion } from "framer-motion";
import MiOptionsVertical from "~icons/mi/options-vertical.jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import styles from "./styles.module.scss";

interface Props {
  data: User;
}

const UsersTableActionButton: React.FC<Props> = ({ data }) => {
  return (
    <Menu>
      {({ open }) => (
        <div>
          <MenuButton className={styles.menuButton}>
            <MiOptionsVertical />
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                anchor="bottom"
              >
                <div className={styles.actions}>
                  <p>Actions</p>
                  <div className={styles.actionItems}>
                    <MenuItem>
                      <Link href={`/users/${data.id}`}>View Details</Link>
                    </MenuItem>
                  </div>
                </div>
              </MenuItems>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
};

export default UsersTableActionButton;

"use client";

import styles from "./styles.module.scss";
import Pagination from "@/components/atoms/a-pagination";
import MeteorIconsAngleDown from "~icons/meteor-icons/angle-down.jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

interface Props {
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

const UsersDataPagination: React.FC<Props> = ({
  onPageSizeChange,
  totalPages,
  onPageChange,
}) => {
  const [pageSize, setPageSize] = React.useState(50);

  return (
    <div className={styles.footer}>
      <div className={styles.pageSize}>
        <p>Showing</p>
        <Menu>
          <MenuButton className={styles.menuButton}>
            {/* <span>{pages.at(currentPageIndex)?.length ?? pageSize}</span> */}
            <span>{pageSize}</span>
            <MeteorIconsAngleDown />
          </MenuButton>
          <MenuItems anchor="bottom">
            <div className={styles.menuItems}>
              {Array.from({ length: 10 }).map((_, index) => (
                <MenuItem key={index}>
                  <button
                    onClick={() => {
                      const size = 50 * (index + 1);
                      setPageSize(size);
                      onPageSizeChange?.(size);
                    }}
                  >
                    {50 * (index + 1)}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <p>out of 500</p>
      </div>
      <Pagination onPageChange={onPageChange} totalPages={totalPages} />
    </div>
  );
};

export default UsersDataPagination;

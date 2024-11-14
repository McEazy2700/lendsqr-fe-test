"use client";

import React from "react";
import styles from "./styles.module.scss";
import Skeleton from "@/components/atoms/a-skeleton";
import { formatDatetime } from "@/lib/utils/datetime";
import FilterDuotone from "@/components/icons/filter-duotone";
import UsersDataPagination from "../m-user-data-pagination";
import UserTableStatus from "@/components/atoms/a-user-table-status";
import UsersTableActionButton from "@/components/atoms/a-users-table-action-button";
import useUsers from "@/lib/hooks/userUsers";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import UserFilters from "../m-user-filters";

const UsersTableDesktop = () => {
  const {
    pages,
    isPending,
    currentPageIndex,
    setPageSize,
    setCurrentPageIndex,
  } = useUsers();

  return (
    <>
      <table className={styles.table}>
        <Popover>
          {({ open }) => (
            <div>
              <PopoverButton className={styles.popoverButton}>
                <thead>
                  <tr className={styles.tr}>
                    <th className={styles.th}>
                      <span>Organization</span>
                      <FilterDuotone />
                    </th>
                    <th className={styles.th}>
                      <span>Username</span>
                      <FilterDuotone />
                    </th>
                    <th className={styles.th}>
                      <span>Email</span>
                      <FilterDuotone />
                    </th>
                    <th className={styles.th}>
                      <span>Phone Number</span>
                      <FilterDuotone />
                    </th>
                    <th className={styles.th}>
                      <span>Date Joined</span>
                      <FilterDuotone />
                    </th>
                    <th className={styles.th}>
                      <span>Status</span>
                      <FilterDuotone />
                    </th>
                  </tr>
                </thead>
              </PopoverButton>
              <AnimatePresence>
                {open && (
                  <PopoverPanel
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    anchor="bottom start"
                  >
                    <UserFilters />
                  </PopoverPanel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>
        <tbody>
          {pages[currentPageIndex]?.map((data, index) => (
            <tr
              key={Math.random() * index}
              className={`${styles.tr} ${styles.trbody}`}
            >
              <td className={styles.td}>{data.organization}</td>
              <td className={styles.td}>{data.username}</td>
              <td className={styles.td}>{data.email.toLowerCase()}</td>
              <td className={styles.td}>{data.phone}</td>
              <td className={styles.td}>
                {formatDatetime(new Date(data.dateJoined))}
              </td>
              <td className={styles.td}>
                <UserTableStatus data={data}>
                  <UsersTableActionButton data={data} />
                </UserTableStatus>
              </td>
            </tr>
          ))}

          {isPending &&
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className={`${styles.tr} ${styles.trbody}`}>
                <td className={styles.td}>
                  <Skeleton style={{ maxWidth: "70%" }} />
                </td>
                <td className={styles.td}>
                  <Skeleton style={{ maxWidth: "50%" }} />
                </td>
                <td className={styles.td}>
                  <Skeleton style={{ maxWidth: "80%" }} />
                </td>
                <td className={styles.td}>
                  <Skeleton style={{ maxWidth: "70%" }} />
                </td>
                <td className={styles.td}>
                  <Skeleton style={{ maxWidth: "50%" }} />
                </td>
                <td className={styles.td}>
                  <div className={styles.statusContainer}>
                    <Skeleton />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <UsersDataPagination
        totalPages={pages.length}
        onPageSizeChange={setPageSize}
        onPageChange={setCurrentPageIndex}
      />
    </>
  );
};

export default UsersTableDesktop;

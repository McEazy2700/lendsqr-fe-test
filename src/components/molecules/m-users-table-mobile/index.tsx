"use client";

import React from "react";
import { formatDatetime } from "@/lib/utils/datetime";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import FilterDuotone from "@/components/icons/filter-duotone";
import OverviewSection from "@/components/atoms/a-overview-section";
import OverviewItem from "@/components/atoms/a-overview-item";
import Separator from "@/components/atoms/a-separator";
import UserFilters from "@/components/molecules/m-user-filters";
import UsersTableActionButton from "@/components/atoms/a-users-table-action-button";
import UserTableStatus from "@/components/atoms/a-user-table-status";
import styles from "./styles.module.scss";
import useUsers from "@/lib/hooks/userUsers";
import UsersDataPagination from "../m-user-data-pagination";
import { AnimatePresence, motion } from "framer-motion";

const UsersTableMobile = () => {
  const { pages, currentPageIndex, setPageSize, setCurrentPageIndex } =
    useUsers();

  return (
    <>
      <div className={styles.usersSm}>
        <Popover>
          {({ open }) => (
            <div>
              <PopoverButton className={styles.popoverButton}>
                <span>Filter</span>
                <FilterDuotone />
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
                  >
                    <UserFilters />
                  </PopoverPanel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>
        {pages[currentPageIndex]?.map((data, index) => (
          <React.Fragment key={Math.random() * index}>
            <OverviewSection
              key={Math.random() * index}
              label={`${data.firstName} ${data.lastName}`}
            >
              <OverviewItem label="Organization">
                {data.organization}
              </OverviewItem>
              <OverviewItem label="Username">{data.username}</OverviewItem>
              <OverviewItem label="Email">{data.email}</OverviewItem>
              <OverviewItem label="Phone Number">{data.phone}</OverviewItem>
              <OverviewItem label="Date Joined">
                {formatDatetime(new Date(data.dateJoined))}
              </OverviewItem>
              <OverviewItem label="Status">
                <UserTableStatus data={data}>
                  <UsersTableActionButton data={data} />
                </UserTableStatus>
              </OverviewItem>
            </OverviewSection>
            {index !== (pages.at(currentPageIndex) ?? []).length - 1 && (
              <Separator variant="horizontal" />
            )}
          </React.Fragment>
        ))}
      </div>
      <UsersDataPagination
        totalPages={pages.length}
        onPageSizeChange={setPageSize}
        onPageChange={setCurrentPageIndex}
      />
    </>
  );
};

export default UsersTableMobile;

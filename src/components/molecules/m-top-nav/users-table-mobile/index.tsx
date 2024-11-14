"use client";

import React from "react";
import { formatDatetime } from "@/lib/utils/datetime";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import FilterDuotone from "@/components/icons/filter-duotone";
import OverviewSection from "@/components/atoms/a-overview-section";
import OverviewItem from "@/components/atoms/a-overview-item";
import Separator from "@/components/atoms/a-separator";
import UserFilters from "@/components/molecules/m-user-filters";
import UsersDataPagination from "../../m-user-data-pagination";
import { getUsers } from "@/lib/services/requests/queries";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import UsersTableActionButton from "@/components/atoms/a-users-table-action-button";
import UserTableStatus from "@/components/atoms/a-user-table-status";
import styles from "./styles.module.scss";

const UsersTableMobile = () => {
  const [pageSize, setPageSize] = React.useState(50);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const { data } = useQuery({
    queryFn: getUsers,
    queryKey: [QUERY_KEYS.USERS],
  });

  const allUsers = React.useMemo(() => {
    let totalUsers: NonNullable<typeof data> = [];
    for (let i = 0; i < 10; i++) {
      totalUsers = [...totalUsers, ...(data ?? [])];
    }
    return totalUsers;
  }, [data]);

  const pages = React.useMemo(() => {
    const totalPages: NonNullable<typeof data>[] = [];

    let page: NonNullable<typeof data> = [];

    allUsers.forEach((user, index) => {
      if (page.length < pageSize) {
        page.push(user);
      } else {
        totalPages.push(page);
        page = [];
        page.push(user);
      }

      if (page.length > 0 && index + 1 === allUsers.length) {
        totalPages.push(page);
        page = [];
      }
    });

    return totalPages;
  }, [allUsers, pageSize]);

  return (
    <>
      <div className={styles.usersSm}>
        <Popover>
          <PopoverButton className={styles.popoverButton}>
            <span>Filter</span>
            <FilterDuotone />
          </PopoverButton>
          <PopoverPanel anchor="bottom end">
            <UserFilters />
          </PopoverPanel>
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

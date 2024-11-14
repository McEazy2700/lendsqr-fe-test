"use client";

import React from "react";
import styles from "./styles.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import Skeleton from "@/components/atoms/a-skeleton";
import { formatDatetime } from "@/lib/utils/datetime";
import { getUsers } from "@/lib/services/requests/queries";
import FilterDuotone from "@/components/icons/filter-duotone";
import UsersDataPagination from "../m-user-data-pagination";
import UserTableStatus from "@/components/atoms/a-user-table-status";
import UsersTableActionButton from "@/components/atoms/a-users-table-action-button";

const UsersTableDesktop = () => {
  const [pageSize, setPageSize] = React.useState(50);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const { data, isPending } = useQuery({
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

  console.log(currentPageIndex);

  return (
    <>
      <table className={styles.table}>
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

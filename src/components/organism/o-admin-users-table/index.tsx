"use client";

import React from "react";
import FilterDuotone from "@/components/icons/filter-duotone";
import styles from "./styles.module.scss";
import { formatDatetime } from "@/lib/utils/datetime";
import MiOptionsVertical from "~icons/mi/options-vertical.jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MeteorIconsAngleDown from "~icons/meteor-icons/angle-down.jsx";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/lib/services/requests/queries";
import { QUERY_KEYS } from "@/constants/queryKeys";
import Skeleton from "@/components/atoms/a-skeleton";
import Pagination from "@/components/atoms/a-pagination";
import Link from "next/link";

const STATUS = ["inactive", "pending", "blacklisted", "active"] as const;

const AdminUsersTable = () => {
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

  console.log(pages);

  return (
    <div>
      <div className={styles.container}>
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
                  <div className={styles.statusContainer}>
                    <span
                      className={styles.status}
                      data-status={STATUS[
                        Math.floor(data.status.length % STATUS.length)
                      ].toLowerCase()}
                    >
                      {STATUS[Math.floor(data.status.length % STATUS.length)]}
                    </span>
                    <Menu>
                      <MenuButton>
                        <MiOptionsVertical />
                        <MenuItems anchor="bottom">
                          <div className={styles.actions}>
                            <p>Actions</p>
                            <div className={styles.actioItems}>
                              <MenuItem>
                                <Link href={`/users/${data.id}`}>
                                  View Details
                                </Link>
                              </MenuItem>
                            </div>
                          </div>
                        </MenuItems>
                      </MenuButton>
                    </Menu>
                  </div>
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
      </div>
      <div className={styles.footer}>
        <div className={styles.pageSize}>
          <p>Showing</p>
          <Menu>
            <MenuButton className={styles.menuButton}>
              <span>{pages.at(currentPageIndex)?.length ?? pageSize}</span>
              <MeteorIconsAngleDown />
            </MenuButton>
            <MenuItems anchor="bottom">
              <div className={styles.menuItems}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <MenuItem key={index}>
                    <button onClick={() => setPageSize(50 * (index + 1))}>
                      {50 * (index + 1)}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
          <p>out of 500</p>
        </div>
        <Pagination
          onPageChange={(page) => setCurrentPageIndex(page - 1)}
          totalPages={pages.length}
        />
      </div>
    </div>
  );
};

export default AdminUsersTable;

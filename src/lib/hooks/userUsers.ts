import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "../services/requests/queries";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useAtomValue } from "jotai";
import usersFilterAtom from "@/state/atoms/usersFilterAtom";

const useUsers = () => {
  const usersFilters = useAtomValue(usersFilterAtom);
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

    const users = totalUsers
      .filter((user) =>
        usersFilters?.organization
          ? user.organization
              .toLowerCase()
              .includes(usersFilters?.organization.toLowerCase())
          : true,
      )
      .filter((user) =>
        usersFilters?.username
          ? user.username
              .toLowerCase()
              .includes(usersFilters?.username?.toLowerCase())
          : true,
      )
      .filter((user) =>
        usersFilters?.email
          ? user.email
              .toLowerCase()
              .includes(usersFilters?.email?.toLowerCase())
          : true,
      )
      .filter((user) =>
        usersFilters?.date
          ? new Date(user.dateJoined)
              .toLocaleString()
              .includes(new Date(usersFilters.date).toLocaleString())
          : true,
      )
      .filter((user) =>
        usersFilters?.phoneNumber
          ? user.phone
              .toLowerCase()
              .includes(usersFilters?.phoneNumber?.toLowerCase())
          : true,
      )
      .filter((user) =>
        usersFilters?.status
          ? user.status
              .toLowerCase()
              .includes(usersFilters?.status?.toLowerCase())
          : true,
      );
    return users;
  }, [data, usersFilters]);

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

  return {
    currentPageIndex,
    setCurrentPageIndex,
    setPageSize,
    pages,
    isPending,
  };
};

export default useUsers;

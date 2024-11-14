"use client";

import React from "react";
import styles from "./styles.module.scss";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import UsersTableDesktop from "@/components/molecules/m-user-table-desktop";
import UsersTableMobile from "@/components/molecules/m-users-table-mobile";

const AdminUsersTable = () => {
  const isDesktop = useMediaQuery("(min-width: 1600px)");

  return (
    <div>
      <div className={styles.container}>
        {isDesktop ? <UsersTableDesktop /> : <UsersTableMobile />}
      </div>
    </div>
  );
};

export default AdminUsersTable;

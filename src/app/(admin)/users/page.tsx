"use client";

import AdminUsersStatisticsGrid from "@/components/molecules/m-admin-users-statistics-grid";
import styles from "./styles.module.scss";
import AdminUsersTable from "@/components/organism/o-admin-users-table";
import Page from "@/components/atoms/a-page";

const UsersPage = () => {
  return (
    <Page>
      <h1 className={styles.heading}>Users</h1>
      <AdminUsersStatisticsGrid />
      <AdminUsersTable />
    </Page>
  );
};

export default UsersPage;

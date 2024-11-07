import AdminUsersStatisticsGrid from "@/components/molecules/m-admin-users-statistics-grid";
import styles from "./styles.module.scss";
import AdminUsersTable from "@/components/organism/o-admin-users-table";

const UsersPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Users</h1>
      <AdminUsersStatisticsGrid />
      <AdminUsersTable />
    </div>
  );
};

export default UsersPage;

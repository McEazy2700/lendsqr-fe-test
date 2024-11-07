import AdminUsersStatisticsGrid from "@/components/molecules/m-admin-users-statistics-grid";
import styles from "./styles.module.scss";

const UsersPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Users</h1>
      <AdminUsersStatisticsGrid />
    </div>
  );
};

export default UsersPage;

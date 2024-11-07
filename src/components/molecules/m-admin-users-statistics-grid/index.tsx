import Card from "@/components/atoms/a-card";
import UsersFriendsOutline from "@/components/icons/users-friends-outline";
import styles from "./styles.module.scss";
import UsersGroupOutline from "@/components/icons/users-group-outline";
import LoanDocumentOutline from "@/components/icons/loan-document-outline";
import CoinStackOutline from "@/components/icons/coin-stack-outline";

const AdminUsersStatisticsGrid = () => {
  return (
    <div className={styles.grid}>
      <Card>
        <div className={styles.stat}>
          <div className={styles.usersIcon}>
            <UsersFriendsOutline />
          </div>
          <p className={styles.label}>Users</p>
          <p className={styles.value}>{(2453).toLocaleString()}</p>
        </div>
      </Card>
      <Card>
        <div className={styles.stat}>
          <div className={styles.activeUsersIcon}>
            <UsersGroupOutline />
          </div>
          <p className={styles.label}>Active Users</p>
          <p className={styles.value}>{(2453).toLocaleString()}</p>
        </div>
      </Card>
      <Card>
        <div className={styles.stat}>
          <div className={styles.usersLoansIcon}>
            <LoanDocumentOutline />
          </div>
          <p className={styles.label}>Users With Loans</p>
          <p className={styles.value}>{(12453).toLocaleString()}</p>
        </div>
      </Card>
      <Card>
        <div className={styles.stat}>
          <div className={styles.usersSavingsIcon}>
            <CoinStackOutline />
          </div>
          <p className={styles.label}>Users With Savings</p>
          <p className={styles.value}>{(102453).toLocaleString()}</p>
        </div>
      </Card>
    </div>
  );
};

export default AdminUsersStatisticsGrid;

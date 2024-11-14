import { User } from "@/lib/types/responses/queries";
import React from "react";
import styles from "./styles.module.scss";

const STATUS = ["inactive", "pending", "blacklisted", "active"] as const;

interface Props {
  data: User;
  children?: React.ReactNode;
}

const UserTableStatus: React.FC<Props> = ({ data, children }) => {
  return (
    <div className={styles.statusContainer}>
      <span
        className={styles.status}
        data-status={STATUS[
          Math.floor(data.status.length % STATUS.length)
        ].toLowerCase()}
      >
        {STATUS[Math.floor(data.status.length % STATUS.length)]}
      </span>
      {children}
    </div>
  );
};

export default UserTableStatus;

import React from "react";
import styles from "./styles.module.scss";

interface Props {
  label?: string;
  children?: React.ReactNode;
}

const OverviewSection: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.label}>{label}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default OverviewSection;

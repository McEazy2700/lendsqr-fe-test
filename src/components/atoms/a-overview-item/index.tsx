import styles from "./styles.module.scss";

interface Props {
  label?: string;
  children?: React.ReactNode;
}

const OverviewItem: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={styles.item}>
      <p className={styles.label}>{label}</p>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default OverviewItem;

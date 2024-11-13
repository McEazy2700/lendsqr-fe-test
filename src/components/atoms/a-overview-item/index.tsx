import styles from "./styles.module.scss";

interface Props {
  label?: string;
  children?: React.ReactNode;
}

const OverviewItem: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={styles.item}>
      <p className={styles.label}>{label}</p>
      <p className={styles.content}>{children}</p>
    </div>
  );
};

export default OverviewItem;

import TopNav from "@/components/molecules/m-top-nav";
import Sidebar from "@/components/organism/o-sidebar";
import styles from "./styles.module.scss";

interface Props {
  children?: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <TopNav />
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;

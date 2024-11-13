"use client";

import TopNav from "@/components/molecules/m-top-nav";
import Sidebar from "@/components/organism/o-sidebar";
import styles from "./styles.module.scss";
import { useAtom } from "jotai";
import navAtom from "@/state/atoms/navAtom";

interface Props {
  children?: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  const [navOpen, setAtomOpen] = useAtom(navAtom);

  return (
    <div className={styles.layout}>
      <div data-open={navOpen} className={styles.fixedSidebar}>
        <Sidebar />
      </div>
      <div className={styles.backdrop} onClick={() => setAtomOpen((c) => !c)} />
      <TopNav />
      <div className={styles.body}>
        <div className={styles.mdHidden}>
          <Sidebar />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;

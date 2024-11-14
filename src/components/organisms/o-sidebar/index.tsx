import SidebarLink from "@/components/atoms/a-sidebar-link";
import BriefcaseDuotone from "@/components/icons/briefcase-duotone";
import UimAngleDown from "~icons/uim/angle-down.jsx";
import styles from "./styles.module.scss";
import { ADMIN_NAVIGATION } from "@/constants/navigation/admin";
import SidebarNav from "@/components/molecules/m-sidebar-nav";
import UserNavAvatarInfo from "@/components/atoms/a-user-nav-avatar-info";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarLink icon={<BriefcaseDuotone />} href="#">
        <span>Switch Organization</span>
        <UimAngleDown />
      </SidebarLink>
      <div>
        {ADMIN_NAVIGATION.map((nav) => (
          <SidebarNav nav={nav} key={nav.label} />
        ))}
      </div>
      <div className={styles.profileInfo}>
        <UserNavAvatarInfo />
      </div>
    </aside>
  );
};

export default Sidebar;

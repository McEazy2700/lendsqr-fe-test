import RadixIconsTriangleDown from "~icons/radix-icons/triangle-down.jsx";
import Link from "next/link";
import NotificationBell from "@/components/icons/notification-bell";
import Image from "next/image";
import styles from "./styles.module.scss";

const UserNavAvatarInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="#">Docs</Link>
        <NotificationBell />
      </div>
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <Image
            src="/images/image-4.png"
            alt="adedeji"
            width={48}
            height={60}
          />
        </div>
        <div className={styles.profileName}>
          <span>Adedeji</span>
          <RadixIconsTriangleDown />
        </div>
      </div>
    </div>
  );
};

export default UserNavAvatarInfo;

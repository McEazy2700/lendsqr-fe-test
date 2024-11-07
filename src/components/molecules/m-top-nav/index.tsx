import Image from "next/image";
import styles from "./styles.module.scss";
import SearchInput from "@/components/atoms/search-input";
import RadixIconsTriangleDown from "~icons/radix-icons/triangle-down.jsx";
import Link from "next/link";

const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Image
          src="/logo.svg"
          width={145}
          height={20}
          alt="Lendsql"
          className={styles.img}
        />
        <SearchInput placeholder="Search for anything" />
      </div>
      <div className={styles.right}>
        <Link href="#">Docs</Link>
        <Image src="/icons/bell.svg" alt="bell" width={26} height={26} />
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
    </nav>
  );
};

export default TopNav;

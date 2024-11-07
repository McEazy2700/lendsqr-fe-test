import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href: string;
  className?: string;
  active?: boolean;
}

const SidebarLink: React.FC<Props> = ({
  active,
  href,
  className,
  icon,
  children,
}) => {
  return (
    <Link
      data-active={active}
      href={href}
      className={`${styles.link} ${className}`}
    >
      <span className={styles.indicator} />
      <span className={styles.icon}>{icon}</span>
      {children}
    </Link>
  );
};

export default SidebarLink;

import styles from "./styles.module.scss";

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.page} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Page;

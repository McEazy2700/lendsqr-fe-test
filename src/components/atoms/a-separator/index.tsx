import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "vertical" | "horizontal";
}

const Separator: React.FC<Props> = ({ variant, className, ...props }) => {
  return (
    <div
      className={`${styles.separator} ${variant === "horizontal" ? styles.horizontal : styles.vertical} ${className}`}
      {...props}
    />
  );
};

export default Separator;

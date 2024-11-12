import React from "react";
import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text";
}

const Skeleton: React.FC<Props> = ({
  variant = "text",
  className,
  ...props
}) => {
  return (
    <div
      className={`${styles.skeleton} ${variant === "text" ? styles.skeletonText : ""} ${className}`}
      {...props}
    />
  );
};

export default Skeleton;

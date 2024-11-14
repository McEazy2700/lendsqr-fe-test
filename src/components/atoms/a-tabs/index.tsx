import React from "react";
import styles from "./styles.module.scss";

type ImmutableArray<T> = readonly T[];

interface Props<T extends ImmutableArray<unknown>>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  tabs: T;
  activeTab: T[number];
  onTabChange?: (tab: T[number]) => void;
}

const Tabs = <T extends ImmutableArray<unknown>>({
  tabs,
  activeTab,
  onTabChange,
  className,
  ...props
}: Props<T>) => {
  return (
    <div className={`${className} ${styles.tabs}`} {...props}>
      {tabs.map((tab) => (
        <button
          key={String(tab)}
          data-active={activeTab === tab}
          onClick={() => onTabChange?.(tab)}
        >
          {String(tab)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

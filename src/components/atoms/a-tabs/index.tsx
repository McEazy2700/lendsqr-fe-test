import styles from "./styles.module.scss";

type ImmutableArray<T> = readonly T[];

interface Props<T extends ImmutableArray<unknown>> {
  tabs: T;
  activeTab: T[number];
  onTabChange?: (tab: T[number]) => void;
}

const Tabs = <T extends ImmutableArray<unknown>>({
  tabs,
  activeTab,
  onTabChange,
}: Props<T>) => {
  return (
    <div className={styles.tabs}>
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

import React from "react";
import TablerStar from "~icons/tabler/star.jsx";
import TablerStarFilled from "~icons/tabler/star-filled.jsx";
import styles from "./styles.module.scss";

interface Props {
  rank: number;
  totalRank: number;
}

const Rank: React.FC<Props> = ({ totalRank, rank }) => {
  return (
    <div className={styles.rank}>
      {Array.from({ length: rank }).map((_, index) => (
        <span key={index} className={styles.rankItem}>
          <TablerStarFilled />
        </span>
      ))}
      {Array.from({ length: totalRank - rank }).map((_, index) => (
        <span key={index} className={styles.rankItem}>
          <TablerStar />
        </span>
      ))}
    </div>
  );
};

export default Rank;

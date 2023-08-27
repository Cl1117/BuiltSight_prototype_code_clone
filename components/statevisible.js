import { useMemo } from "react";
import styles from "./statevisible.module.css";
const Statevisible = ({
  statevisiblePosition,
  statevisibleTop,
  statevisibleLeft,
}) => {
  const statevisibleStyle = useMemo(() => {
    return {
      position: statevisiblePosition,
      top: statevisibleTop,
      left: statevisibleLeft,
    };
  }, [statevisiblePosition, statevisibleTop, statevisibleLeft]);

  return (
    <div className={styles.statevisible} style={statevisibleStyle}>
      <div className={styles.aggregateBlueMetal}>
        Aggregate Blue Metal 20 mm
      </div>
      <div className={styles.mm}>mm</div>
      <div className={styles.div}>+5%</div>
    </div>
  );
};

export default Statevisible;

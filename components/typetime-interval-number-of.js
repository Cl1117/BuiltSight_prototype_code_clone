import { useMemo } from "react";
import styles from "./typetime-interval-number-of.module.css";
const TypetimeIntervalNumberOf = ({
  typetimeIntervalNumberOfPosition,
  typetimeIntervalNumberOfWidth,
  typetimeIntervalNumberOfAlignSelf,
  typetimeIntervalNumberOfPadding,
  typetimeIntervalNumberOfBoxSizing,
}) => {
  const typetimeIntervalNumberOfStyle = useMemo(() => {
    return {
      position: typetimeIntervalNumberOfPosition,
      width: typetimeIntervalNumberOfWidth,
      alignSelf: typetimeIntervalNumberOfAlignSelf,
      padding: typetimeIntervalNumberOfPadding,
      boxSizing: typetimeIntervalNumberOfBoxSizing,
    };
  }, [
    typetimeIntervalNumberOfPosition,
    typetimeIntervalNumberOfWidth,
    typetimeIntervalNumberOfAlignSelf,
    typetimeIntervalNumberOfPadding,
    typetimeIntervalNumberOfBoxSizing,
  ]);

  return (
    <div
      className={styles.typetimeIntervalNumberOf}
      style={typetimeIntervalNumberOfStyle}
    >
      <div className={styles.jan}>Jan</div>
      <div className={styles.jan}>Feb</div>
      <div className={styles.jan}>Mar</div>
      <div className={styles.jan}>Apr</div>
      <div className={styles.jan}>May</div>
      <div className={styles.jan}>Jun</div>
      <div className={styles.jan}>Jul</div>
      <div className={styles.jan}>Aug</div>
    </div>
  );
};

export default TypetimeIntervalNumberOf;

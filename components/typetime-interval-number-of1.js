import { useMemo } from "react";
import styles from "./typetime-interval-number-of1.module.css";
const TypetimeIntervalNumberOf1 = ({
  oct2022,
  nov2022,
  dec2022,
  showJan2023,
  showFeb2023,
  showMar2023,
  typetimeIntervalNumberOfPosition,
  typetimeIntervalNumberOfWidth,
  typetimeIntervalNumberOfJustifyContent,
  typetimeIntervalNumberOfAlignSelf,
  typetimeIntervalNumberOfPadding,
  typetimeIntervalNumberOfBoxSizing,
  typetimeIntervalNumberOfGap,
}) => {
  const typetimeIntervalNumberOf1Style = useMemo(() => {
    return {
      position: typetimeIntervalNumberOfPosition,
      width: typetimeIntervalNumberOfWidth,
      justifyContent: typetimeIntervalNumberOfJustifyContent,
      alignSelf: typetimeIntervalNumberOfAlignSelf,
      padding: typetimeIntervalNumberOfPadding,
      boxSizing: typetimeIntervalNumberOfBoxSizing,
      gap: typetimeIntervalNumberOfGap,
    };
  }, [
    typetimeIntervalNumberOfPosition,
    typetimeIntervalNumberOfWidth,
    typetimeIntervalNumberOfJustifyContent,
    typetimeIntervalNumberOfAlignSelf,
    typetimeIntervalNumberOfPadding,
    typetimeIntervalNumberOfBoxSizing,
    typetimeIntervalNumberOfGap,
  ]);

  return (
    <div
      className={styles.typetimeIntervalNumberOf}
      style={typetimeIntervalNumberOf1Style}
    >
      <div className={styles.oct2022}>{oct2022}</div>
      <div className={styles.oct2022}>{nov2022}</div>
      <div className={styles.oct2022}>{dec2022}</div>
      {showJan2023 && <div className={styles.oct2022}>Jan 2023</div>}
      {showFeb2023 && <div className={styles.oct2022}>Feb 2023</div>}
      {showMar2023 && <div className={styles.oct2022}>Mar 2023</div>}
    </div>
  );
};

export default TypetimeIntervalNumberOf1;

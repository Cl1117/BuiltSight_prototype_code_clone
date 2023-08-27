import { useMemo } from "react";
import styles from "./stateinactive.module.css";
const Stateinactive = ({
  stateinactivePosition,
  stateinactiveBorderRadius,
  stateinactiveBackgroundColor,
  stateinactiveWidth,
  stateinactiveHeight,
  stateinactiveDisplay,
  stateinactiveFlexDirection,
  stateinactivePadding,
  stateinactiveBoxSizing,
  stateinactiveAlignItems,
  stateinactiveJustifyContent,
  stateinactiveTop,
  stateinactiveLeft,
}) => {
  const stateinactiveStyle = useMemo(() => {
    return {
      position: stateinactivePosition,
      borderRadius: stateinactiveBorderRadius,
      backgroundColor: stateinactiveBackgroundColor,
      width: stateinactiveWidth,
      height: stateinactiveHeight,
      display: stateinactiveDisplay,
      flexDirection: stateinactiveFlexDirection,
      padding: stateinactivePadding,
      boxSizing: stateinactiveBoxSizing,
      alignItems: stateinactiveAlignItems,
      justifyContent: stateinactiveJustifyContent,
      top: stateinactiveTop,
      left: stateinactiveLeft,
    };
  }, [
    stateinactivePosition,
    stateinactiveBorderRadius,
    stateinactiveBackgroundColor,
    stateinactiveWidth,
    stateinactiveHeight,
    stateinactiveDisplay,
    stateinactiveFlexDirection,
    stateinactivePadding,
    stateinactiveBoxSizing,
    stateinactiveAlignItems,
    stateinactiveJustifyContent,
    stateinactiveTop,
    stateinactiveLeft,
  ]);

  return (
    <div className={styles.stateinactive} style={stateinactiveStyle}>
      <div className={styles.compare}>Compare</div>
    </div>
  );
};

export default Stateinactive;

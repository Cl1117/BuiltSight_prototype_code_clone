import { useMemo } from "react";
import styles from "./option-default-visible-option2.module.css";
const OptionDefaultVisibleOption2 = ({
  optionDefaultVisibleOptioPosition,
  optionDefaultVisibleOptioBorderRadius,
  optionDefaultVisibleOptioBackgroundColor,
  optionDefaultVisibleOptioBorder,
  optionDefaultVisibleOptioBoxSizing,
  optionDefaultVisibleOptioWidth,
  optionDefaultVisibleOptioDisplay,
  optionDefaultVisibleOptioFlexDirection,
  optionDefaultVisibleOptioPadding,
  optionDefaultVisibleOptioAlignItems,
  optionDefaultVisibleOptioJustifyContent,
  optionDefaultVisibleOptioGap,
  optionDefaultVisibleOptioTop,
  optionDefaultVisibleOptioLeft,
  pickStartingDatePosition,
  pickStartingDateFontSize,
  pickStartingDateLineHeight,
  pickStartingDateFontFamily,
  pickStartingDateColor,
  pickStartingDateTextAlign,
  pickStartingDateDisplay,
  pickStartingDateWidth,
  pickStartingDateFlexShrink,
}) => {
  const optionDefaultVisibleOption2Style = useMemo(() => {
    return {
      position: optionDefaultVisibleOptioPosition,
      borderRadius: optionDefaultVisibleOptioBorderRadius,
      backgroundColor: optionDefaultVisibleOptioBackgroundColor,
      border: optionDefaultVisibleOptioBorder,
      boxSizing: optionDefaultVisibleOptioBoxSizing,
      width: optionDefaultVisibleOptioWidth,
      display: optionDefaultVisibleOptioDisplay,
      flexDirection: optionDefaultVisibleOptioFlexDirection,
      padding: optionDefaultVisibleOptioPadding,
      alignItems: optionDefaultVisibleOptioAlignItems,
      justifyContent: optionDefaultVisibleOptioJustifyContent,
      gap: optionDefaultVisibleOptioGap,
      top: optionDefaultVisibleOptioTop,
      left: optionDefaultVisibleOptioLeft,
    };
  }, [
    optionDefaultVisibleOptioPosition,
    optionDefaultVisibleOptioBorderRadius,
    optionDefaultVisibleOptioBackgroundColor,
    optionDefaultVisibleOptioBorder,
    optionDefaultVisibleOptioBoxSizing,
    optionDefaultVisibleOptioWidth,
    optionDefaultVisibleOptioDisplay,
    optionDefaultVisibleOptioFlexDirection,
    optionDefaultVisibleOptioPadding,
    optionDefaultVisibleOptioAlignItems,
    optionDefaultVisibleOptioJustifyContent,
    optionDefaultVisibleOptioGap,
    optionDefaultVisibleOptioTop,
    optionDefaultVisibleOptioLeft,
  ]);

  const pickStartingDateStyle = useMemo(() => {
    return {
      position: pickStartingDatePosition,
      fontSize: pickStartingDateFontSize,
      lineHeight: pickStartingDateLineHeight,
      fontFamily: pickStartingDateFontFamily,
      color: pickStartingDateColor,
      textAlign: pickStartingDateTextAlign,
      display: pickStartingDateDisplay,
      width: pickStartingDateWidth,
      flexShrink: pickStartingDateFlexShrink,
    };
  }, [
    pickStartingDatePosition,
    pickStartingDateFontSize,
    pickStartingDateLineHeight,
    pickStartingDateFontFamily,
    pickStartingDateColor,
    pickStartingDateTextAlign,
    pickStartingDateDisplay,
    pickStartingDateWidth,
    pickStartingDateFlexShrink,
  ]);

  return (
    <div
      className={styles.optiondefaultVisibleOption}
      style={optionDefaultVisibleOption2Style}
    >
      <div className={styles.pickStartingDate} style={pickStartingDateStyle}>
        Pick starting date
      </div>
      <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
    </div>
  );
};

export default OptionDefaultVisibleOption2;

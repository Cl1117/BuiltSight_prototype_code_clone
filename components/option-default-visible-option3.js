import { useMemo } from "react";
import styles from "./option-default-visible-option3.module.css";
const OptionDefaultVisibleOption3 = ({
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
  pickEndingDatePosition,
  pickEndingDateFontSize,
  pickEndingDateLineHeight,
  pickEndingDateFontFamily,
  pickEndingDateColor,
  pickEndingDateTextAlign,
  pickEndingDateDisplay,
  pickEndingDateWidth,
  pickEndingDateFlexShrink,
}) => {
  const optionDefaultVisibleOption3Style = useMemo(() => {
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

  const pickEndingDateStyle = useMemo(() => {
    return {
      position: pickEndingDatePosition,
      fontSize: pickEndingDateFontSize,
      lineHeight: pickEndingDateLineHeight,
      fontFamily: pickEndingDateFontFamily,
      color: pickEndingDateColor,
      textAlign: pickEndingDateTextAlign,
      display: pickEndingDateDisplay,
      width: pickEndingDateWidth,
      flexShrink: pickEndingDateFlexShrink,
    };
  }, [
    pickEndingDatePosition,
    pickEndingDateFontSize,
    pickEndingDateLineHeight,
    pickEndingDateFontFamily,
    pickEndingDateColor,
    pickEndingDateTextAlign,
    pickEndingDateDisplay,
    pickEndingDateWidth,
    pickEndingDateFlexShrink,
  ]);

  return (
    <div
      className={styles.optiondefaultVisibleOption}
      style={optionDefaultVisibleOption3Style}
    >
      <div className={styles.pickEndingDate} style={pickEndingDateStyle}>
        Pick ending date
      </div>
      <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
    </div>
  );
};

export default OptionDefaultVisibleOption3;

import { useMemo } from "react";
import styles from "./option-default-visible-option1.module.css";
const OptionDefaultVisibleOption1 = ({
  optionDefaultVisibleOptioPosition,
  optionDefaultVisibleOptioBorderRadius,
  optionDefaultVisibleOptioBackgroundColor,
  optionDefaultVisibleOptioBorder,
  optionDefaultVisibleOptioBoxSizing,
  optionDefaultVisibleOptioHeight,
  optionDefaultVisibleOptioFlexDirection,
  optionDefaultVisibleOptioPadding,
  optionDefaultVisibleOptioAlignItems,
  optionDefaultVisibleOptioJustifyContent,
  optionDefaultVisibleOptioTop,
  optionDefaultVisibleOptioLeft,
  selectCategoryPosition,
  selectCategoryFontSize,
  selectCategoryLineHeight,
  selectCategoryFontFamily,
  selectCategoryColor,
  selectCategoryTextAlign,
  selectCategoryDisplay,
  selectCategoryWidth,
  selectCategoryFlexShrink,
  shapeIconPosition,
  shapeIconWidth,
  shapeIconHeight,
  shapeIconMarginLeft,
}) => {
  const optionDefaultVisibleOption1Style = useMemo(() => {
    return {
      position: optionDefaultVisibleOptioPosition,
      borderRadius: optionDefaultVisibleOptioBorderRadius,
      backgroundColor: optionDefaultVisibleOptioBackgroundColor,
      border: optionDefaultVisibleOptioBorder,
      boxSizing: optionDefaultVisibleOptioBoxSizing,
      height: optionDefaultVisibleOptioHeight,
      flexDirection: optionDefaultVisibleOptioFlexDirection,
      padding: optionDefaultVisibleOptioPadding,
      alignItems: optionDefaultVisibleOptioAlignItems,
      justifyContent: optionDefaultVisibleOptioJustifyContent,
      top: optionDefaultVisibleOptioTop,
      left: optionDefaultVisibleOptioLeft,
    };
  }, [
    optionDefaultVisibleOptioPosition,
    optionDefaultVisibleOptioBorderRadius,
    optionDefaultVisibleOptioBackgroundColor,
    optionDefaultVisibleOptioBorder,
    optionDefaultVisibleOptioBoxSizing,
    optionDefaultVisibleOptioHeight,
    optionDefaultVisibleOptioFlexDirection,
    optionDefaultVisibleOptioPadding,
    optionDefaultVisibleOptioAlignItems,
    optionDefaultVisibleOptioJustifyContent,
    optionDefaultVisibleOptioTop,
    optionDefaultVisibleOptioLeft,
  ]);

  const selectCategoryStyle = useMemo(() => {
    return {
      position: selectCategoryPosition,
      fontSize: selectCategoryFontSize,
      lineHeight: selectCategoryLineHeight,
      fontFamily: selectCategoryFontFamily,
      color: selectCategoryColor,
      textAlign: selectCategoryTextAlign,
      display: selectCategoryDisplay,
      width: selectCategoryWidth,
      flexShrink: selectCategoryFlexShrink,
    };
  }, [
    selectCategoryPosition,
    selectCategoryFontSize,
    selectCategoryLineHeight,
    selectCategoryFontFamily,
    selectCategoryColor,
    selectCategoryTextAlign,
    selectCategoryDisplay,
    selectCategoryWidth,
    selectCategoryFlexShrink,
  ]);

  const shapeIconStyle = useMemo(() => {
    return {
      position: shapeIconPosition,
      width: shapeIconWidth,
      height: shapeIconHeight,
      marginLeft: shapeIconMarginLeft,
    };
  }, [shapeIconPosition, shapeIconWidth, shapeIconHeight, shapeIconMarginLeft]);

  return (
    <div
      className={styles.optiondefaultVisibleOption}
      style={optionDefaultVisibleOption1Style}
    >
      <div className={styles.selectCategory} style={selectCategoryStyle}>
        Select category
      </div>
      <img
        className={styles.shapeIcon}
        alt=""
        src="/shape1.svg"
        style={shapeIconStyle}
      />
    </div>
  );
};

export default OptionDefaultVisibleOption1;

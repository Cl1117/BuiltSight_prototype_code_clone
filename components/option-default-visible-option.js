import { useMemo } from "react";
import styles from "./option-default-visible-option.module.css";
const OptionDefaultVisibleOption = ({
  optionDefaultVisibleOptioPosition,
  optionDefaultVisibleOptioBorderRadius,
  optionDefaultVisibleOptioBackgroundColor,
  optionDefaultVisibleOptioBorder,
  optionDefaultVisibleOptioBoxSizing,
  optionDefaultVisibleOptioFlexDirection,
  optionDefaultVisibleOptioPadding,
  optionDefaultVisibleOptioAlignItems,
  optionDefaultVisibleOptioJustifyContent,
  optionDefaultVisibleOptioGap,
  optionDefaultVisibleOptioTop,
  optionDefaultVisibleOptioLeft,
  selectMaterialPosition,
  selectMaterialFontSize,
  selectMaterialLineHeight,
  selectMaterialFontFamily,
  selectMaterialColor,
  selectMaterialTextAlign,
  selectMaterialDisplay,
  selectMaterialWidth,
  selectMaterialFlexShrink,
}) => {
  const optionDefaultVisibleOptionStyle = useMemo(() => {
    return {
      position: optionDefaultVisibleOptioPosition,
      borderRadius: optionDefaultVisibleOptioBorderRadius,
      backgroundColor: optionDefaultVisibleOptioBackgroundColor,
      border: optionDefaultVisibleOptioBorder,
      boxSizing: optionDefaultVisibleOptioBoxSizing,
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
    optionDefaultVisibleOptioFlexDirection,
    optionDefaultVisibleOptioPadding,
    optionDefaultVisibleOptioAlignItems,
    optionDefaultVisibleOptioJustifyContent,
    optionDefaultVisibleOptioGap,
    optionDefaultVisibleOptioTop,
    optionDefaultVisibleOptioLeft,
  ]);

  const selectMaterialStyle = useMemo(() => {
    return {
      position: selectMaterialPosition,
      fontSize: selectMaterialFontSize,
      lineHeight: selectMaterialLineHeight,
      fontFamily: selectMaterialFontFamily,
      color: selectMaterialColor,
      textAlign: selectMaterialTextAlign,
      display: selectMaterialDisplay,
      width: selectMaterialWidth,
      flexShrink: selectMaterialFlexShrink,
    };
  }, [
    selectMaterialPosition,
    selectMaterialFontSize,
    selectMaterialLineHeight,
    selectMaterialFontFamily,
    selectMaterialColor,
    selectMaterialTextAlign,
    selectMaterialDisplay,
    selectMaterialWidth,
    selectMaterialFlexShrink,
  ]);

  return (
    <div
      className={styles.optiondefaultVisibleOption}
      style={optionDefaultVisibleOptionStyle}
    >
      <div className={styles.selectMaterial} style={selectMaterialStyle}>
        Select material
      </div>
      <img className={styles.shapeIcon} alt="" src="/shape.svg" />
    </div>
  );
};

export default OptionDefaultVisibleOption;

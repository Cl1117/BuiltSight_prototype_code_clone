import { useMemo } from "react";
import styles from "./typeh-line-value.module.css";
const TypehLineValue = ({
  leftValue,
  typehLineValuePosition,
  typehLineValueWidth,
  typehLineValueAlignItems,
  typehLineValueAlignSelf,
  leftValueColor,
  leftValueLetterSpacing,
  hLineBackgroundColor,
  hLineFlex,
  hLinePosition,
  hLineHeight,
  hLineLineBreak,
  hLineWidth,
}) => {
  const typehLineValueStyle = useMemo(() => {
    return {
      position: typehLineValuePosition,
      width: typehLineValueWidth,
      alignItems: typehLineValueAlignItems,
      alignSelf: typehLineValueAlignSelf,
    };
  }, [
    typehLineValuePosition,
    typehLineValueWidth,
    typehLineValueAlignItems,
    typehLineValueAlignSelf,
  ]);

  const leftValue1Style = useMemo(() => {
    return {
      color: leftValueColor,
      letterSpacing: leftValueLetterSpacing,
    };
  }, [leftValueColor, leftValueLetterSpacing]);

  const hLine2Style = useMemo(() => {
    return {
      backgroundColor: hLineBackgroundColor,
      flex: hLineFlex,
      position: hLinePosition,
      height: hLineHeight,
      lineBreak: hLineLineBreak,
      width: hLineWidth,
    };
  }, [
    hLineBackgroundColor,
    hLineFlex,
    hLinePosition,
    hLineHeight,
    hLineLineBreak,
    hLineWidth,
  ]);

  return (
    <div className={styles.typehLineValue} style={typehLineValueStyle}>
      <div className={styles.leftValue} style={leftValue1Style}>
        {leftValue}
      </div>
      <div className={styles.hLine} style={hLine2Style} />
    </div>
  );
};

export default TypehLineValue;
